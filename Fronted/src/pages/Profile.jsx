import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (loading) {
    return <div className="p-8 text-center">Loading profile...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Construct the full URL for the profile image
  const profileImageUrl = user.profileImagePath
    ? `${import.meta.env.VITE_API_URL}/${user.profileImagePath.replace(/\\/g, '/')}`
    : `https://ui-avatars.com/api/?name=${encodeURIComponent(user.fullName)}&background=random`;

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <img
            src={profileImageUrl}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-green-200 object-cover"
          />
          <h1 className="text-3xl font-bold text-gray-800">Welcome, {user.fullName}!</h1>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Profile Details</h2>
          <div className="space-y-3 text-gray-600">
            <p><strong>Full Name:</strong> {user.fullName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Mobile:</strong> {user.mobile || 'Not provided'}</p>
            <p><strong>Gender:</strong> {user.gender ? user.gender.charAt(0).toUpperCase() + user.gender.slice(1) : 'Not provided'}</p>
            <p><strong>Address:</strong> {user.address || 'Not provided'}</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white font-bold py-3 px-4 rounded-full hover:bg-red-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
        >
          Logout
        </button>
      </div>
    </div>
  );
}