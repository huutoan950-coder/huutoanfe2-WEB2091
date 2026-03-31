import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Lab1() {
  const themeCtx = useContext(ThemeContext);
  const isDark = themeCtx?.isDark;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users] = useState([
    { id: 1, name: "Nguyễn Văn Toàn", email: "toan@fpt.edu.vn", role: "Admin" },
    { id: 2, name: "Trần Văn B", email: "b@gmail.com", role: "User" },
  ]);

  return (
    <div
      className={`flex w-full h-full ${isDark ? "text-white" : "text-gray-900"}`}
    >
      <aside className="w-64 bg-slate-800 text-white flex-none flex flex-col">
        <div className="p-6 text-xl font-bold border-b border-slate-700">
          Dashboard
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <div className="bg-blue-600 p-3 rounded cursor-pointer">
            Quản lý User
          </div>
        </nav>
      </aside>

      <main
        className={`flex-1 flex flex-col overflow-hidden ${isDark ? "bg-gray-900" : "bg-gray-100"}`}
      >
        <header
          className={`border-b p-4 flex justify-between items-center shadow-sm ${isDark ? "bg-gray-800 border-gray-700" : "bg-white"}`}
        >
          <h2 className="text-xl font-semibold">Danh sách User</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            + Thêm User
          </button>
        </header>

        <div className="p-6 overflow-y-auto">
          <div
            className={`rounded-lg shadow overflow-hidden ${isDark ? "bg-gray-800" : "bg-white"}`}
          >
            <table className="w-full text-left">
              <thead
                className={`${isDark ? "bg-gray-700 text-gray-200" : "bg-gray-50 text-gray-700"} border-b border-gray-600`}
              >
                <tr>
                  <th className="p-4 font-bold">Name</th>
                  <th className="p-4 font-bold">Email</th>
                  <th className="p-4 font-bold">Role</th>
                </tr>
              </thead>
              <tbody className={isDark ? "text-gray-300" : "text-gray-700"}>
                {users.map((u) => (
                  <tr
                    key={u.id}
                    className={`border-b ${isDark ? "border-gray-700 hover:bg-gray-700" : "hover:bg-gray-50"}`}
                  >
                    <td className="p-4">{u.name}</td>
                    <td className="p-4">{u.email}</td>
                    <td className="p-4">{u.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div
            className={`p-6 rounded-lg w-96 shadow-2xl ${isDark ? "bg-gray-800 text-white" : "bg-white text-black"}`}
          >
            <h2 className="text-xl font-bold mb-4">Thêm User</h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className={`w-full border p-2 rounded outline-none ${isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white"}`}
              />
              <input
                type="email"
                placeholder="Email"
                className={`w-full border p-2 rounded outline-none ${isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white"}`}
              />
              <input
                type="password"
                placeholder="Password"
                className={`w-full border p-2 rounded outline-none ${isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white"}`}
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
