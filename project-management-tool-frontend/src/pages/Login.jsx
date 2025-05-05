import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from 'lottie-react';
import { ToastContainer, toast } from 'react-toastify';  // Import toast functions
import 'react-toastify/dist/ReactToastify.css';  // Import toastify styles
import { loginAnimation } from './animation';

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const Login = () => {
  const url = 'https://project-management-tool-backend-ifbp.onrender.com/login';
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // State for role selection
  const [errorMessage, setErrorMessage] = useState("");  // State for error message
  const navigate = useNavigate(); // Use useNavigate to navigate to different pages

  // Handle login form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    const data = { email, password, role };
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: 'include' // Ensure cookies are included
    })
      .then((result) => {
        console.log("Response status:", result.status);  // Log status code for better debugging

        if (result.ok) {
          console.log("Successful login. Parsing JSON...");
          result.json().then((data) => {
            console.log("Data received:", data);
            const serverRole = data.user.role; // Use role from server response
            console.log("Server role:", serverRole);
            document.cookie = `authtoken=${data.token}`; // Set role in cookie

            // Show success notification
            toast.success("Login successful!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

            // Navigate based on role
            setTimeout(() => {  // Delay navigation to let the user see the success message
              switch (serverRole) {
                case "Admin":
                  navigate("/admin/dashboard");
                  break;
                case "manager":
                  navigate("/manager/dashboard");
                  break;
                case "member":
                  navigate("/member/dashboard");
                  break;
                default:
                  alert("Invalid role selected");
              }
            }, 2000);
          });
        } else {
          throw new Error('Login failed. Please check your credentials.');
        }
      })
      .catch((err) => {
        console.error("Error during login:", err);
        setErrorMessage(err.message);
        setPassword(""); // Clear the password field for security reasons

        // Show error notification
        toast.error(err.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      {/* Toast Container to display notifications */}
      <ToastContainer />

      <div className="flex items-center space-x-80">
        {/* Animation */}
        <div className="mb-8 mr-8">
          <Lottie
            animationData={loginAnimation}
            loop
            autoplay
            style={{ width: '350px', height: '350px' }}
          />
        </div>

        {/* Login Form */}
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Login</h1>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-2"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {errorMessage && (
              <div className="text-red-500 font-medium text-center">
                {errorMessage}
              </div>
            )}

            {/* Email */}
            <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500">
              <img src={email_icon} alt="Email" className="w-6 h-6 mr-2" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full outline-none"
                required
              />
            </div>

            {/* Password */}
            <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500">
              <img src={password_icon} alt="Password" className="w-6 h-6 mr-2" />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full outline-none"
                required
              />
            </div>

            {/* Role */}
            <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500">
              <img src={user_icon} alt="Role" className="w-6 h-6 mr-2" />
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full outline-none"
                required
              >
                <option value="" disabled>Select role</option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Member">Member</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
