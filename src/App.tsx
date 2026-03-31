import { Link, Routes, Route, Navigate } from "react-router-dom";
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
import { UserProvider, UserContext } from "./context/UserContext";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";

function AppContent() {
  const themeCtx = useContext(ThemeContext);
  const userCtx = useContext(UserContext);

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
            <Link to="/lab4" className="hover:underline">
              Lab 4
            </Link>
            <Link to="/lab5" className="hover:underline">
              Lab 5
            </Link>
            <Link to="/lab7" className="hover:underline">
              Lab 7
            </Link>
            <Link
              to="/lab8"
              className="hover:underline font-bold text-green-300"
            >
              Lab 8
            </Link>
          </div>

          <div className="flex space-x-4 items-center">
            {userCtx?.user ? (
              <span className="text-sm italic">Chào, {userCtx.user.name}</span>
            ) : (
              <Link to="/lab8" className="hover:text-gray-200">
                Đăng nhập
              </Link>
            )}
            <button
              onClick={themeCtx?.toggleTheme}
              className="text-xs border px-2 py-1 rounded"
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
          </Routes>
        </div>
      </div>
    </ConfigProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
