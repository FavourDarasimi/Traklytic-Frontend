import React, { useState } from "react";
import { Sparkles, TrendingDown, TrendingUp, AlertCircle, ChevronRight, RefreshCw } from "lucide-react";

const insights = [
  {
    id: 1,
    type: "warning",
    icon: TrendingDown,
    iconColor: "text-red-500",
    iconBg: "bg-red-50",
    title: "High spending on Food",
    description:
      "You've spent 42% more on Food this month compared to last month. Consider setting a category budget.",
    tag: "Spending",
    tagColor: "bg-red-50 text-red-600",
  },
  {
    id: 2,
    type: "positive",
    icon: TrendingUp,
    iconColor: "text-green-600",
    iconBg: "bg-green-50",
    title: "Income increased this week",
    description:
      "Your income is up ₦12,000 (22%) compared to last week. Great time to boost your savings.",
    tag: "Income",
    tagColor: "bg-green-50 text-green-600",
  },
  {
    id: 3,
    type: "tip",
    icon: AlertCircle,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50",
    title: "Budget limit approaching",
    description:
      "You've used 80% of your monthly budget with 9 days remaining. Reduce discretionary spending to stay on track.",
    tag: "Budget",
    tagColor: "bg-amber-50 text-amber-600",
  },
];

const AIInsights = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1200);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6 w-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
            <Sparkles size={13} className="text-white" />
          </div>
          <h2 className="text-base md:text-[19px] font-semibold">AI Insights</h2>
        </div>
        <button
          onClick={handleRefresh}
          title="Refresh insights"
          className="text-gray-400 hover:text-gray-700 hover:bg-gray-100 p-1.5 rounded-lg transition-colors"
        >
          <RefreshCw
            size={14}
            className={refreshing ? "animate-spin text-green-600" : ""}
          />
        </button>
      </div>

      {/* Insight Tabs */}
      <div className="flex gap-1.5 mb-4">
        {insights.map((insight, i) => (
          <button
            key={insight.id}
            onClick={() => setActiveIndex(i)}
            className={`flex-1 h-1 rounded-full transition-all duration-300 ${
              activeIndex === i ? "bg-green-600" : "bg-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Active Insight Card */}
      <div className="flex-1 flex flex-col justify-between">
        {insights.map((insight, i) => {
          const Icon = insight.icon;
          if (i !== activeIndex) return null;
          return (
            <div key={insight.id} className="flex flex-col gap-3">
              {/* Icon + Tag row */}
              <div className="flex items-center justify-between">
                <div
                  className={`w-9 h-9 rounded-xl ${insight.iconBg} flex items-center justify-center`}
                >
                  <Icon size={17} className={insight.iconColor} />
                </div>
                <span
                  className={`text-[11px] md:text-xs font-medium px-2.5 py-1 rounded-full ${insight.tagColor}`}
                >
                  {insight.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-sm md:text-[15px] font-semibold text-gray-900 leading-snug">
                {insight.title}
              </h3>

              {/* Description */}
              <p className="text-xs md:text-[13px] text-gray-500 leading-relaxed">
                {insight.description}
              </p>
            </div>
          );
        })}

        {/* Navigation Dots + Action */}
        <div className="flex items-center justify-between mt-5">
          <div className="flex gap-1.5">
            {insights.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? "w-4 h-2 bg-green-600"
                    : "w-2 h-2 bg-gray-200 hover:bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() =>
              setActiveIndex((prev) => (prev + 1) % insights.length)
            }
            className="flex items-center gap-1 text-xs md:text-[13px] font-medium text-green-600 hover:text-green-700 transition-colors"
          >
            Next
            <ChevronRight size={13} />
          </button>
        </div>
      </div>

     
    </div>
  );
};

export default AIInsights;
