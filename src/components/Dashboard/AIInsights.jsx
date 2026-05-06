import React, { useEffect, useMemo, useState } from "react";
import { Sparkles, ChevronRight } from "lucide-react";

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
    return [];
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

  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6 w-full flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gray-200 animate-pulse flex items-center justify-center flex-shrink-0">
              <Sparkles size={13} className="text-gray-400" />
            </div>
            <div className="h-5 bg-gray-200 rounded animate-pulse w-24"></div>
          </div>
        </div>

        <div className="flex gap-1.5 mb-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex-1 h-1 rounded-full bg-gray-200 animate-pulse"
            ></div>
          ))}
        </div>

        <div className="flex-1 flex flex-col justify-between min-h-[150px]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-xl bg-gray-200 animate-pulse"></div>
              <div className="h-5 bg-gray-200 rounded animate-pulse w-16"></div>
            </div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded animate-pulse w-full"></div>
            <div className="h-3 bg-gray-200 rounded animate-pulse w-2/3"></div>
          </div>
        </div>
      </div>
    );
  }

  if (insightItems.length === 0) {
    return null;
  }

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
