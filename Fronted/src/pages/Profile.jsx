import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

export default function Profile() {
  const { user: authUser, loading, token, logout, login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullName: '', email: '', mobile: '', gender: '', address: '', agricultureTypes: [], farmingTypes: [], subscription: {} });
  const [profileImage, setProfileImage] = useState({ file: null, preview: '' });
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  useEffect(() => {
    if (authUser) {
      // Create a new object to ensure no stale data from previous user
      setForm({
        fullName: authUser.fullName || '',
        email: authUser.email || '',
        mobile: authUser.mobile || '',
        gender: authUser.gender || '',
        address: authUser.address || '',
        agricultureTypes: authUser.agricultureTypes || [],
        farmingTypes: authUser.farmingTypes || [],
        subscription: { ...(authUser.subscription || { tierId: null, status: 'none' }) }
      });
    }
  }, [authUser]);

  useEffect(() => {
    // Clear feedback message after a few seconds
    if (feedback.message) {
      const timer = setTimeout(() => setFeedback({ type: '', message: '' }), 4000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (loading) return <div className="p-8 text-center">Loading profile...</div>;
  if (!authUser) return <Navigate to="/login" replace />;

  const currentProfileImageUrl = authUser.profileImagePath
    ? `${import.meta.env.VITE_API_URL}/${authUser.profileImagePath.replace(/\\/g, '/')}`.replace(/\\/g, '/')
    : `https://ui-avatars.com/api/?name=${encodeURIComponent(authUser.fullName)}&background=random`;

  const updateField = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  const toggleArrayValue = (key, value) => {
    setForm(prev => {
      const arr = new Set(prev[key] || []);
      if (arr.has(value)) arr.delete(value); else arr.add(value);
      return { ...prev, [key]: Array.from(arr) };
    });
  };

  const handleSave = async () => {
    setFeedback({ type: '', message: '' });
    setSaving(true);
    try {
      const fd = new FormData();
      fd.append('fullName', form.fullName);
      fd.append('mobile', form.mobile || '');
      fd.append('gender', form.gender || '');
      fd.append('address', form.address || '');
      fd.append('agricultureTypes', JSON.stringify(form.agricultureTypes || []));
      fd.append('farmingTypes', JSON.stringify(form.farmingTypes || []));
      if (profileImage.file) fd.append('profileImage', profileImage.file);

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/user`, {
        method: 'PUT',
        headers: token ? { 'x-auth-token': token } : {},
        body: fd
      });

      const updated = await res.json();
      if (!res.ok) {
        throw new Error(updated.message || 'Failed to save profile. Please try again.');
      }
      // update context user quickly
      login(token, updated);
      setProfileImage({ file: null, preview: '' }); // Clear preview on success
      setFeedback({ type: 'success', message: 'Profile updated successfully!' });
    } catch (err) {
      console.error(err);
      setFeedback({ type: 'error', message: err.message || 'Save failed' });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img src={profileImage.preview || currentProfileImageUrl} alt="Profile" className="w-24 h-24 rounded-full border-4 border-green-200 object-cover" />
          <div>
            <h1 className="text-2xl font-bold">{authUser.fullName}</h1>
            <p className="text-sm text-gray-600">{authUser.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input value={form.fullName} onChange={(e) => updateField('fullName', e.target.value)} className="border px-3 py-2 rounded" />
          <input value={form.mobile} onChange={(e) => updateField('mobile', e.target.value)} className="border px-3 py-2 rounded" />
          <select value={form.gender} onChange={(e) => updateField('gender', e.target.value)} className="border px-3 py-2 rounded">
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input value={form.address} onChange={(e) => updateField('address', e.target.value)} className="border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block mb-2 font-medium">Profile image</label>
          <input type="file" accept="image/*" onChange={(e) => {
            const file = e.target.files?.[0] || null;
            setProfileImage({
              file,
              preview: file ? URL.createObjectURL(file) : ''
            });
          }} className="text-sm" />
          {profileImage.preview && <button onClick={() => setProfileImage({ file: null, preview: '' })} className="text-xs text-red-500 ml-2 hover:underline">Clear</button>}
        </div>

        <div>
          <h3 className="font-semibold mb-2">Agriculture types</h3>
          <div className="flex gap-2">
            {['organic','non-organic'].map(a => (
              <button key={a} onClick={() => toggleArrayValue('agricultureTypes', a)} className={`px-3 py-1 rounded ${form.agricultureTypes?.includes(a) ? 'bg-green-600 text-white' : 'bg-gray-100'}`}>{a}</button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Farming types</h3>
          <div className="flex gap-2 flex-wrap">
            {['grains','vegetables','fruits','dairy','poultry'].map(f => (
              <button key={f} onClick={() => toggleArrayValue('farmingTypes', f)} className={`px-3 py-1 rounded ${form.farmingTypes?.includes(f) ? 'bg-green-600 text-white' : 'bg-gray-100'}`}>{f}</button>
            ))}
          </div>
        </div>

        <div className="border-t pt-4">
          <h3 className="font-semibold">Subscription</h3>
          <p className="text-sm text-gray-600">Current: {form.subscription?.status || 'none'} {form.subscription?.tierId ? `(${form.subscription.tierId})` : ''}</p>
        </div>

        {feedback.message && (
          <div className={`p-3 rounded-md text-center text-sm ${feedback.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {feedback.message}
          </div>
        )}

        <div className="flex gap-3">
          <button onClick={handleSave} disabled={saving} className="bg-green-600 text-white px-4 py-2 rounded">{saving ? 'Saving...' : 'Save Profile'}</button>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
        </div>
      </div>
    </div>
  );
}