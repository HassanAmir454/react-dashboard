// import React from "react";
// import { motion } from "framer-motion";

// function HomePage() {
//   return (
//     <motion.div 
//       initial={{ opacity: 0, x: -30 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <h1>🏠 Home Dashboard</h1>
//       <p>Welcome to your interactive AI dashboard!</p>
//     </motion.div>
//   );
// }

// export default HomePage;

import React from "react";
import { motion } from "framer-motion";
import Chart from "react-apexcharts";
import "./HomePage.css";

function HomePage({ darkMode }) { // receive darkMode prop
  // Sample chart data
  const salesChart = {
    series: [{ name: "Sales", data: [30, 45, 60, 50, 70, 80, 65] }],
    options: {
      chart: { id: "sales-chart", toolbar: { show: false } },
      xaxis: { categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
      colors: ["#26a0fc"],
      dataLabels: { enabled: false },
      stroke: { curve: "smooth" },
      title: { text: "Weekly Sales Overview", align: "left" },
    },
  };

  const trafficChart = {
    series: [{ name: "Visitors", data: [120, 200, 150, 300, 250, 400, 320] }],
    options: {
      chart: { id: "traffic-chart", toolbar: { show: false } },
      xaxis: { categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
      colors: ["#ff6b81"],
      dataLabels: { enabled: false },
      stroke: { curve: "smooth" },
      title: { text: "Weekly Traffic", align: "left" },
    },
  };

  // Decide text color
  const textColor = darkMode ? "white" : "black";

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 style={{ color: textColor }}>🏠 Welcome to Hassan's Dashboard</h1>
      <p style={{ color: textColor }}>Interactive AI dashboard with insights and analytics!</p>

      {/* Info Cards */}
      <div className="home-cards">
        <div className="card">
          <h3 style={{ color: textColor }}>Total Users</h3>
          <p style={{ color: textColor }}>1,245</p>
        </div>
        <div className="card">
          <h3 style={{ color: textColor }}>Total Sales</h3>
          <p style={{ color: textColor }}>$42,560</p>
        </div>
        <div className="card">
          <h3 style={{ color: textColor }}>Active Sessions</h3>
          <p style={{ color: textColor }}>320</p>
        </div>
        <div className="card">
          <h3 style={{ color: textColor }}>New Signups</h3>
          <p style={{ color: textColor }}>75</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-home">
        <div className="chart-box">
          <h3 style={{ color: textColor }}>📈 Weekly Sales</h3>
          <Chart
            options={salesChart.options}
            series={salesChart.series}
            type="line"
            height={250}
          />
        </div>

        <div className="chart-box">
          <h3 style={{ color: textColor }}>👥 Weekly Traffic</h3>
          <Chart
            options={trafficChart.options}
            series={trafficChart.series}
            type="line"
            height={250}
          />
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="quick-stats">
        <div className="stat-card">
          <h4 style={{ color: textColor }}>Server Status</h4>
          <p style={{ color: textColor }}>🟢 Online</p>
        </div>
        <div className="stat-card">
          <h4 style={{ color: textColor }}>Pending Tasks</h4>
          <p style={{ color: textColor }}>12</p>
        </div>
        <div className="stat-card">
          <h4 style={{ color: textColor }}>Errors Today</h4>
          <p style={{ color: textColor }}>2</p>
        </div>
      </div>
    </motion.div>
  );
}

export default HomePage;


