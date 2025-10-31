import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import ChartComponent from "./ChartComponent/ChartComponent";
import Footer from "./Footer/Footer";
import "./App.css"; // ✅ important

function App() {
  return (
    <div className="app">
      {/* Left Sidebar */}
      <div className="sidebar">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Welcome!</h1>
        <p>This is your main content area with charts below:</p>

        {/* Chart */}
        <ChartComponent />

        {/* Footer — only at bottom after scroll */}
        <Footer />
      </div>
    </div>
  );
}

export default App;


