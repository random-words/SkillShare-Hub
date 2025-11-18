import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./styles/global.css";
import router from "./app/router.jsx";
import { AuthProvider } from "./app/authContext.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      {}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
