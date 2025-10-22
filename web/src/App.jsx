import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-5xl flex items-center gap-4 p-4">
          <h1 className="font-bold">Skillshare Hub</h1>
          <nav className="flex gap-3 text-sm">
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            <Link to="/schedule">Schedule</Link>
            <Link to="/chat">Chat</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/auth/login">Login</Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl p-6">
        <Outlet />
      </main>
    </div>
  );
}
