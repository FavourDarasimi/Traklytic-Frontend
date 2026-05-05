// ProgressBar.jsx
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register required components
ChartJS.register(BarElement, CategoryScale, LinearScale);

const ProgressBar = ({ percent, single }) => {
  // Ensure percent is between 0 and 100
  const normalizedPercent = Math.min(Math.max(percent, 0), 100);

  // Chart.js data
  const data = {
    labels: ["Progress"],
    datasets: [
      {
        data: [normalizedPercent],
        backgroundColor: "#43A047", // Tailwind's blue-600
        borderRadius: 9999, // Fully rounded edges
        barThickness: 14, // Height of the bar (line-like)
      },
    ],
  };

  // Chart.js options
  const options = {
    indexAxis: "y", // Horizontal bar
    scales: {
      x: {
        display: false, // Hide x-axis
        max: 100, // Max value for percentage
      },
      y: {
        display: false, // Hide y-axis
      },
    },
    plugins: {
      legend: { display: false }, // Hide legend
      tooltip: { enabled: false }, // Disable tooltips
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div
      className={`w-full bg-gray-300  rounded-full ${
        single ? "h-4" : "h-2"
      } overflow-hidden`}
    >
      <div
        className="relative h-full "
        role="progressbar"
        aria-valuenow={normalizedPercent}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ProgressBar;
