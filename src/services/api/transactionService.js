/**
 * Transaction Service
 * Handles transaction operations (create, OCR, etc.)
 */

import axiosInstance from "./axiosInstance";
import { API_CONFIG } from "./config";
import { getErrorMessage } from "./errorHandler";

/**
 * Add a new transaction
 * @param {Object} transactionData - Transaction details
 * @returns {Promise<Object>} - Created transaction object
 */
export const addTransaction = async (transactionData) => {
  try {
    const config = {};
    if (transactionData instanceof FormData) {
      config.headers = {
        "Content-Type": "multipart/form-data",
      };
    }

    const response = await axiosInstance.post(
      API_CONFIG.ENDPOINTS.TRACKER.ADD_TRANSACTION,
      transactionData,
      config,
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

/**
 * Upload receipt and extract transaction data via OCR
 * @param {FormData} formData - FormData containing receipt image or PDF
 * @returns {Promise<Object>} - Extracted transaction data
 */
export const uploadReceipt = async (formData) => {
  try {
    const response = await axiosInstance.post(
      API_CONFIG.ENDPOINTS.TRACKER.UPLOAD_RECEIPT,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
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

/**
 * Get user transactions
 * @returns {Promise<Array>} - Transaction list
 */
export const getTransactions = async () => {
  try {
    const response = await axiosInstance.get(
      API_CONFIG.ENDPOINTS.TRACKER.GET_TRANSACTIONS,
    );
    return response.data.data || response.data;
  } catch (error) {
    throw {
      message: getErrorMessage(error),
      originalError: error,
    };
  }
};

/**
 * Helper: Create FormData for receipt upload
 * @param {File} file - Receipt file (image or PDF)
 * @returns {FormData}
 */
export const createReceiptFormData = (file) => {
  const formData = new FormData();
  formData.append("receipt", file);
  return formData;
};

export default {
  addTransaction,
  uploadReceipt,
  createReceiptFormData,
};
