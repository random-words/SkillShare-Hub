import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";

import Home from "../pages/Home.jsx";
import Search from "../pages/Search.jsx";
import Profile from "../pages/Profile.jsx";
import Login from "../pages/Auth/Login.jsx";
import Register from "../pages/Auth/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "search", element: <Search /> },
      { path: "profile", element: <Profile /> },
    ],
  },
  {
    path: "/auth",
    element: <App />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

export default router;
