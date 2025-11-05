import React, { useState } from "react";
import "./UploadCSV.css";
import ClipLoader from "react-spinners/ClipLoader"; // spinner
import Chart from "react-apexcharts";

function UploadCSV() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [aiData, setAIData] = useState(null); // <-- state for AI preview
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("http://127.0.0.1:8000/upload-csv", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data);
      setAIData(data.ai_preview); // store AI preview
    } catch (err) {
      console.error("Upload error:", err);
      alert("Upload failed. Check backend or file.");
    } finally {
      setTimeout(() => setIsLoading(false), 1500);
    }
  };

  // Helper for chart
  const getChartData = () => {
    if (!result || !result.summary) return { series: [], options: {} };

    const numericColumns = Object.keys(result.summary).filter(
      (col) => result.summary[col].mean !== undefined
    );

    const series = numericColumns.map((col) => ({
      name: col,
      data: [result.summary[col].mean],
    }));

    const options = {
      chart: { type: "bar", height: 250 },
      xaxis: { categories: ["Mean"] },
      title: { text: "Mean of Numeric Columns" },
      colors: ["#26a0fc", "#1c7cd6", "#fbc531", "#e84118", "#00a8ff"],
    };

    return { series, options };
  };

  return (
    <div className="upload-container">
      <h2>📂 Upload a CSV File</h2>
      <div className="upload-box">
        <input type="file" accept=".csv" onChange={handleFileChange} />
        <button onClick={handleUpload} disabled={isLoading}>
          {isLoading ? "Uploading..." : "Upload"}
        </button>
      </div>

      {/* Spinner */}
      <div className="spinner-area">
        <ClipLoader loading={isLoading} size={40} />
      </div>

      {result && (
        <div className="result-box">
          <h3>📊 CSV Insights</h3>

          <div className="info-cards">
            <div className="card">
              <h4>Rows</h4>
              <p>{result.rows}</p>
            </div>
            <div className="card">
              <h4>Columns</h4>
              <p>{result.columns}</p>
            </div>
          </div>

          <h4>Column Names:</h4>
          <div className="columns-list">
            {result.column_names.map((col) => (
              <span key={col} className="column-tag">{col}</span>
            ))}
          </div>

          <h4>Summary:</h4>
          <pre className="summary-box">{JSON.stringify(result.summary, null, 2)}</pre>

          {/* Chart */}
          <h4>📈 CSV Chart</h4>
          <Chart
            options={getChartData().options}
            series={getChartData().series}
            type="bar"
            height={250}
            width="400"
          />

          {/* AI Insights */}
          {aiData && Object.keys(aiData).length > 0 && (
            <div className="ai-preview-box">
              <h3>🤖 AI Insights</h3>
              <div className="ai-cards-container">
                {Object.entries(aiData).map(([col, info], index) => (
                  <div key={col} className="ai-card">
                    <h4>{col}</h4>
                    <p>Average: {info.average}</p>
                    <p>Sum: {info.sum}</p>
                    <p>Max: {info.max}</p>
                    <p>Min: {info.min}</p>
                    <p>Predicted Next: {info.predicted_next_value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default UploadCSV;

