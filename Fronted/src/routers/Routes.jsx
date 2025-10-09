import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/RootLayout";
import AdminLayout from "../components/AdminLayout";
import ProtectedRoute from "../components/ProtectedRoute";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import History from "../pages/History";
import ServiceDetails from "../pages/ServiceDetails";
import Profile from "../pages/Profile";
import PortfolioDetails from "../pages/PortfolioDetails";
import Login from "../pages/Login";
import TeamMember from "../pages/TeamMember";
import TeamDetails from "../pages/TeamDetails";
import Faq from "../pages/Faq";
import UserList from "../components/UserList";
import Register from "../pages/Register";
import AdminDashboard from "../pages/AdminDashboard";
import AdminRegister from "../pages/AdminRegister";
import AdminProfile from "../pages/AdminProfile";
import ProductList from "../pages/ProductList";
import AdminSettings from "../pages/AdminSettings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "about/History", element: <History /> },
      { path: "about/TeamMember", element: <TeamMember /> },
      { path: "about/TeamMember/:id", element: <TeamDetails /> },
      { path: "about/faq", element: <Faq /> },
      { path: "services", element: <Services /> },
      { path: "services/:id", element: <ServiceDetails /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "portfolio/:id", element: <PortfolioDetails /> },
      { path: "blog", element: <Blog /> },
      { path: "contact", element: <Contact /> },

      
    ],
  },
  {
    path: "/admin",
    element: <ProtectedRoute />,
    children: [{
      element: <AdminLayout />,
  children: [
        { path: "dashboard", element: <AdminDashboard /> },
        { path: "products", element: <ProductList /> },
        { path: "users", element: <UserList /> },
        { path: "profile", element: <AdminProfile /> },
        { path: "settings", element: <AdminSettings /> }
      ]
    }]
  },
  { path: "/login", element: <Login /> },
  { path: "/profile", element: <Profile /> },
  { path: "/register", element: <Register /> },
  { path: "admin/register", element: <AdminRegister /> },
]);

export default router;