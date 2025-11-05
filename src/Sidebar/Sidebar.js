import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const location = useLocation();
  const [showHistory, setShowHistory] = useState(false);
  const [uploadHistory, setUploadHistory] = useState([]);
  const [isOpen, setIsOpen] = useState(true); // New: Sidebar toggle

  useEffect(() => {
    if (showHistory) {
      fetch("http://127.0.0.1:8000/upload-history")
        .then((res) => res.json())
        .then((data) => setUploadHistory(data))
        .catch((err) => console.error("Error fetching history:", err));
    }
  }, [showHistory]);

  return (
    <>
      {/* Hamburger Button for Mobile */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <h2>📊 Hassan's Dashboard</h2>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === "/upload" ? "active" : ""}>
            <Link to="/upload">Upload CSV</Link>
          </li>
          <li className={location.pathname === "/settings" ? "active" : ""}>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>

        {/* Upload History */}
        <div className="history-section">
          <button className="history-toggle" onClick={() => setShowHistory(!showHistory)}>
            {showHistory ? "Hide Upload History ▲" : "Show Upload History ▼"}
          </button>

          {showHistory && (
            <div className="history-list">
              {uploadHistory.length > 0 ? (
                uploadHistory.map((item, index) => (
                  <div key={index} className="history-item">
                    <strong>{item.filename}</strong>
                    <small>
                      {item.rows} rows • {item.columns} cols
                      <br />
                      {new Date(item.uploaded_at).toLocaleString()}
                    </small>
                  </div>
                ))
              ) : (
                <p>No uploads yet.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Sidebar;


