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
        "summary": summary
    }

@app.get("/upload-history")
def get_upload_history():
    return upload_history
