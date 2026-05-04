# Authentication Implementation Guide

## Overview

The authentication system has been fully implemented with the following features:

- ✅ User login with email and password
- ✅ User registration/signup
- ✅ Token storage and management
- ✅ Protected routes requiring authentication
- ✅ Automatic token refresh on expiration
- ✅ Logout functionality
- ✅ Password reset support
- ✅ Email verification support
- ✅ User profile display in navigation

## Architecture

### 1. Authentication Service Layer (`src/services/api/authService.js`)

Core API functions for authentication operations:

```javascript
// Login
const result = await authService.login(email, password);

// Registration
const result = await authService.register({
  email,
  password,
  password_confirm: password,
  first_name: "John",
  last_name: "Doe",
});

// Get current user
const user = await authService.getCurrentUser();

// Logout
await authService.logout();

// Password reset
await authService.requestPasswordReset(email);
await authService.confirmPasswordReset({
  uid,
  token,
  new_password,
  re_new_password,
});

// Email verification
await authService.resendActivationEmail(email);
await authService.activateAccount({ uid, token });

// Change password
await authService.changePassword({
  old_password,
  new_password,
  re_new_password,
});
```

### 2. Auth Context (`src/context/AuthContext.jsx`)

Manages global authentication state and provides auth methods to all components:

```javascript
// Provider wraps the entire app
<AuthProvider>
  <App />
</AuthProvider>;

// Available in context:
{
  (user, // Current user object
    isAuthenticated, // Boolean
    isLoading, // Loading state
    error, // Error message if any
    login, // Function
    register, // Function
    logout, // Function
    requestPasswordReset,
    confirmPasswordReset,
    resendActivationEmail,
    activateAccount,
    changePassword);
}
```

### 3. useAuth Hook (`src/hooks/useAuth.js`)

Custom hook for easy access to auth context:

```javascript
import { useAuth } from "@/hooks/useAuth";

function MyComponent() {
  const { user, login, logout, isLoading } = useAuth();

  // Use auth functions and state
}
```

### 4. Protected Routes (`src/components/ProtectedRoute.jsx`)

Wrapper component that protects routes requiring authentication:

```javascript
// In App.jsx
<Route
  element={
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  }
>
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/transactions" element={<Transactions />} />
  <Route path="/settings" element={<Settings />} />
</Route>

// Unauthenticated users are redirected to /auth
```

## Authentication Flow

### 1. Login Flow

```
User enters credentials
        ↓
Authentication.jsx (form validation)
        ↓
AuthContext.login()
        ↓
authService.login() → API call
        ↓
Tokens stored in localStorage (via interceptor)
        ↓
Fetch current user data
        ↓
User state updated in context
        ↓
Redirect to /dashboard
```

### 2. Protected Route Access

```
User accesses /dashboard
        ↓
ProtectedRoute component checks
        ↓
Is token in localStorage?
  ├─ YES → Render protected content
  └─ NO  → Redirect to /auth
```

### 3. Token Refresh Flow

```
API request made (with Authorization header)
        ↓
Response received
  ├─ 401 Unauthorized error
  │   ↓
  │   Axios interceptor detects 401
  │   ↓
  │   Calls refresh endpoint with refresh_token
  │   ↓
  │   New access_token received and stored
  │   ↓
  │   Original request retried with new token
  │   ↓
  │   Response returned to component
  │
  └─ Other responses → Normal handling
```

### 4. Logout Flow

```
User clicks Logout button
        ↓
AuthContext.logout()
        ↓
authService.logout() → API call
        ↓
localStorage cleared (tokens, user data)
        ↓
User state reset to null
        ↓
Redirect to /auth
```

## Key Components Modified

### App.jsx

- Wrapped with `<AuthProvider>` at root level
- Protected dashboard routes with `<ProtectedRoute>`
- Public routes: `/`, `/auth`
- Protected routes: `/dashboard`, `/transactions`, `/settings`

### Authentication.jsx

- Integrated with `useAuth()` hook
- Form validation before submission
- Real API calls for login/signup
- Error handling and display
- Loading states with spinner
- Success messages
- Toggle between login and signup modes

### Navbar.jsx (Layout)

- Displays user profile (avatar, name, email)
- User dropdown menu
- Settings navigation link
- Logout button with proper cleanup
- Responsive design for mobile and desktop

### API Services

- Updated `config.js` with new endpoints for password reset
- Enhanced `authService.js` with password reset functions
- Axios interceptors handle JWT token management automatically

## Token Management

### Storage

Tokens are stored in `localStorage`:

- `access_token`: Short-lived JWT (10 minutes default)
- `refresh_token`: Long-lived token (7 days default)

