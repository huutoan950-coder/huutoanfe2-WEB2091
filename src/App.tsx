import { Link, Routes, Route } from "react-router-dom";
import { ConfigProvider, theme as antdTheme } from "antd";
import { useContext } from "react";

import Lab1 from "./pages/Lab1";
import Lab2 from "./pages/Lab2";
import Lab3 from "./pages/Lab3";
import Lab4 from "./pages/Lab4";
import Lab5 from "./pages/Lab5";
import Lab6 from "./pages/Lab6";
import Lab7 from "./pages/Lab7";
import Lab7Edit from "./pages/Lab7Edit";
import Lab8 from "./pages/Lab8";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { useAuthStore } from "./stores/useAuthStore";
import { UserProvider, UserContext } from "./context/UserContext";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";

function AppContent() {
  const themeCtx = useContext(ThemeContext);
  const userCtx = useContext(UserContext);
  const { user: authUser, logout } = useAuthStore();

  return (
    <ConfigProvider
      theme={{
        algorithm: themeCtx?.isDark
          ? antdTheme.darkAlgorithm
          : antdTheme.defaultAlgorithm,
      }}
    >
      <div
        className={`flex flex-col h-screen overflow-hidden ${themeCtx?.isDark ? "bg-gray-900 text-white" : "bg-white text-black"}`}
      >
        <nav className="bg-blue-600 text-white h-16 flex-none flex items-center justify-between px-6 shadow-md z-10">
          <Link to="/" className="text-xl font-bold">
            WEB2091 App
          </Link>

          <div className="flex space-x-6 items-center">
            <Link to="/" className="hover:underline">
              Lab 1
            </Link>
            <Link to="/lab2" className="hover:underline">
              Lab 2
            </Link>
            <Link to="/lab3" className="hover:underline">
              Lab 3
            </Link>
            <Link to="/lab5" className="hover:underline">
              Lab 5
            </Link>
            <Link to="/lab7" className="hover:underline">
              Lab 7
            </Link>
            <Link to="/lab8" className="hover:underline">
              Lab 8
            </Link>
            <Link
              to="/login"
              className="hover:underline font-bold text-yellow-300"
            >
              Lab 9
            </Link>
          </div>

          <div className="flex space-x-4 items-center">
            {authUser ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm italic">Chào, {authUser.email}</span>
                <button
                  onClick={logout}
                  className="bg-red-500 hover:bg-red-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded shadow-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3 text-sm">
                <Link to="/login" className="hover:text-gray-200">
                  Đăng nhập
                </Link>
                <span className="opacity-50">|</span>
                <Link
                  to="/register"
                  className="hover:text-gray-200 font-semibold"
                >
                  Đăng ký
                </Link>
              </div>
            )}
            <button
              onClick={themeCtx?.toggleTheme}
              className="text-xs border px-2 py-1 rounded ml-2"
            >
              {themeCtx?.isDark ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </nav>

        <div className="flex flex-1 overflow-auto p-4">
          <Routes>
            <Route path="/" element={<Lab1 />} />
            <Route path="/lab2" element={<Lab2 />} />
            <Route path="/lab3" element={<Lab3 />} />
            <Route path="/lab4" element={<Lab4 />} />
            <Route path="/lab5" element={<Lab5 />} />
            <Route path="/lab6/edit/:id" element={<Lab6 />} />
            <Route path="/lab7" element={<Lab7 />} />
            <Route path="/lab7/edit/:id" element={<Lab7Edit />} />
            <Route path="/lab8" element={<Lab8 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </ThemeProvider>
  );
}
