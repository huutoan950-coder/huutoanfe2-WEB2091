import { Link, Routes, Route } from "react-router-dom";
import Lab1 from "./pages/Lab1";
import Lab2 from "./pages/Lab2";
import Lab3 from "./pages/Lab3";
import Lab4 from "./pages/Lab4";

function App() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <nav className="bg-blue-600 text-white h-16 flex-none flex items-center justify-between px-6 shadow-md z-10">
        <Link to="/" className="text-xl font-bold">
          WEB2091 App
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="hover:underline">
            Lab 1
          </Link>
          <Link to="/lab2" className="hover:underline">
            Lab 2
          </Link>
          <Link to="/lab3" className="hover:underline">
            Lab 3
          </Link>
          <Link
            to="/lab4"
            className="hover:underline font-bold text-yellow-300"
          >
            Lab 4
          </Link>
        </div>
        <div className="flex space-x-4">
          <button className="hover:text-gray-200">Đăng nhập</button>
          <button className="hover:text-gray-200">Đăng ký</button>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        <Routes>
          <Route path="/" element={<Lab1 />} />
          <Route path="/lab2" element={<Lab2 />} />
          <Route path="/lab3" element={<Lab3 />} />
          <Route path="/lab4" element={<Lab4 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
