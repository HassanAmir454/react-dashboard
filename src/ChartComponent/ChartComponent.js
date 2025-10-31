import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./ChartComponent.css"; // We'll style it next

class ChartComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Chart 1 (Your existing chart)
      areaOptions: {
        chart: { id: "basic-bar" },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
      },
      areaSeries: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91, 85],
        },
      ],

      // Chart 2 (Bar chart)
      barOptions: {
        chart: { id: "bar-chart" },
        xaxis: { categories: ["Mon", "Tue", "Wed", "Thu", "Fri"] },
      },
      barSeries: [
        { name: "Visitors", data: [120, 200, 150, 80, 70] },
      ],

      // Chart 3 (Donut chart)
      donutOptions: {
        labels: ["Apples", "Bananas", "Oranges", "Grapes"],
      },
      donutSeries: [44, 55, 13, 33],
    };
  }

  render() {
    return (
      <div className="charts-container">
        {/* Chart 1 - Area */}
        <div className="chart-box">
          <h3>📈 Growth Over Time</h3>
          <Chart
            options={this.state.areaOptions}
            series={this.state.areaSeries}
            type="area"
            width="400"
          />
        </div>

        {/* Chart 2 - Bar */}
        <div className="chart-box">
          <h3>📊 Weekly Visitors</h3>
          <Chart
            options={this.state.barOptions}
            series={this.state.barSeries}
            type="bar"
            width="400"
          />
        </div>

        {/* Chart 3 - Donut */}
        <div className="chart-box">
          <h3>🍩 Fruit Sales</h3>
          <Chart
            options={this.state.donutOptions}
            series={this.state.donutSeries}
            type="donut"
            width="400"
          />
        </div>
      </div>
    );
  }
}

export default ChartComponent;

