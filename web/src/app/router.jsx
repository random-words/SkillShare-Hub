import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App.jsx";

import Home from "../pages/Home.jsx";
import Search from "../pages/Search.jsx";
import Profile from "../pages/Profile.jsx";
import Schedule from "../pages/Schedule.jsx";
import Chat from "../pages/Chat.jsx";
import Login from "../pages/Auth/Login.jsx";
import Register from "../pages/Auth/Register.jsx";

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
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "chat/:matchId",
        element: <Chat />,
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
