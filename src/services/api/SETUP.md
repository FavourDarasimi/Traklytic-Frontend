# API Services Setup Guide

## Installation

First, install Axios:

```bash
npm install axios
```

## Environment Configuration

Create a `.env` file in the `client/` folder:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:8000
```

The `VITE_` prefix is required for Vite to expose environment variables to the frontend.

## API Services Structure

All API services are located in `src/services/api/`:

- **config.js** - API configuration (base URL, endpoints)
- **axiosInstance.js** - Axios instance with JWT interceptors
- **errorHandler.js** - Centralized error handling
- **authService.js** - Authentication operations
- **categoryService.js** - Category CRUD operations
- **transactionService.js** - Transaction operations and OCR
- **budgetService.js** - Budget/spending limit operations
- **savingPlanService.js** - Saving plan operations
- **insightService.js** - AI-powered insights
- **index.js** - Clean exports of all services

## Quick Start

### 1. Login

```javascript
import { authService } from "@/services/api";

async function handleLogin(email, password) {
  try {
    const result = await authService.login(email, password);
    console.log("Logged in:", result.access_token);
  } catch (error) {
    console.error("Login failed:", error.message);
  }
}
```

### 2. Get Categories

```javascript
import { categoryService } from "@/services/api";

async function loadCategories() {
  try {
    const categories = await categoryService.getCategories();
    console.log("Categories:", categories);
  } catch (error) {
    console.error("Failed to load categories:", error.message);
  }
}
```

### 3. Add Transaction

```javascript
import { transactionService } from "@/services/api";

async function addExpense(amount, category, description) {
  try {
    const transaction = await transactionService.addTransaction({
      amount,
      category,
      description,
      type: "expense",
    });
    console.log("Transaction added:", transaction);
  } catch (error) {
    console.error("Failed to add transaction:", error.message);
  }
}
```

### 4. Upload Receipt (OCR)

```javascript
import { transactionService } from "@/services/api";

async function processReceipt(file) {
  try {
    const formData = transactionService.createReceiptFormData(file);
    const data = await transactionService.uploadReceipt(formData);
    console.log("Extracted data:", data);
  } catch (error) {
    console.error("Receipt processing failed:", error.message);
  }
}
```

## Error Handling

All services throw errors with message and originalError:

```javascript
import { errorHandler } from "@/services/api";

try {
  const categories = await categoryService.getCategories();
} catch (error) {
  console.error("Error:", error.message);

  if (errorHandler.isAuthError(error)) {
    // Handle 401/403
  } else if (errorHandler.isValidationError(error)) {
    // Handle 400
  } else if (errorHandler.isServerError(error)) {
    // Handle 5xx
  }
}
```

## Authentication Flow

1. **Login**: Stores access and refresh tokens in localStorage
2. **Auto-refresh**: Automatically refreshes token on 401 response
3. **Logout**: Clears tokens from localStorage
4. **Protected requests**: JWT token added to all requests automatically

The axios interceptor handles token management automatically. No manual token handling needed.

## API Endpoints

All endpoints defined in `config.js`:

- **Auth**: `/auth/v1/jwt/create/`, `/auth/v1/logout/`, etc.
- **Tracker**: `/api/v1/get/categories/`, `/api/v1/add/transaction/`, etc.

## Next Steps

1. Install Axios: `npm install axios`
2. Create `.env` file with `VITE_API_BASE_URL`
3. Start using services in your components
4. Set up authentication context/provider
5. Connect pages to real API data
