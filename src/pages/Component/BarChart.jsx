import React from "react";
import { Bar } from "react-chartjs-2";
 
// Import Chart.js modules
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register modules
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: "rgba(54, 162, 235, 0.8)", // Corresponds to your "--vz-primary-rgb, 0.8"
      },
      {
        label: "Dataset 2",
        data: [28, 48, 40, 19, 86, 27],
        backgroundColor: "rgba(54, 162, 235, 0.9)", // Corresponds to your "--vz-primary-rgb, 0.9"
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
  };

  return (
    <div className="col-xl-6" style={{width:"100%",height:"100%"}} >
      <div className="card" >
        <div className="card-header">
          <h4 className="card-title mb-0">Bar Chart</h4>
        </div>
        <div className="card-body">
          <Bar data={data} options={options}  style={{width:"100%",height:"100%"}}/>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
