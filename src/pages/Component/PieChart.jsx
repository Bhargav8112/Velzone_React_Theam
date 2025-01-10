import React from "react";
import { Pie } from "react-chartjs-2";

// Import Chart.js modules
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register modules
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",  // Red
          "rgba(54, 162, 235, 0.8)",  // Blue
          "rgba(255, 206, 86, 0.8)",  // Yellow
          "rgba(75, 192, 192, 0.8)",  // Green
          "rgba(153, 102, 255, 0.8)", // Purple
          "rgba(255, 159, 64, 0.8)",  // Orange
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="col-xl-6"  style={{width:"100%",height:"100%"}}>
      <div className="card"  >
        <div className="card-header">
          <h4 className="card-title mb-0">Pie Chart</h4>
        </div>
        <div className="card-body" >
          <Pie data={data} options={options}  style={{width:"100%",height:"100%"}}  />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
