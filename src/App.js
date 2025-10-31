import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import ChartComponent from "./ChartComponent/ChartComponent";
import Footer from "./Footer/Footer";
import "./App.css"; // ✅ make sure this line is here

function App() {
  return (
    <div className="app">
      {/* Left Sidebar (fixed) */}
      <div className="sidebar">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Welcome!</h1>
        <p>This is your main content area with charts below:</p>

        {/* Chart Component */}
        <ChartComponent />

        {/* Footer (only appears at the end when scrolling) */}
        <Footer />
      </div>
    </div>
  );
}

export default App;

