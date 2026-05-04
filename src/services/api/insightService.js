/**
 * Insight Service
 * Handles AI-powered insights and recommendations
 */

import axiosInstance from "./axiosInstance";
import { API_CONFIG } from "./config";
import { getErrorMessage } from "./errorHandler";

/**
 * Get AI-generated spending insights
 * @returns {Promise<Object>} - Spending insights and recommendations
 */
export const getAIInsights = async () => {
  try {
    const response = await axiosInstance.get(
      API_CONFIG.ENDPOINTS.TRACKER.AI_INSIGHTS,
    );

    // Backend returns { success, message, data }
    return response.data.data || response.data;
  } catch (error) {
    throw {
      message: getErrorMessage(error),
      originalError: error,
    };
  }
};

export default {
  getAIInsights,
};
