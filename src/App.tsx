import { Link, Routes, Route, useLocation } from "react-router-dom";
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
import Lab10 from "./pages/Lab10";

import Login from "./pages/Login";
import Register from "./pages/Register";

import { useAuthStore } from "./stores/useAuthStore";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";

function AppContent() {
  const themeCtx = useContext(ThemeContext);
  const { user: authUser, logout } = useAuthStore();
  const location = useLocation();

  const labs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
        <nav className="bg-blue-600 text-white h-16 flex-none flex items-center justify-between px-4 shadow-md z-10">
          <Link to="/" className="text-lg font-bold flex-none">
            WEB2091
          </Link>

          <div className="flex space-x-2 items-center overflow-x-auto px-4 no-scrollbar">
            {labs.map((num) => {
              let path = `/lab${num}`;
              if (num === 1) path = "/";
              if (num === 9) path = "/login"; // Lab 9 thường là bài Login/Zustand

              const isActive = location.pathname === path;

              return (
                <Link
                  key={num}
                  to={path}
                  className={`px-3 py-1 rounded-md text-xs transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-yellow-400 text-blue-900 font-bold shadow-sm"
                      : "hover:bg-blue-500 text-white"
                  }`}
                >
                  Lab {num}
                </Link>
              );
            })}
          </div>

          <div className="flex space-x-3 items-center flex-none">
            {authUser ? (
              <div className="flex items-center space-x-2 bg-blue-700 px-2 py-1 rounded-lg">
                <span className="text-[10px] italic hidden md:block">
                  {authUser.email}
                </span>
                <button
                  onClick={logout}
                  className="bg-red-500 text-[10px] px-2 py-1 rounded uppercase font-bold hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-xs font-semibold hover:text-yellow-300"
              >
                Đăng nhập
              </Link>
            )}

            <button
              onClick={themeCtx?.toggleTheme}
              className="text-xs border border-blue-400 px-2 py-1 rounded hover:bg-blue-500"
            >
              {themeCtx?.isDark ? "☀️" : "🌙"}
            </button>
          </div>
        </nav>

        <div className="flex flex-1 overflow-auto p-4 bg-gray-50 dark:bg-gray-800">
          <Routes>
            <Route path="/" element={<Lab1 />} />
            <Route path="/lab2" element={<Lab2 />} />
            <Route path="/lab3" element={<Lab3 />} />
            <Route path="/lab4" element={<Lab4 />} />
            <Route path="/lab5" element={<Lab5 />} />
            <Route path="/lab6" element={<Lab6 />} />
            <Route path="/lab6/edit/:id" element={<Lab6 />} />
            <Route path="/lab7" element={<Lab7 />} />
            <Route path="/lab7/edit/:id" element={<Lab7Edit />} />
            <Route path="/lab8" element={<Lab8 />} />
            {/* Lab 9 dùng chung trang Login để chấm Zustand */}
            <Route path="/lab10" element={<Lab10 />} />

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
