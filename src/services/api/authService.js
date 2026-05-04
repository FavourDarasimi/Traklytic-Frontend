/**
 * Authentication Service
 * Handles login, logout, registration, and user management
 */

import axiosInstance from "./axiosInstance";
import { API_CONFIG } from "./config";
import { getErrorMessage } from "./errorHandler";

/**
 * Login user with email and password
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<Object>} - { access_token, refresh_token, user }
 */
export const login = async (email, password) => {
  try {
    const response = await axiosInstance.post(API_CONFIG.ENDPOINTS.AUTH.LOGIN, {
      email,
      password,
    });

    const { access, refresh } = response.data;

    // Store tokens
    localStorage.setItem("access_token", access);
    localStorage.setItem("refresh_token", refresh);

    return {
      access_token: access,
      refresh_token: refresh,
    };
  } catch (error) {
    throw {
      message: getErrorMessage(error),
      originalError: error,
    };
  }
};

/**
 * Register new user
 * @param {Object} userData - { email, password, password_confirm, first_name?, last_name? }
 * @returns {Promise<Object>} - User data or tokens
 */
export const register = async (userData) => {
  try {
    const response = await axiosInstance.post(
      API_CONFIG.ENDPOINTS.AUTH.REGISTER,
      userData,
    );

    // Some backends return tokens immediately, some require login
    if (response.data.access && response.data.refresh) {
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
    }

    return response.data;
  } catch (error) {
    throw {
      message: getErrorMessage(error),
      originalError: error,
    };
  }
};

/**
 * Get current user info
 * @returns {Promise<Object>} - Current user data
 */
export const getCurrentUser = async () => {
  try {
    const response = await axiosInstance.get(
      API_CONFIG.ENDPOINTS.AUTH.CURRENT_USER,
    );
    return response.data;
  } catch (error) {
    throw {
      message: getErrorMessage(error),
      originalError: error,
    };
  }
};

/**
 * Logout user
 * @returns {Promise<Object>} - Logout response
 */
export const logout = async () => {
  try {
    await axiosInstance.post(API_CONFIG.ENDPOINTS.AUTH.LOGOUT);

    // Clear tokens from storage
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");

    return { message: "Logged out successfully" };
  } catch (error) {
    // Clear tokens even if logout fails
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");

    throw {
      message: getErrorMessage(error),
      originalError: error,
    };
  }
};

/**
 * Refresh access token
 * @returns {Promise<string>} - New access token
 */
export const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refresh_token");

    if (!refreshToken) {
      throw new Error("No refresh token available");
    }

    const response = await axiosInstance.post(
      API_CONFIG.ENDPOINTS.AUTH.REFRESH,
      {
        refresh: refreshToken,
      },
    );

    const newAccessToken = response.data.access;
    localStorage.setItem("access_token", newAccessToken);

    return newAccessToken;
  } catch (error) {
    // Clear tokens on refresh failure
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");

    throw {
      message: getErrorMessage(error),
      originalError: error,
    };
  }
};

/**
 * Check if user is authenticated
 * @returns {boolean}
 */
export const isAuthenticated = () => {
  return !!localStorage.getItem("access_token");
};

/**
 * Get stored access token
 * @returns {string|null}
 */
export const getAccessToken = () => {
  return localStorage.getItem("access_token");
};

export default {
  login,
  register,
  getCurrentUser,
  logout,
  refreshAccessToken,
  isAuthenticated,
  getAccessToken,
};
