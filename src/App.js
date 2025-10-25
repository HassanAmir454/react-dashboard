import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import ChartComponent from "./ChartComponent/ChartComponent";

function App() {
  return (
    <div style={{ display: "flex" }}>
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ padding: "20px", flex: 1 }}>
        <h1>Welcome!</h1>
        <p>This is your main content area with a chart:</p>

        {/* Chart */}
        <ChartComponent />
      </div>
    </div>
  );
}

export default App;
