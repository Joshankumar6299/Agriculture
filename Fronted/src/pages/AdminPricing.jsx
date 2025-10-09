import React, { useEffect, useState } from 'react';

export default function AdminPricing() {
  const [tiers, setTiers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const fetchTiers = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/pricing`);
      if (!res.ok) throw new Error('Failed to fetch pricing');
      const data = await res.json();
      setTiers(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchTiers(); }, []);

  const handleChange = (index, field, value) => {
    setTiers((t) => t.map((tier, i) => i === index ? { ...tier, [field]: value } : tier));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/pricing`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'x-auth-token': localStorage.getItem('token') },
        body: JSON.stringify(tiers),
      });
      if (!res.ok) throw new Error('Failed to save pricing');
      alert('Pricing saved');
    } catch (err) {
      alert(err.message || 'Save failed');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div>Loading pricing...</div>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Admin Pricing</h2>
      <div className="space-y-4">
        {tiers.map((t, i) => (
          <div key={t.id || i} className="bg-white p-4 rounded shadow">
            <div className="flex gap-4 items-center">
              <input className="border px-2 py-1" value={t.title} onChange={(e) => handleChange(i, 'title', e.target.value)} />
              <input className="border px-2 py-1" value={t.price} onChange={(e) => handleChange(i, 'price', e.target.value)} />
                <input className="border px-2 py-1 flex-1" value={t.features?.join(', ')} onChange={(e) => handleChange(i, 'features', e.target.value.split(',').map(s => s.trim()))} />
                <input className="border px-2 py-1" placeholder="Stripe Price ID" value={t.priceId || ''} onChange={(e) => handleChange(i, 'priceId', e.target.value)} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button onClick={handleSave} disabled={saving} className="bg-green-600 text-white px-4 py-2 rounded">{saving ? 'Saving...' : 'Save Pricing'}</button>
      </div>
    </div>
  );
}
