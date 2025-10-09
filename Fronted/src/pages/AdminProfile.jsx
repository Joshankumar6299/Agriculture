import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const formatDate = (iso) => {
  if (!iso) return '-';
  try {
    return new Date(iso).toLocaleString();
  } catch (e) {
    return iso;
  }
};

const Field = ({ label, value }) => (
  <div className="flex">
    <div className="w-40 text-gray-600">{label}</div>
    <div className="flex-1">{value || '-'}</div>
  </div>
);

const AdminProfile = () => {
  const { token } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/user`, {
          headers: { 'x-auth-token': token },
        });
        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.message || 'Failed to fetch profile');
        }
        const data = await res.json();
        setProfile(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchProfile();
    else {
      setLoading(false);
      setProfile(null);
    }
  }, [token]);

  if (loading) return <div className="p-6">Loading profile...</div>;
  if (error) return <div className="p-6 text-red-500">Error: {error}</div>;
  if (!profile) return <div className="p-6">No profile data</div>;

  // profile.profileImagePath might be stored as uploads/filename
  const imageUrl = profile.profileImagePath
    ? `${import.meta.env.VITE_API_URL.replace(/\/$/, '')}/${profile.profileImagePath.replace(/^\//, '')}`
    : null;

  return (
    <div className="bg-white rounded shadow p-6 max-w-3xl">
      <h2 className="text-2xl font-semibold mb-4">Profile</h2>
      <div className="flex gap-6">
        <div className="w-48 flex-shrink-0">
          <div className="h-40 w-40 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
            {imageUrl ? (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img src={imageUrl} alt={`Profile image of ${profile.fullName}`} className="h-full w-full object-cover" />
            ) : (
              <div className="text-gray-400">No Image</div>
            )}
          </div>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-1 gap-3">
            <Field label="Full name" value={profile.fullName} />
            <Field label="Username" value={profile.username} />
            <Field label="Email" value={profile.email} />
            <Field label="Mobile" value={profile.mobile} />
            <Field label="Gender" value={profile.gender} />
            <Field label="Address" value={profile.address} />
            <Field label="Role" value={profile.role || '-'} />
            <Field label="Created at" value={formatDate(profile.createdAt)} />
            <Field label="Updated at" value={formatDate(profile.updatedAt)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
