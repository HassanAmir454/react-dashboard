import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import ChartComponent from "./ChartComponent/ChartComponent";
import Footer from "./Footer/Footer"; 

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

      {/* Footer */ }
       <Footer/>
      </div>
    </div>
  );
}

export default App;
