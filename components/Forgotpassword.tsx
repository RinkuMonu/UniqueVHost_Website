"use client";
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import Swal from "sweetalert2";
import axiosInstance from "@/app/AxiosInstance/axiosInstance";
import { AxiosError } from "axios";

const ForgotPasswordModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [stage, setStage] = useState<"email" | "password">("email");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Email validation
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Password validation
  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const handleResetpassword = async () => {
    if (!validatePassword(newPassword)) {
      setPasswordError("Password must be at least 6 characters.");
      return;
    }
    setPasswordError("");

    try {
      const payload = {
        newPassword: newPassword,
        token: token,
      };

      const response = await axiosInstance.post(
        "/users/reset-password",
        payload
      );

      if (response?.status === 200) {
        Swal.fire("Success!", response.data.message, "success");
        // Reset form
        setEmail("");
        setNewPassword("");
        setStage("email");
        onClose();
      } else {
        Swal.fire(
          "Oops!",
          response.data.message || "Something went wrong",
          "warning"
        );
      }
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      const errMsg =
        err.response?.data?.message || "Server error. Please try again.";
      Swal.fire("Error", errMsg, "error");
    }
  };

  const handleForgotpassword = async () => {
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");

    try {
      const payload = {
        email: email,
      };

      const response = await axiosInstance.post(
        "/users/forgot-password",
        payload
      );

      console.log("responseeeeeeee", response);

      setToken(response?.data?.resetToken);

      if (response?.status === 200) {
        Swal.fire("Success!", response.data.message, "success");
        setStage("password"); // move to next stage only if successful
      } else {
        Swal.fire(
          "Oops!",
          response.data.message || "Something went wrong",
          "warning"
        );
      }
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      const errMsg =
        err.response?.data?.message || "Server error. Please try again.";
      Swal.fire("Error", errMsg, "error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">
            {stage === "email" ? "Forgot Password" : "Set New Password"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-4">
          {stage === "email" ? (
            <>
              <p className="text-sm text-gray-600 mb-2">
                Enter your registered email:
              </p>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
              />
              {emailError && (
                <p className="text-sm text-red-500 mt-1">{emailError}</p>
              )}
            </>
          ) : (
            <>
              <p className="text-sm text-gray-600 mb-2">
                Enter a new password for{" "}
                <span className="font-medium">{email}</span>:
              </p>
              <input
                type="password"
                placeholder="New password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                  setPasswordError("");
                }}
              />
              {passwordError && (
                <p className="text-sm text-red-500 mt-1">{passwordError}</p>
              )}
            </>
          )}
        </div>

        <div className="px-6 py-4 border-t border-gray-200">
          <button
            onClick={
              stage === "email" ? handleForgotpassword : handleResetpassword
            }
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-md transition-all"
          >
            {stage === "email" ? "Verify Email" : "Reset Password"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
