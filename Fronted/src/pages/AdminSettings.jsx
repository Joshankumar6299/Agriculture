import React from 'react';

const AdminSettings = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Settings</h2>
      <div className="bg-white p-4 rounded shadow">This is the admin settings area. You can add configuration options here.</div>
      <div className="mt-4">
        <a href="/admin/pricing" className="text-green-600 hover:underline">Manage Pricing</a>
      </div>
    </div>
  );
};

export default AdminSettings;
