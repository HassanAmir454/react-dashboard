from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import io
from datetime import datetime

app = FastAPI()

# allow React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory storage for uploaded file info
upload_history = []

@app.get("/")
def home():
    return {"message": "Hello from your AI Dashboard Backend 👋"}

@app.post("/upload-csv")
async def upload_csv(file: UploadFile = File(...)):
    contents = await file.read()
    df = pd.read_csv(io.StringIO(contents.decode("utf-8")))

    num_rows, num_cols = df.shape
    columns = list(df.columns)
    summary = df.describe().to_dict()

    # Additional info
    top_rows = df.head(5).to_dict(orient="records")      # first 5 rows
    bottom_rows = df.tail(5).to_dict(orient="records")   # last 5 rows
    missing_values = df.isnull().sum().to_dict()         # empty cells per column

    # ---------------- AI Preview ----------------
    ai_preview = {}
    numeric_cols = df.select_dtypes(include="number").columns

    for col in numeric_cols:
        values = df[col].dropna().values
        if len(values) > 1:
            # Simple linear trend prediction
            last_value = values[-1]
            avg_change = (values[-1] - values[0]) / (len(values) - 1)
            predicted_next = last_value + avg_change
        elif len(values) == 1:
            predicted_next = values[0]
        else:
            predicted_next = None

        ai_preview[col] = {
            "average": float(values.mean()) if len(values) > 0 else None,
            "sum": float(values.sum()) if len(values) > 0 else None,
            "predicted_next_value": float(predicted_next) if predicted_next is not None else None,
            "max": float(values.max()) if len(values) > 0 else None,
            "min": float(values.min()) if len(values) > 0 else None
        }
    # --------------------------------------------

    # Save info to upload history
    upload_history.append({
        "filename": file.filename,
        "rows": num_rows,
        "columns": num_cols,
        "uploaded_at": datetime.now().isoformat()
    })

    return {
        "rows": num_rows,
        "columns": num_cols,
        "column_names": columns,
        "summary": summary,
        "missing_values": missing_values,
        "top_rows": top_rows,
        "bottom_rows": bottom_rows,
        "ai_preview": ai_preview  # Added AI insights here
    }

@app.get("/upload-history")
def get_upload_history():
    return upload_history

