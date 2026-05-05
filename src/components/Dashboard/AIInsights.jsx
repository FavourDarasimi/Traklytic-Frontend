import React, { useEffect, useMemo, useState } from "react";
import { Sparkles, ChevronRight } from "lucide-react";

const DEFAULT_INSIGHTS = [
  {
    id: 1,
    type: "warning",
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
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50",
    title: "Budget limit approaching",
    description:
      "You've used 80% of your monthly budget with 9 days remaining. Reduce discretionary spending to stay on track.",
    tag: "Budget",
    tagColor: "bg-amber-50 text-amber-600",
  },
];

const AIInsights = ({ insights = [], isLoading = false }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const insightItems = useMemo(() => {
    if (Array.isArray(insights) && insights.length > 0) {
      return insights.map((item, index) => {
        if (typeof item === "string") {
          return {
            id: `insight-${index}`,
            title: item,
            description: item,
            tag: "Insight",
            iconColor: "text-green-600",
            iconBg: "bg-green-50",
            tagColor: "bg-green-50 text-green-600",
          };
        }
        return {
          id: item.id ?? `insight-${index}`,
          title: item.title || item.message || item.text || "Insight available",
          description:
            item.description ||
            item.message ||
            item.text ||
            "Review your recent activity.",
          tag: item.tag || "Insight",
          iconColor: item.iconColor || "text-green-600",
          iconBg: item.iconBg || "bg-green-50",
          tagColor: item.tagColor || "bg-green-50 text-green-600",
        };
      });
    }
    return DEFAULT_INSIGHTS;
  }, [insights]);

  useEffect(() => {
    setActiveIndex(0);
  }, [insightItems.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % insightItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [insightItems.length]);

  const currentInsight = insightItems[activeIndex] || insightItems[0];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6 w-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
            <Sparkles size={13} className="text-white" />
          </div>
          <h2 className="text-base md:text-[19px] font-semibold">
            AI Insights
          </h2>
        </div>
      </div>

      <div className="flex gap-1.5 mb-4">
        {insightItems.map((insight, i) => (
          <button
            key={insight.id}
            onClick={() => setActiveIndex(i)}
            className={`flex-1 h-1 rounded-full transition-all duration-300 ${
              activeIndex === i ? "bg-green-600" : "bg-gray-200"
            }`}
            type="button"
          />
        ))}
      </div>

      <div className="flex-1 flex flex-col justify-between min-h-[150px]">
        {isLoading ? (
          <div className="animate-pulse space-y-3 py-8">
            <div className="h-4 rounded bg-gray-200 w-3/4" />
            <div className="h-4 rounded bg-gray-200 w-full" />
            <div className="h-4 rounded bg-gray-200 w-5/6" />
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div
                className={`w-9 h-9 rounded-xl ${currentInsight.iconBg} flex items-center justify-center`}
              >
                <div className={currentInsight.iconColor} />
              </div>
              <span
                className={`text-[11px] md:text-xs font-medium px-2.5 py-1 rounded-full ${currentInsight.tagColor}`}
              >
                {currentInsight.tag}
              </span>
            </div>
            <h3 className="text-sm md:text-[15px] font-semibold text-gray-900 leading-snug">
              {currentInsight.title}
            </h3>
            <p className="text-xs md:text-[13px] text-gray-500 leading-relaxed">
              {currentInsight.description}
            </p>
          </div>
        )}

        <div className="flex items-center justify-between mt-5">
          <div className="flex gap-1.5">
            {insightItems.map((insight, i) => (
              <button
                key={`${insight.id}-dot`}
                onClick={() => setActiveIndex(i)}
                className={`rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? "w-4 h-2 bg-green-600"
                    : "w-2 h-2 bg-gray-200 hover:bg-gray-300"
                }`}
                type="button"
              />
            ))}
          </div>

          <button
            onClick={() =>
              setActiveIndex((prev) => (prev + 1) % insightItems.length)
            }
            className="flex items-center gap-1 text-xs md:text-[13px] font-medium text-green-600 hover:text-green-700 transition-colors"
            type="button"
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
