import { useCallback, useEffect, useState } from "react";
import { dashboardService, insightService } from "@/services/api";

/**
 * useDashboardData
 * Fetches and caches dashboard data in a scalable way.
 * Insights are loaded separately to avoid blocking the dashboard.
 */
export const useDashboardData = () => {
  const [dashboardData, setDashboardData] = useState({
    categories: [],
    insights: [],
    overview: {},
    latest_transactions: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isInsightsLoading, setIsInsightsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadInsights = useCallback(async () => {
    setIsInsightsLoading(true);
    try {
      const insights = await insightService.getAIInsights();
      setDashboardData((prev) => ({
        ...prev,
        insights: Array.isArray(insights) ? insights : [],
      }));
    } catch (err) {
      console.error("Failed to load insights", err);
    } finally {
      setIsInsightsLoading(false);
    }
  }, []);

  const loadDashboardData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await dashboardService.getDashboardData();
      setDashboardData({
        categories: data.categories ?? [],
        insights: [],
        overview: data.overview ?? {},
        latest_transactions: data.latest_transactions ?? [],
      });
      setIsLoading(false); // Set loading to false after main data loads
      loadInsights(); // Load insights separately
    } catch (err) {
      setError(err.message || "Unable to load dashboard data");
      setIsLoading(false);
    }
  }, [loadInsights]);

  useEffect(() => {
    loadDashboardData();
  }, [loadDashboardData]);

  return {
    ...dashboardData,
    isLoading,
    isInsightsLoading,
    error,
    refreshDashboard: loadDashboardData,
  };
};

export default useDashboardData;
