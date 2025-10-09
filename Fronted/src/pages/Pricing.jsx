import React, { useEffect, useState } from 'react';

export default function Pricing() {
  const [tiers, setTiers] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const handleChoose = async (tier) => {
    if (!tier.priceId) return alert('This plan is not configured for online payments.');
    const tierKey = tier.id || tier._id || null;
    setProcessingTier(tierKey);
    try {
      const token = localStorage.getItem('token');
      const headers = { 'Content-Type': 'application/json' };
      if (token) headers['x-auth-token'] = token;

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/pricing/checkout`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ priceId: tier.priceId, tierId: tier.id || tier._id || null, paymentMethods: ['card','upi'] }),
      });
      if (!res.ok) throw new Error('Checkout failed');
      const data = await res.json();
      if (data.url) {
        // leave processing state as-is since we'll navigate away
        window.location.href = data.url; // redirect to Stripe Checkout
      } else {
        setProcessingTier(null);
        alert('No checkout URL returned');
      }
    } catch (err) {
      setProcessingTier(null);
      alert(err.message || 'Checkout error');
    }
  };

  const [processingTier, setProcessingTier] = useState(null);

  if (loading) return <div className="py-12 text-center">Loading pricing...</div>;

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Simple pricing that grows with you</p>
        </div>

        <div className="mt-10 max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4">
          {tiers.map((t) => (
            <div key={t.id} className={`bg-white border rounded-lg p-6 flex flex-col ${t.popular ? 'border-2 border-green-600 shadow-lg' : 'shadow-sm'}`} onClick={() => { if (!processingTier) handleChoose(t); }}>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{t.title}</h3>
                  {t.popular && <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Popular</span>}
                </div>

                <p className="mt-4 text-3xl font-extrabold">{t.price}</p>
                <p className="mt-4 text-gray-600">{t.title === 'Enterprise' ? 'Custom plan for large operations' : 'Great for small and medium farms'}</p>

                <ul className="mt-6 space-y-2 text-gray-700">
                  {t.features?.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <button onClick={(e) => { e.stopPropagation(); if (!processingTier) handleChoose(t); }} disabled={processingTier === (t.id || t._id)} className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">{t.priceId ? (processingTier === (t.id || t._id) ? 'Redirecting...' : `Choose ${t.title}`) : 'Get it now'}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
