import React, { useState } from "react";
import "./UploadHistory.css";

const mockUploads = [
  { id: 101, filename: "students.csv", uploaded_at: "2025-11-01T12:00:00Z", rows: 5, cols: 6 },
  { id: 102, filename: "sales.csv", uploaded_at: "2025-11-02T09:30:00Z", rows: 6, cols: 5 },
  { id: 103, filename: "test.csv", uploaded_at: "2025-11-03T15:20:00Z", rows: 3, cols: 4 },
];

export default function UploadHistory({ onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating toggle button */}
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close History" : "View Uploads"}
      </button>

      {/* Slide-out panel */}
      <div className={`history-panel ${isOpen ? "" : "hidden"}`}>
        <h3>📂 Upload History</h3>

        {mockUploads.map((item) => (
          <div
            key={item.id}
            className="upload-item"
            onClick={() => onSelect && onSelect(item.id)}
          >
            <strong>{item.filename}</strong>
            <small>
              {item.rows} rows • {item.cols} cols
              <br />
              {new Date(item.uploaded_at).toLocaleString()}
            </small>
          </div>
        ))}

        {mockUploads.length === 0 && <p>No uploads yet.</p>}
      </div>
    </>
  );
}
