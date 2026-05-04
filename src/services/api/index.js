/**
 * API Services Index
 * Centralized export of all API services
 *
 * Usage:
 * import { authService, categoryService, transactionService } from '@/services/api';
 *
 * Or individual imports:
 * import * as authService from '@/services/api/authService';
 */

export { default as axiosInstance } from "./axiosInstance";
export { default as authService } from "./authService";
export { default as categoryService } from "./categoryService";
export { default as transactionService } from "./transactionService";
export { default as budgetService } from "./budgetService";
export { default as savingPlanService } from "./savingPlanService";
export { default as insightService } from "./insightService";
export { default as errorHandler } from "./errorHandler";
export { API_CONFIG } from "./config";

// Named exports for convenience
export * as authService from "./authService";
export * as categoryService from "./categoryService";
export * as transactionService from "./transactionService";
export * as budgetService from "./budgetService";
export * as savingPlanService from "./savingPlanService";
export * as insightService from "./insightService";
export * as errorHandler from "./errorHandler";
