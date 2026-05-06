import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ChevronDown, TrendingUp } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

const ExpensesStatistics = ({ chartData = null }) => {
  const [period, setPeriod] = useState("day");
  const [isOpen, setIsOpen] = useState(false);

  const dataByPeriod = {
    day: {
      labels: ["Sep 1", "Sep 2", "Sep 3", "Sep 4", "Sep 5", "Sep 6"],
      data: [120, 115, 75, 50, 40, 35],
    },
    week: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      data: [800, 750, 650, 500],
    },
    month: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      data: [3200, 3100, 2900, 2500, 2000, 1800],
    },
  };

  const currentData = dataByPeriod[period];
  const activeChartData =
    chartData?.labels?.length && chartData?.data?.length
      ? chartData
      : currentData;

  const hasBackendData = chartData?.labels?.length && chartData?.data?.length;

  const data = {
    labels: activeChartData.labels,
    datasets: [
      {
        label: "Expenses",
        data: activeChartData.data,
        borderColor: "rgb(22, 163, 74)",
        backgroundColor: "rgba(22, 163, 74, 0.1)",
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointBackgroundColor: "rgb(22, 163, 74)",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: 12,
        borderRadius: 8,
        titleFont: { size: 12, weight: "bold" },
        bodyFont: { size: 12 },
        callbacks: {
          label: function (context) {
            return `₦${context.parsed.y}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: { size: 11 },
          color: "rgba(0, 0, 0, 0.5)",
        },
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
          drawBorder: false,
        },
      },
      x: {
        ticks: {
          font: { size: 11 },
          color: "rgba(0, 0, 0, 0.5)",
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6 w-full flex flex-col min-h-[400px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base md:text-[19px] font-semibold">
          Expenses Statistics
        </h2>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-3 font-medium px-3 py-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {period.charAt(0).toUpperCase() + period.slice(1)}{" "}
            <ChevronDown size={16} />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              {["day", "week", "month"].map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setPeriod(option);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                    period === option
                      ? "bg-green-50 text-green-600"
                      : "text-gray-700 hover:bg-gray-50"
                  } ${option === "day" ? "rounded-t-lg" : ""} ${option === "month" ? "rounded-b-lg" : ""}`}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {!hasBackendData ? (
        <div className="flex-1 flex flex-col items-center justify-center min-h-[320px]">
          <div className="flex flex-col items-center gap-3">
            <div className="p-3 rounded-full bg-gray-100">
              <TrendingUp size={24} className="text-gray-400" />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-600 mb-1">
                No expense data yet
              </p>
              <p className="text-xs text-gray-400">
                Add transactions to see your expense trends
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative flex-1 min-h-[320px]">
          <Line data={data} options={options} />
        </div>
      )}
    </div>
  );
};

export default ExpensesStatistics;
