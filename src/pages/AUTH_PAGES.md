# Authentication Pages Documentation

## Overview

The authentication system includes the following pages for complete user account management:

## Pages

### 1. Authentication Page (`/auth`)

**File:** `src/pages/Authentication.jsx`

Login and signup page with:

- Email validation
- Password strength requirements
- Form validation before submission
- Error handling and user feedback
- Toggle between login and signup modes

**Features:**

- Login with email and password
- Register new account
- Forgot password link (navigates to password reset)
- Form validation
- Loading states
- Error/success messages

---

### 2. Password Reset Page (`/password-reset`)

**File:** `src/pages/PasswordReset.jsx`

Request password reset via email.

**Flow:**

1. User enters email address
2. Email validation on client side
3. API sends password reset instructions email
4. User receives email with reset link
5. User clicks link (contains `uid` and `token` query params)
6. Redirected to `/reset-password-confirm`

**Features:**

- Email input with validation
- API call to request password reset
- Success message with timer redirect
- Error handling
- Loading spinner

**Query Parameters:** None (email is entered by user)

---

### 3. Password Reset Confirmation Page (`/reset-password-confirm`)

**File:** `src/pages/ResetPasswordConfirm.jsx`

Confirm password reset with new password.

**Flow:**

1. User accesses from email link with `uid` and `token`
2. Page validates parameters exist
3. User enters new password twice
4. API confirms password reset with token
5. Password changed successfully
6. Redirected to login page

**Features:**

- Password input with show/hide toggle
- Password confirmation matching
- Token validation
- Graceful error handling for expired links
- Link to request new reset if expired
- Loading spinner

**Query Parameters:**

```
?uid=<user_id>&token=<reset_token>
```

Both parameters required from backend email link.

---

### 4. Email Verification Page (`/verify-email`)

**File:** `src/pages/VerifyEmail.jsx`

Automatically verify/activate email account.

**Flow:**

1. User clicks verification link in email
2. Page has `uid` and `token` in URL
3. Automatic API call to activate account
4. Success or error shown
5. Redirects to login or show retry options

**Features:**

- Automatic activation on page load
- Loading spinner during verification
- Success state with redirect timer
- Error state with retry options
- Link to resend verification if expired
- Graceful handling of missing parameters

**Query Parameters:**

```
?uid=<user_id>&token=<activation_token>
```

Both parameters required from backend email link.

---

### 5. Resend Verification Email Page (`/resend-verification`)

**File:** `src/pages/ResendVerification.jsx`

Request new verification email.

**Flow:**

1. User enters email address
2. Email validation on client side
3. API sends new verification email
4. Success message shown
5. Redirects to login after 3 seconds

**Features:**

- Email input with validation
- API call to resend activation email
- Success message with timer redirect
- Error handling
- Loading spinner
- Link back to login

**Query Parameters:** None (email is entered by user)

---

## URL Flow Diagram

```
/auth (Authentication page)
├── Login Tab
│   ├── Valid credentials → /dashboard
│   └── "Forgot password?" link → /password-reset
│       └── Email submitted → Check email
│           └── User clicks email link with uid & token
│               → /reset-password-confirm?uid=X&token=Y
│                   └── New password entered
│                       └── Success → /auth
│
└── Signup Tab
    └── Form submitted → Check email
        └── User clicks email link with uid & token
            → /verify-email?uid=X&token=Y
                ├── Auto-activates account
                └── Success → /auth
                    OR
                    └── Error → Option to /resend-verification
```

---

## Environment Setup

All pages use the `useAuth()` hook which provides:

- `requestPasswordReset(email)`
- `confirmPasswordReset({ uid, token, new_password, re_new_password })`
- `resendActivationEmail(email)`
- `activateAccount(uid, token)`
- `isLoading` state
- `error` state

---

## Backend Integration

### Required Endpoints

```
POST /auth/v1/users/reset_password/
  Input: { email }
  Output: { detail: "..." }
  Action: Sends password reset email

POST /auth/v1/users/reset_password_confirm/
  Input: { uid, token, new_password, re_new_password }
  Output: { detail: "..." }
  Action: Confirms and applies password reset

POST /auth/v1/users/resend_activation/
  Input: { email }
  Output: { detail: "..." }
  Action: Sends new activation email

POST /auth/v1/users/activation/
  Input: { uid, token }
  Output: { detail: "..." }
  Action: Activates user account
```

### Email Links Format

Password reset email should contain:

```
https://tracklytic.com/reset-password-confirm?uid=<uid>&token=<token>
```

Account activation email should contain:

```
https://tracklytic.com/verify-email?uid=<uid>&token=<token>
```

---

## Styling & Design

All pages follow the existing design system:

- **Colors:** Green (#16a34a) for primary actions, red for errors
- **Spacing:** Consistent padding and margins
- **Typography:** Tailwind CSS classes matching existing pages
- **Components:** ModernNavbar, Footer, loading spinners
- **Responsiveness:** Mobile-first, works on all screen sizes
- **Forms:** Consistent input styling with focus states

---

## Error Handling

Each page handles common errors:

| Error              | Scenario                   | Handling                                   |
| ------------------ | -------------------------- | ------------------------------------------ |
| Invalid email      | Empty or wrong format      | Show validation message                    |
| Email not found    | User doesn't exist         | Show API error message                     |
| Token expired      | Link too old               | Show "link expired" message + retry option |
| Invalid token      | Token doesn't match        | Show "invalid link" message                |
| Password mismatch  | Confirmation doesn't match | Show validation message                    |
| Short password     | < 8 characters             | Show validation message                    |
| Missing URL params | uid or token absent        | Show "invalid link" message                |

---

## Testing

### Test Cases

#### Password Reset Flow

```
1. Go to /auth
2. Click "Forgot password?"
3. Enter valid email
4. Should show success message
5. Check backend output (or console in dev mode)
6. Manually construct /reset-password-confirm?uid=X&token=Y
7. Enter new password twice
8. Should show success and redirect to login
```

#### Email Verification Flow

```
1. Go to /auth
2. Sign up with new email
3. Should show verification needed message
4. Manually construct /verify-email?uid=X&token=Y
5. Page should auto-activate
6. Should show success and redirect to login
```

#### Resend Verification

```
1. Go to /resend-verification
2. Enter email address
3. Should show success message
4. Should redirect to login
```

---

## Future Enhancements

1. **Email Preview in Development**
   - Show reset/verification links in UI instead of requiring email
   - Useful for testing without real email service

2. **Rate Limiting**
   - Prevent spam of reset/verification email requests
   - Show timer for resend button

3. **Multi-factor Authentication**
   - Add OTP verification after password reset
   - Add SMS verification options

4. **Session Management**
   - Allow logout from all devices
   - Session listing in settings

5. **Social Login**
   - Add Google/GitHub login
   - Link social accounts to existing accounts

---

## Security Notes

✅ **Implemented:**

- Email validation on client side
- Token expiration in backend
- Unique token generation
- HTTPS required in production
- CORS protection

⚠️ **Production Recommendations:**

- Set secure email domain in backend
- Configure email rate limiting
- Use email verification template design review
- Monitor for brute force reset attempts
- Log security events

---

## File Structure

```
src/pages/
├── Authentication.jsx          # Login/Signup
├── PasswordReset.jsx           # Request password reset
├── ResetPasswordConfirm.jsx    # Confirm new password
├── VerifyEmail.jsx             # Verify email account
└── ResendVerification.jsx      # Resend verification email
```

All pages use:

- `useAuth()` hook for API calls
- `useNavigate()` for routing
- `ModernNavbar` and `Footer` components
- Consistent styling with existing pages
