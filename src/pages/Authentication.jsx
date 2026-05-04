import React, { useState } from "react";
import Footer from "../components/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import ModernNavbar from "../components/ModernNavbar";
import { useAuth } from "../hooks/useAuth";

const Authentication = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, register, isLoading } = useAuth();

  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [authState, setAuthState] = useState("login");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  /**
   * Validate form inputs
   */
  const validateForm = () => {
    setError("");

    if (!email.trim()) {
      setError("Email is required");
      return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }

    if (!password) {
      setError("Password is required");
      return false;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return false;
    }

    if (authState === "signup") {
      if (!firstName.trim() || !lastName.trim()) {
        setError("First and last name are required");
        return false;
      }

      if (password !== passwordConfirm) {
        setError("Passwords do not match");
        return false;
      }
    }

    return true;
  };

  /**
   * Handle login submission
   */
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!validateForm()) {
      return;
    }

    const result = await login(email, password);

    if (result.success) {
      setSuccessMessage("Login successful! Redirecting...");
      // Redirect to dashboard or the page they came from
      const from = location.state?.from?.pathname || "/dashboard";
      setTimeout(() => {
        navigate(from);
      }, 500);
    } else {
      setError(result.error || "Login failed");
    }
  };

  /**
   * Handle signup submission
   */
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!validateForm()) {
      return;
    }

    const userData = {
      username,
      email,
      password,
      re_password: passwordConfirm,
      first_name: firstName,
      last_name: lastName,
    };

    const result = await register(userData);

    if (result.success) {
      setSuccessMessage(
        "Account created successfully! Please check your email to verify your account.",
      );
      // Reset form
      setTimeout(() => {
        setUsername("");
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
        setFirstName("");
        setLastName("");
        setAuthState("login");
      }, 1500);
    } else {
      setError(result.error || "Registration failed");
    }
  };

  const handleSubmit = (e) => {
    if (authState === "login") {
      handleLogin(e);
    } else {
      handleSignup(e);
    }
  };

  return (
    <div className="flex flex-col">
      <ModernNavbar />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-var(--navbar-height))]">
        <div className="px-10 w-full sm:w-[50%] md:w-[40%] lg:w-[34%] xl:w-[26%]">
          {/* Header */}
          <div className="pb-7 text-center">
            <h1 className="font-bold text-[25px]">
              {authState === "signup" ? "Let's Get Started" : "Welcome Back!"}
            </h1>
            <h1 className="text-gray-600 text-[15px] pt-1">
              {authState === "signup"
                ? "Take control of your finances with smart expense tracking and budgeting"
                : "Sign in to continue tracking your expenses"}
            </h1>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 border-l-4 border-red-600">
              <p className="text-red-600 text-sm font-medium">{error}</p>
            </div>
          )}

          {/* Success Message */}
          {successMessage && (
            <div className="mb-4 p-3 rounded-lg bg-green-50 border-l-4 border-green-600">
              <p className="text-green-600 text-sm font-medium">
                {successMessage}
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            {/* First Name & Last Name (Signup Only) */}
            {authState === "signup" && (
              <div className="space-y-5">
                {" "}
                <div className="flex flex-col">
                  <label className="text-[14.5px] font-semibold">
                    Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border-[1px] border-[#a9a9b0] rounded-xl w-full h-[48px] p-3 mt-2 text-[14px] focus:border-2 focus:border-green-600 outline-none transition"
                    placeholder="johndoe"
                  />
                </div>
                <div className="grid grid-cols-2 gap-x-5 w-full">
                  <div className="flex flex-col">
                    <label className="text-[14.5px] font-semibold">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="border-[1px] border-[#a9a9b0] rounded-xl w-full h-[48px] p-3 mt-2 text-[14px] focus:border-2 focus:border-green-600 outline-none transition"
                      placeholder="John"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[14.5px] font-semibold">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="border-[1px] border-[#a9a9b0] rounded-xl w-full h-[48px] p-3 mt-2 text-[14px] focus:border-2 focus:border-green-600 outline-none transition"
                      placeholder="Doe"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-[14.5px] font-semibold">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-[1px] border-[#a9a9b0] rounded-xl w-full h-[48px] p-3 mt-2 text-[14px] focus:border-2 focus:border-green-600 outline-none transition"
                placeholder="johndoe@gmail.com"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="text-[14.5px] font-semibold">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-[1px] border-[#a9a9b0] rounded-xl w-full h-[48px] p-3 mt-2 text-[14px] focus:border-2 focus:border-green-600 outline-none transition"
                placeholder="Enter your password"
              />
            </div>

            {/* Confirm Password (Signup Only) */}
            {authState === "signup" && (
              <div className="flex flex-col">
                <label className="text-[14.5px] font-semibold">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  className="border-[1px] border-[#a9a9b0] rounded-xl w-full h-[48px] p-3 mt-2 text-[14px] focus:border-2 focus:border-green-600 outline-none transition"
                  placeholder="Confirm your password"
                />
              </div>
            )}

            {/* Forgot Password Link (Login Only) */}
            {authState === "login" && (
              <h1
                className="text-right pt-2 text-[13px] cursor-pointer text-green-600 font-semibold hover:text-green-700 transition"
                onClick={() => navigate("/password-reset")}
              >
                Forgot password?
              </h1>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="cursor-pointer bg-green-600 hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed text-white w-full py-3 rounded-3xl mt-5 font-semibold transition transform hover:scale-105 duration-200"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : authState === "signup" ? (
                "Create Account"
              ) : (
                "Log In"
              )}
            </button>
          </form>

          {/* Toggle Auth State */}
          {authState === "signup" ? (
            <h1 className="pt-4 text-center">
              Already have an account?{" "}
              <span
                className="text-green-600 font-semibold cursor-pointer hover:text-green-700 transition"
                onClick={() => {
                  setAuthState("login");
                  setError("");
                  setSuccessMessage("");
                }}
              >
                Login
              </span>
            </h1>
          ) : (
            <h1 className="pt-4 text-center">
              New to Tracklytic?{" "}
              <span
                className="text-green-600 font-semibold cursor-pointer hover:text-green-700 transition"
                onClick={() => {
                  setAuthState("signup");
                  setError("");
                  setSuccessMessage("");
                }}
              >
                Create Account
              </span>
            </h1>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Authentication;
