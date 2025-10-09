import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'add'
  // read view from query param
  useEffect(() => {
    try {
      const qs = new URLSearchParams(window.location.search);
      const v = qs.get('view');
      if (v === 'add' || v === 'list') setViewMode(v);
    } catch (e) {
      // ignore
    }
  }, []);

  // form state
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [creating, setCreating] = useState(false);

  const demoCategories = ['all', 'Grains', 'Vegetables', 'Fruits'];

  const fetchProducts = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/products`);
      if (!res.ok) throw new Error('Failed to fetch products');
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    setCreating(true);
    try {
      const form = new FormData();
      form.append('name', name);
      form.append('quantity', Number(quantity));
      form.append('description', description || '');
      if (imageFile) form.append('image', imageFile);

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/products`, {
        method: 'POST',
        body: form,
      });
      if (!res.ok) throw new Error('Failed to create product');
      await fetchProducts();
      setName('');
      setQuantity(0);
      setDescription('');
      setImageFile(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setCreating(false);
    }
  };

  const filtered = products.filter((p) => {
    if (filter === 'all') return true;
    // demo filter: check name contains category word
    return p.name && p.name.toLowerCase().includes(filter.toLowerCase());
  });

  const handleDelete = async (id) => {
    if (!confirm('Delete this product? This cannot be undone.')) return;
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/products/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete product');
      // optimistic update
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      setError(err.message || 'Error deleting');
    }
  };

  if (loading) return <div>Loading products...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Products</h2>

        <div className="flex items-center gap-3">
          <select value={viewMode} onChange={(e) => setViewMode(e.target.value)} className="border rounded px-3 py-2">
            <option value="list">All Products</option>
            <option value="add">Add Product</option>
          </select>

          {viewMode === 'list' && (
            <>
              <select value={filter} onChange={(e) => setFilter(e.target.value)} className="border rounded px-3 py-2">
                {demoCategories.map((c) => (
                  <option value={c} key={c}>{c}</option>
                ))}
              </select>
              <button onClick={fetchProducts} className="bg-gray-200 px-3 py-2 rounded">Refresh</button>
            </>
          )}
        </div>
      </div>

      {viewMode === 'list' ? (
        <>
          <div className="mb-4">
            <button onClick={() => setViewMode('add')} className="bg-blue-600 text-white px-4 py-2 rounded">Add new product</button>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {filtered.map((p) => (
              <div key={p._id} className="bg-white p-4 rounded shadow relative">
                {p.imagePath ? (
                  <img src={`${import.meta.env.VITE_API_URL}/${p.imagePath.replace(/\\\\/g, '/').replace(/^uploads\//, 'uploads/')}`} alt={p.name} className="h-40 w-full object-cover rounded mb-2" />
                ) : (
                  <div className="h-40 w-full bg-gray-100 rounded mb-2 flex items-center justify-center text-gray-400">No image</div>
                )}
                <div className="font-semibold">{p.name}</div>
                <div className="text-sm text-gray-600">Quantity: {p.quantity}</div>
                <div className="text-sm text-gray-700">{p.description}</div>
                <div className="text-xs text-gray-400">{new Date(p.createdAt).toLocaleString()}</div>
                <button onClick={() => handleDelete(p._id)} className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs">Delete</button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="bg-white p-4 rounded shadow max-w-md">
          <h3 className="font-semibold mb-2">Add product</h3>
          <form onSubmit={handleCreate} className="space-y-3">
            <div>
              <label className="block text-sm text-gray-600">Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} required className="w-full border px-3 py-2 rounded" />
            </div>

            <div>
              <label className="block text-sm text-gray-600">Quantity</label>
              <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required className="w-full border px-3 py-2 rounded" />
            </div>

            <div>
              <label className="block text-sm text-gray-600">Description</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border px-3 py-2 rounded" />
            </div>

            <div>
              <label className="block text-sm text-gray-600">Image</label>
              <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0] || null)} className="w-full" />
            </div>

            <div className="flex items-center gap-3">
              <button type="submit" disabled={creating} className="bg-blue-600 text-white px-4 py-2 rounded">
                {creating ? 'Adding...' : 'Add Product'}
              </button>
              <button type="button" onClick={() => setViewMode('list')} className="bg-gray-200 px-3 py-2 rounded">Back to list</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProductList;
