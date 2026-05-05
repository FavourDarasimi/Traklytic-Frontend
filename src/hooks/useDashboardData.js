import { useCallback, useEffect, useState } from "react";
import { dashboardService } from "@/services/api";

/**
 * useDashboardData
 * Fetches and caches dashboard data in a scalable way.
 */
export const useDashboardData = () => {
  const [dashboardData, setDashboardData] = useState({
    categories: [],
    insights: [],
    overview: {},
    latest_transactions: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadDashboardData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await dashboardService.getDashboardData();
      setDashboardData({
        categories: data.categories ?? [],
        insights: data.insights ?? [],
        overview: data.overview ?? {},
        latest_transactions: data.latest_transactions ?? [],
      });
    } catch (err) {
      setError(err.message || "Unable to load dashboard data");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDashboardData();
  }, [loadDashboardData]);

  return {
    ...dashboardData,
    isLoading,
    error,
    refreshDashboard: loadDashboardData,
  };
};

export default useDashboardData;
