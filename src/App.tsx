import { Link, Routes, Route } from "react-router-dom";
import Lab1 from "./pages/Lab1";
import Lab2 from "./pages/Lab2";
import Lab3 from "./pages/Lab3";
import Lab4 from "./pages/Lab4";
import Lab5 from "./pages/Lab5";
import Lab6 from "./pages/Lab6";
import Lab7 from "./pages/Lab7";
import Lab7Edit from "./pages/Lab7Edit";

function App() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
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
          <Link
            to="/lab7"
            className="hover:underline font-bold text-yellow-300"
          >
            Lab 7
          </Link>
        </div>
        <div className="flex space-x-4 items-center">
          <Link
            to="/lab3"
            className="px-4 py-1 border border-white rounded hover:bg-white hover:text-blue-600 transition-colors"
          >
            Đăng nhập
          </Link>
          <Link
            to="/lab3"
            className="px-4 py-1 bg-white text-blue-600 rounded hover:bg-gray-100 transition-colors"
          >
            Đăng ký
          </Link>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        <Routes>
          <Route path="/" element={<Lab1 />} />
          <Route path="/lab2" element={<Lab2 />} />
          <Route path="/lab3" element={<Lab3 />} />
          <Route path="/lab4" element={<Lab4 />} />
          <Route path="/lab5" element={<Lab5 />} />
          <Route path="/lab6/edit/:id" element={<Lab6 />} />
          <Route path="/lab7" element={<Lab7 />} />
          <Route path="/lab7/edit/:id" element={<Lab7Edit />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
