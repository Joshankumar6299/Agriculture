import React, { useEffect, useState } from 'react';
import BarChart from '../components/BarChart';

const StatCard = ({ title, value, color = 'blue' }) => {
  const colorMap = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-emerald-400 to-emerald-600',
    yellow: 'from-yellow-400 to-yellow-500',
    red: 'from-rose-400 to-rose-600',
  };
  const gradient = colorMap[color] || colorMap.blue;

  return (
    <div className="bg-white rounded shadow p-4 flex items-center gap-4">
      <div className={`h-14 w-14 rounded flex items-center justify-center text-white font-bold bg-gradient-to-tr ${gradient}`}>
        {/* small decorative icon or initials */}
        {title.split(' ')[0].charAt(0)}
      </div>
      <div className="flex-1">
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-2xl font-bold">{value}</div>
      </div>
      <div className={`h-full w-1 rounded-r`} style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.02))' }} />
    </div>
  );
};

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/products`);
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingProducts(false);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="w-1/3">
          <input className="w-full border rounded px-3 py-2" placeholder="Search" />
        </div>
      </header>

      <section className="grid grid-cols-4 gap-4">
        <StatCard title="Total Users" value="1,234" color="blue" />
        <StatCard title="Active" value="987" color="green" />
        <StatCard title="New" value="123" color="yellow" />
        <StatCard title="Revenue" value="$12,345" color="red" />
      </section>

      <section className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-white rounded shadow p-4">
          <div className="text-lg font-semibold mb-2">Products Bar Chart</div>
          {loadingProducts ? (
            <div className="h-48 flex items-center justify-center">Loading chart...</div>
          ) : (
            (() => {
              if (!products || products.length === 0) {
                const demoLabels = ['Demo A', 'Demo B', 'Demo C', 'Demo D'];
                const demoData = [12, 7, 5, 18];
                return <BarChart labels={demoLabels} data={demoData} title="Demo Products" />;
              }

              const hasCategory = products.some((p) => p.category);
              if (hasCategory) {
                const counts = {};
                products.forEach((p) => {
                  const c = p.category || 'Unknown';
                  counts[c] = (counts[c] || 0) + 1;
                });
                const labels = Object.keys(counts);
                const data = labels.map((l) => counts[l]);
                return <BarChart labels={labels} data={data} title="Products by Category" />;
              }

              const labels = products.slice(0, 10).map((p) => p.name || p._id);
              const data = products.slice(0, 10).map(() => 1);
              return <BarChart labels={labels} data={data} title="Products (sample)" />;
            })()
          )}
        </div>

        {/* Quick Stats: colorful badges */}
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center justify-between bg-blue-50 p-3 rounded">
              <div>
                <div className="text-sm text-blue-700">Orders</div>
                <div className="text-xl font-bold">234</div>
              </div>
              <div className="bg-blue-500 text-white px-3 py-1 rounded">+12%</div>
            </div>

            <div className="flex items-center justify-between bg-green-50 p-3 rounded">
              <div>
                <div className="text-sm text-green-700">Active</div>
                <div className="text-xl font-bold">987</div>
              </div>
              <div className="bg-green-500 text-white px-3 py-1 rounded">+8%</div>
            </div>

            <div className="flex items-center justify-between bg-yellow-50 p-3 rounded">
              <div>
                <div className="text-sm text-yellow-700">New</div>
                <div className="text-xl font-bold">123</div>
              </div>
              <div className="bg-yellow-500 text-white px-3 py-1 rounded">+4%</div>
            </div>

            <div className="flex items-center justify-between bg-red-50 p-3 rounded">
              <div>
                <div className="text-sm text-red-700">Revenue</div>
                <div className="text-xl font-bold">$12,345</div>
              </div>
              <div className="bg-red-500 text-white px-3 py-1 rounded">-2%</div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-4">
        {/* Recent activity */}
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-semibold mb-4">Recent activity</h3>
          <ul className="space-y-3">
            {[
              { text: 'Order #324 completed', color: 'bg-green-100', dot: 'bg-green-500' },
              { text: 'New user registered: john@example.com', color: 'bg-blue-50', dot: 'bg-blue-500' },
              { text: 'Product "Rice" stock low', color: 'bg-yellow-50', dot: 'bg-yellow-500' },
              { text: 'Payment failed for order #312', color: 'bg-red-50', dot: 'bg-red-500' },
            ].map((item, idx) => (
              <li key={idx} className={`p-3 rounded ${item.color}`}>
                <div className="flex items-center gap-3">
                  <div className={`h-3 w-3 rounded-full ${item.dot}`} />
                  <div className="text-sm">{item.text}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Tasks / timeline */}
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-semibold mb-4">Tasks / timeline</h3>
          <div className="space-y-4">
            {[
              { title: 'Deploy v1.2', when: '2 hours ago', status: 'done', color: 'bg-green-500' },
              { title: 'Update product images', when: '1 day ago', status: 'in-progress', color: 'bg-yellow-500' },
              { title: 'Email campaign', when: '3 days ago', status: 'pending', color: 'bg-blue-500' },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`h-3 w-3 rounded-full ${t.color}`} />
                <div className="flex-1">
                  <div className="font-semibold">{t.title}</div>
                  <div className="text-xs text-gray-500">{t.when}</div>
                </div>
                <div className="text-sm text-gray-600">{t.status}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional widgets */}
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-semibold mb-4">Additional widgets</h3>
          <div className="grid grid-cols-1 gap-3">
            <div className="p-3 rounded bg-indigo-50 text-indigo-700">Traffic: <strong>8,234</strong></div>
            <div className="p-3 rounded bg-pink-50 text-pink-700">Leads: <strong>142</strong></div>
            <div className="p-3 rounded bg-emerald-50 text-emerald-700">Conversion: <strong>3.2%</strong></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;