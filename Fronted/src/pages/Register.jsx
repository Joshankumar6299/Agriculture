import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("address", address);
    formData.append("mobile", mobile);
    formData.append("gender", gender);
    if (profileImage) {
      formData.append("profileImage", profileImage);
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
        method: "POST",
        body: formData, // Use FormData for multipart request
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Registration successful");
        // Redirect to login page on success
        navigate("/login");
      } else {
        setError(data.message || "An error occurred during registration.");
      }
    } catch (err) {
      setError("Failed to connect to the server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6">
      <div className="w-full max-w-2xl bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-green-800 text-center">
          Create an Account
        </h2>
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        <form onSubmit={handleRegister} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Full Name" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} disabled={loading} required />
            <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading} required />
            <Input label="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} disabled={loading} required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Mobile No." type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} disabled={loading} required />
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Gender</label>
              <select value={gender} onChange={(e) => setGender(e.target.value)} disabled={loading} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Address</label>
            <textarea value={address} onChange={(e) => setAddress(e.target.value)} disabled={loading} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" rows="3"></textarea>
          </div>
          <Input label="Profile Image" type="file" onChange={(e) => setProfileImage(e.target.files[0])} disabled={loading} />
          <button
            type="submit"
            className="w-full bg-green-700 text-white font-bold py-3 rounded-lg hover:bg-green-800 transition-colors disabled:bg-green-400"
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

const Input = ({ label, type, value, onChange, disabled, required }) => (
  <div>
    <label className="block mb-1 text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
    />
  </div>
);

export default Register;
