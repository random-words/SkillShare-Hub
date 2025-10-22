// web/src/app/router.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";

// Підтягуємо модулі "оптом", щоб ати і default, і named
import * as AppMod from "../App.jsx";
import * as HomeMod from "../pages/Home.jsx";
import * as LoginMod from "../pages/Auth/Login.jsx";
import * as RegisterMod from "../pages/Auth/Register.jsx";
import * as ProfileMod from "../pages/Profile.jsx";
import * as SearchMod from "../pages/Search.jsx";
import * as ScheduleMod from "../pages/Schedule.jsx";
import * as ChatMod from "../pages/Chat.jsx";

const App = AppMod.default ?? AppMod.App ?? (() => <div>App</div>);
const Home = HomeMod.default ?? HomeMod.Home ?? (() => <div>Home</div>);
const Login = LoginMod.default ?? LoginMod.Login ?? (() => <div>Login</div>);
const Register = RegisterMod.default ?? RegisterMod.Register ?? (() => <div>Register</div>);
const Profile = ProfileMod.default ?? ProfileMod.Profile ?? (() => <div>Profile</div>);
const Search = SearchMod.default ?? SearchMod.Search ?? (() => <div>Search</div>);
const Schedule = ScheduleMod.default ?? ScheduleMod.Schedule ?? (() => <div>Schedule</div>);
const Chat = ChatMod.default ?? ChatMod.Chat ?? (() => <div>Chat</div>);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "auth/login", element: <Login /> },
      { path: "auth/register", element: <Register /> },
      { path: "profile", element: <Profile /> },
      { path: "search", element: <Search /> },
      { path: "schedule", element: <Schedule /> },
      { path: "chat", element: <Chat /> },
    ],
  },
  { path: "*", element: <div>Not found</div> },
]);

export default router;
