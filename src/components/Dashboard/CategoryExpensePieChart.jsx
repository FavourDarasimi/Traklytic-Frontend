import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryExpensePieChart = () => {
  const data = {
    labels: [
      "Category A",
      "Category B",
      "Category C",
      "Category D",
      "Category E",
      "Category F",
      "Category F",
      "Category F",
      "Category F",
    ],
    datasets: [
      {
        label: "Categories",
        data: [30, 20, 15, 15, 10, 10, 18, 45, 78], // Values for each segment
        backgroundColor: [
          "#A74C72", // Blue
          "#7DA74C", // Teal
          "#724CA7 ", // Yellow
          "#A7724C ", // Pink
          "#4CA7A7 ", // Purple
          "#4C72A7 ", // Orange
          "#4C72A7 ", // Orange
          "#4C72A7 ", // Orange
          "#4C72A7 ", // Orange
        ],
        borderWidth: 4,
      },
    ],
  };

  // Chart options to make it a donut and match the style
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "35%", // Creates the hollow center (donut effect)
    plugins: {
      legend: {
        display: false, // Hide legend (as in the image)
      },
      tooltip: {
        enabled: true,
      },
    },
  };
  return (
    <div className="w-fit max-w-[380px]">
      <div className="px-6 py-5 rounded-xl bg-white border-[1px] border-[#e6e6e6] shadow-xl">
        <h2 className="text-lg font-semibold text-card-foreground mb-5">
          Expense Categories
        </h2>

        <div className="flex gap-4">
          <div className="w-[180px] h-[180px] flex-shrink-0">
            <Doughnut data={data} options={options} />
          </div>

          {/* Scrollable labels container */}
          <div className="flex-1 min-w-0">
            <div
              className="space-y-2 max-h-[180px] overflow-y-auto custom-scrollbar pr-2"
              style={{ maxHeight: "180px" }}
            >
              {data.labels.map((label, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm font-medium text-card-foreground"
                >
                  <span
                    style={{
                      backgroundColor: data.datasets[0].backgroundColor[i],
                    }}
                    className="w-3 h-3 rounded-full flex-shrink-0"
                  ></span>
                  <span className="truncate">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-4 pt-4 border-t border-[#e6e6e6]">
          <p className="text-base font-medium text-card-foreground">
            Total: <span className="font-bold">$1,000</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryExpensePieChart;
