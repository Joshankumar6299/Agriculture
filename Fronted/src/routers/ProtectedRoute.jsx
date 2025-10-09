import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { token, user } = useAuth();
  const location = useLocation();

  // Get role from context if available, otherwise fallback to localStorage
  const userRole = user?.role || localStorage.getItem("role");

  if (!token) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to. This allows us to send them along to that page after they login.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If the user is not an admin and is trying to access an admin route,
  // redirect them to the home page (or a "not authorized" page).
  if (location.pathname.startsWith("/admin") && userRole !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
