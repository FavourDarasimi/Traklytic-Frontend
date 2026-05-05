import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import ModernNavbar from "../components/ModernNavbar";
import Footer from "../components/Footer";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { activateAccount, isLoading } = useAuth();

  const [status, setStatus] = useState("verifying"); // verifying, success, error
  const [message, setMessage] = useState("");

  // Get uid and token from URL query params
  const uid = searchParams.get("uid");
  const token = searchParams.get("token");

  useEffect(() => {
    const verifyEmail = async () => {
      if (!uid || !token) {
        setStatus("error");
        setMessage("Invalid verification link. Missing required parameters.");
        return;
      }
      console.log(`uid: ${uid}, token: ${token}`);

      try {
        const result = await activateAccount(uid, token);

        if (result.success) {
          setStatus("success");
          setMessage("Email verified successfully! Redirecting to login...");
          setTimeout(() => {
            navigate("/auth");
          }, 2000);
        } else {
          setStatus("error");
          setMessage(
            result.error ||
              "Failed to verify email. The link may have expired.",
          );
        }
      } catch (error) {
        setStatus("error");
        setMessage("An error occurred during email verification.");
      }
    };

    verifyEmail();
  }, [uid, token, activateAccount, navigate]);

  return (
    <div className="flex flex-col">
      <ModernNavbar />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-var(--navbar-height))]">
        <div className="px-10 w-full sm:w-[50%] md:w-[40%] lg:w-[34%] xl:w-[26%]">
          {/* Header */}
          <div className="pb-7 text-center">
            <h1 className="font-bold text-[25px]">Verify Email</h1>
          </div>

          {/* Verifying State */}
          {status === "verifying" && (
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg
                  className="animate-spin h-12 w-12 text-green-600"
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
              </div>
              <p className="text-gray-600">Verifying your email address...</p>
            </div>
          )}

          {/* Success State */}
          {status === "success" && (
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-green-50 border-l-4 border-green-600">
                <p className="text-green-600 font-medium">{message}</p>
              </div>
              <button
                onClick={() => navigate("/auth")}
                className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition"
              >
                Go to Login
              </button>
            </div>
          )}

          {/* Error State */}
          {status === "error" && (
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-red-50 border-l-4 border-red-600 mb-4">
                <p className="text-red-600 font-medium">{message}</p>
              </div>

              <div className="space-y-2 text-sm">
                <p className="text-gray-600">
                  If this link has expired, you can request a new activation
                  email.
                </p>
                <button
                  onClick={() => navigate("/resend-verification")}
                  className="text-green-600 font-semibold hover:text-green-700 transition"
                >
                  Resend Verification Email
                </button>
              </div>

              <button
                onClick={() => navigate("/auth")}
                className="mt-6 bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition"
              >
                Back to Login
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VerifyEmail;
