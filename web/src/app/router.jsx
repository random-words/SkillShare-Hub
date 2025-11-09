import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App.jsx";

// Pages
import Home from "../pages/Home.jsx";
import Search from "../pages/Search.jsx";
import Profile from "../pages/Profile.jsx";
import Schedule from "../pages/Schedule.jsx";
import Chat from "../pages/Chat.jsx";
import Login from "../pages/Auth/Login.jsx";
import Register from "../pages/Auth/Register.jsx";

// Protected Route Component (заглушка для майбутнього)
// eslint-disable-next-line no-unused-vars
const ProtectedRoute = ({ children }) => {
  // TODO: Додати перевірку аутентифікації
  const isAuthenticated = false;
  if (!isAuthenticated) return <Navigate to="/auth/login" replace />;
  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "profile",
        element: <Profile />,
        // element: <ProtectedRoute><Profile /></ProtectedRoute>,
      },
      {
        path: "schedule",
        element: <Schedule />,
        // element: <ProtectedRoute><Schedule /></ProtectedRoute>,
      },
      {
        path: "chat",
        element: <Chat />,
        // element: <ProtectedRoute><Chat /></ProtectedRoute>,
      },
      {
        path: "chat/:matchId",
        element: <Chat />,
        // element: <ProtectedRoute><Chat /></ProtectedRoute>,
      },
    ],
  },
  {
    path: "/auth",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" replace />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default router;
