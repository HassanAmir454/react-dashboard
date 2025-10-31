import React from "react";
import Header from "./Header/Header";   // ✅ add this line
import Sidebar from "./Sidebar/Sidebar";
import ChartComponent from "./ChartComponent/ChartComponent";
import Footer from "./Footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      {/* Header on top */}
      <Header />

      {/* Main layout: sidebar + content */}
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <h1>Welcome!</h1>
          <p>This is your main content area with a chart:</p>
          <ChartComponent />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;



