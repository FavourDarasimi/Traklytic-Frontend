/**
 * Error Handler
 * Centralized error handling logic for API responses
 */

/**
 * Extract error message from various error formats
 * @param {Error} error - The error object
 * @returns {string} - Formatted error message
 */
export const getErrorMessage = (error) => {
  // Axios error response
  if (error.response?.data) {
    const data = error.response.data;

    // Handle validation errors (object with field names as keys)
    if (
      typeof data === "object" &&
      !Array.isArray(data) &&
      !data.message &&
      !data.detail
    ) {
      const errors = Object.values(data)
        .flat()
        .map((e) => (typeof e === "object" ? e.message || e : e))
        .join(", ");
      return errors || "Validation error occurred";
    }

    // Handle standard error formats
    return (
      data.message ||
      data.detail ||
      data.error ||
      JSON.stringify(data) ||
      "An error occurred"
    );
  }

  // Network error
  if (error.message === "Network Error") {
    return "Network error - please check your connection";
  }

  // Timeout error
  if (error.code === "ECONNABORTED") {
    return "Request timeout - please try again";
  }

  // Generic error message
  return error.message || "An unexpected error occurred";
};

/**
 * Parse error response and extract detailed information
 * @param {Error} error - The error object
 * @returns {Object} - Parsed error details
 */
export const parseError = (error) => {
  return {
    message: getErrorMessage(error),
    status: error.response?.status || null,
    data: error.response?.data || null,
    originalError: error,
  };
};

/**
 * Check if error is authentication related
 * @param {Error} error - The error object
 * @returns {boolean}
 */
export const isAuthError = (error) => {
  return error.response?.status === 401 || error.response?.status === 403;
};

/**
 * Check if error is validation error (400 Bad Request)
 * @param {Error} error - The error object
 * @returns {boolean}
 */
export const isValidationError = (error) => {
  return error.response?.status === 400;
};

/**
 * Check if error is not found error (404)
 * @param {Error} error - The error object
 * @returns {boolean}
 */
export const isNotFoundError = (error) => {
  return error.response?.status === 404;
};

/**
 * Check if error is server error (5xx)
 * @param {Error} error - The error object
 * @returns {boolean}
 */
export const isServerError = (error) => {
  return error.response?.status >= 500;
};

export default {
  getErrorMessage,
  parseError,
  isAuthError,
  isValidationError,
  isNotFoundError,
  isServerError,
};
