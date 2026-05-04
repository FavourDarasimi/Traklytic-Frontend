/**
 * API Configuration
 * Centralized configuration for API base URL and default settings
 */

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export const API_CONFIG = {
  BASE_URL: API_BASE_URL,
  TIMEOUT: 30000, // 30 seconds
  ENDPOINTS: {
    // Auth endpoints
    AUTH: {
      LOGIN: "/auth/v1/jwt/create/",
      REFRESH: "/auth/v1/jwt/refresh/",
      LOGOUT: "/auth/v1/logout/",
      REGISTER: "/auth/v1/users/",
      CURRENT_USER: "/auth/v1/user/",
    },
    // Tracker endpoints
    TRACKER: {
      // Categories
      CATEGORIES: "/api/v1/get/categories/",
      ADD_CATEGORY: "/api/v1/add/category/",

      // Transactions
      ADD_TRANSACTION: "/api/v1/add/transaction/",
      UPLOAD_RECEIPT: "/api/v1/transaction/upload/receipt/",

      // General Budget
      ADD_GENERAL_BUDGET: "/api/v1/add/general/budget/",
      EDIT_GENERAL_BUDGET: (id) => `/api/v1/edit/general/budget/${id}/`,

      // Category Budget
      ADD_CATEGORY_BUDGET: "/api/v1/add/category/budget/",
      EDIT_CATEGORY_BUDGET: (id) => `/api/v1/edit/category/budget/${id}/`,

      // Saving Plans
      ADD_SAVING_PLAN: "/api/v1/add/saving/plan/",
      CHECK_SAVING_PLAN_STATUS: "/api/v1/check/saving/plan/status/",
      RENEW_SAVING_PLAN: (id) => `/api/v1/renew/saving/plan/${id}/`,
      USER_SAVING_PLANS: "/api/v1/user/saving/plan/",

      // AI Insights
      AI_INSIGHTS: "/api/v1/ai/insights/",
    },
  },
};

export default API_CONFIG;