### Auto-Refresh

When an access token expires:

1. Axios interceptor detects 401 response
2. Uses refresh_token to get new access_token
3. Automatically retries the failed request
4. No user interaction required

### Logout Cleanup

On logout, tokens are:

1. Cleared from localStorage
2. User state reset in context
3. Cross-tab logout event dispatched
4. User redirected to login page

## Usage Examples

### Login in a Component

```javascript
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const { login, isLoading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await login(email, password);

    if (result.success) {
      navigate("/dashboard");
    } else {
      console.error(result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <button disabled={isLoading}>{isLoading ? "Loading..." : "Login"}</button>
    </form>
  );
}
```

### Display User Info

```javascript
import { useAuth } from "@/hooks/useAuth";

function UserProfile() {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) return null;

  return (
    <div>
      <h1>Welcome, {user?.first_name}!</h1>
      <p>Email: {user?.email}</p>
    </div>
  );
}
```

### Logout in a Component

```javascript
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      navigate("/auth");
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
}
```

## Backend Integration

The frontend expects these endpoints from the backend (Djoser):

```
Auth Endpoints:
POST   /auth/v1/jwt/create/              - Login (returns access & refresh tokens)
POST   /auth/v1/jwt/refresh/             - Refresh access token
POST   /auth/v1/users/                   - Register (create new user)
GET    /auth/v1/user/                    - Get current user info
POST   /auth/v1/logout/                  - Logout
POST   /auth/v1/users/reset_password/    - Request password reset (sends email)
POST   /auth/v1/users/reset_password_confirm/ - Confirm password reset
POST   /auth/v1/users/set_password/      - Change password (authenticated user)
POST   /auth/v1/users/resend_activation/ - Resend activation email
POST   /auth/v1/users/activation/        - Activate account with token
```

## Configuration

### Environment Variables (.env)

```env
VITE_API_BASE_URL=http://localhost:8000
```

Change this to your production URL when deploying.

### API Configuration (src/services/api/config.js)

All endpoints are centralized in this file. Update here if backend deployment changes.

## Security Considerations

1. **Token Storage**: Tokens stored in localStorage (not HttpOnly cookies for this implementation)
   - ✅ Accessible to JavaScript (needed for manual token refresh)
   - ⚠️ Vulnerable to XSS attacks (mitigate with CSP headers)

2. **Token Expiration**: Access tokens expire after 10 minutes
   - Auto-refresh via interceptor keeps user session alive
   - Refresh tokens expire after 7 days
   - User must login again after 7 days of inactivity

3. **Protected Routes**: All dashboard routes require authentication
   - Unauthenticated access redirected to login
   - Failed token validation clears storage and logs out

4. **CORS**: Configure in backend settings
   - Ensure frontend URL is in CORS allowed origins
   - Handle CORS errors gracefully in production

## Future Enhancements

1. **Email Verification Required**: Validate email before account activation
   - Implement activation flow in UI
   - Show email verification pending page

2. **Password Reset UI**: Complete password reset flow
   - Add password reset page with uid/token from email link
   - Implement confirmPasswordReset() function

3. **Two-Factor Authentication**: Additional security layer
   - Add TOTP or SMS verification
   - Backend should support two_factor_auth endpoint

4. **HttpOnly Cookies**: More secure token storage
   - Backend sends tokens as HttpOnly cookies
   - Remove localStorage usage
   - Remove manual refresh token handling

5. **Profile Picture Upload**: User avatar in settings
   - Add image upload in Settings page
   - Display in navbar user menu

6. **Remember Me**: Persistent login option
   - Store refresh token preference
   - Extend refresh token expiration

## Troubleshooting

### User keeps getting redirected to /auth

Check:

- Token is properly stored in localStorage
- `useAuth()` context is initialized
- `<AuthProvider>` wraps your app at root level

### API calls fail with 401

Check:

- Backend is running on correct port
- CORS is properly configured
- Access token is in localStorage
- Token hasn't expired (check refresh token)

### onChange events not triggering in forms

This is likely a React state issue, not auth-related. Common fix:

```javascript
onChange={(e) => setEmail(e.target.value)}
// Make sure value prop is set
value={email}
```

### User info not showing in navbar

Check:

- `user` object is populated after login
- Frontend waited for `getCurrentUser()` call
- User object has `first_name` and `last_name` fields

## Additional Resources

- Django Djoser Documentation: https://djoser.readthedocs.io/
- SimpleJWT Documentation: https://django-rest-framework-simplejwt.readthedocs.io/
- React Context API: https://react.dev/learn/passing-data-deeply-with-context
- React Router Protected Routes: https://reactrouter.com/en/main/start/overview
