import React, { useState } from "react";

function DataInsights() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    alert("This will upload file to backend soon! 🚀");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📊 AI Data Insights</h2>
      <p>Upload your CSV file to see automatic data insights.</p>

      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        style={{ marginBottom: "10px" }}
      />

      <button
        onClick={handleUpload}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Upload
      </button>

      {file && (
        <p style={{ marginTop: "15px" }}>
          <strong>Selected File:</strong> {file.name}
        </p>
      )}
    </div>
  );
}

export default DataInsights;
