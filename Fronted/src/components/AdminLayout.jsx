import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";

const AdminLayout = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  // derive active section from pathname + query
  const pathname = location.pathname;
  const qs = new URLSearchParams(location.search);
  const productsView = qs.get('view') || 'list';

  const isActive = (path) => pathname === path;
  const activeClass = (cond) => cond ? 'bg-gray-700 border-l-4 border-blue-400' : 'hover:bg-gray-700';

  // ensure submenu is open when on products routes
  useEffect(() => {
    if (pathname.startsWith('/admin/products')) setProductsOpen(true);
  }, [pathname]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const goProducts = () => {
    // navigate to products list view and open submenu
    setProductsOpen((s) => !s);
    navigate('/admin/products?view=list');
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6 h-screen sticky top-0 overflow-auto">
        <div className="mb-8">
          <div className="text-xl font-bold mb-2">COMPANY LOGO</div>
          <div className="text-sm text-gray-300">Welcome, {user?.fullName || 'Admin'}</div>
        </div>

        <nav className="space-y-3">
          <Link to="/admin/dashboard" className={`block py-2 px-3 rounded ${activeClass(isActive('/admin/dashboard'))}`}>Dashboard</Link>
          <button onClick={goProducts} className={`w-full text-left py-2 px-3 rounded ${activeClass(pathname.startsWith('/admin/products'))}`}>Products</button>
          {productsOpen && (
            <div className="pl-4">
              <Link to="/admin/products?view=list" className={`block py-1 px-3 rounded ${activeClass(isActive('/admin/products') && productsView === 'list')} text-sm`}>All Products</Link>
              <Link to="/admin/products?view=add" className={`block py-1 px-3 rounded ${activeClass(isActive('/admin/products') && productsView === 'add')} text-sm`}>Add Product</Link>
            </div>
          )}
          <Link to="/admin/users" className={`block py-2 px-3 rounded ${activeClass(isActive('/admin/users'))}`}>Users</Link>
          <Link to="/admin/profile" className={`block py-2 px-3 rounded ${activeClass(isActive('/admin/profile'))}`}>Profile</Link>
          <Link to="/admin/settings" className={`block py-2 px-3 rounded ${activeClass(isActive('/admin/settings'))}`}>Settings</Link>
        </nav>

        <div className="mt-auto pt-10">
          <button onClick={handleLogout} className="w-full bg-red-600 hover:bg-red-700 py-2 rounded">SIGN OUT</button>
        </div>
      </aside>

      {/* Main content — scrollable */}
      <main className="flex-1 p-8 overflow-auto h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
