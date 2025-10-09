import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function SplitLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
  console.log("Login successful:", data);
  // store role first so route guards can read it immediately
  localStorage.setItem('role', data.user.role); // Store role for ProtectedRoute
  login(data.token, data.user); // Use context to store token and user
        if (data.user.role === 'admin') {
          navigate('/admin/dashboard'); // Redirect admins to the dashboard
        } else {
          navigate('/'); // Redirect regular users to home page
        }
      } else {
        setError(data.message || "An error occurred during login.");
      }
    } catch (err) {
      setError("Failed to connect to the server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-xl overflow-hidden flex w-full max-w-5xl">
        {/* Left - Sign In */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center items-center bg-white">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Sign in to Website
          </h2>

          <div className="flex space-x-4 mb-4 text-gray-600 text-lg">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
            <FaTwitter className="hover:text-sky-500 cursor-pointer" />
          </div>

          <p className="text-sm text-gray-500 mb-6">or use your email account</p>

          {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

          <form onSubmit={handleLogin} className="w-full px-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 px-4 py-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full mb-2 px-4 py-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              required
            />

            <div className="text-right text-sm mb-4">
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Forgot your password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition disabled:bg-blue-400"
              disabled={loading}
            >
              {loading ? 'SIGNING IN...' : 'SIGN IN'}
            </button>
          </form>
        </div>

        {/* Right - Sign Up Prompt */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex flex-col justify-center items-center p-10 text-center relative">
          <h2 className="text-3xl font-bold mb-2">Hello Friend !</h2>
          <p className="text-sm mb-6 px-4">
            Enter your personal details and start your journey with us
          </p>
          <Link
            to="/register"
            className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            SIGN UP
          </Link>

          {/* Optional circular shapes */}
          <div className="absolute top-[-40px] right-[-40px] w-32 h-32 bg-white/10 rounded-full backdrop-blur-sm shadow-inner"></div>
          <div className="absolute bottom-[-60px] left-[-60px] w-48 h-48 bg-white/10 rounded-full backdrop-blur-sm shadow-inner"></div>
        </div>
      </div>
    </div>
  );
}
