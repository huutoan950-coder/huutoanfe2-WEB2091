import { useState } from "react";

export default function Lab1() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users] = useState([
    { id: 1, name: "Nguyễn Văn Toàn", email: "toan@fpt.edu.vn", role: "Admin" },
    { id: 2, name: "Trần Văn B", email: "b@gmail.com", role: "User" },
  ]);

  return (
    <div className="flex w-full h-full">
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

      <main className="flex-1 bg-gray-100 flex flex-col overflow-hidden">
        <header className="bg-white border-b p-4 flex justify-between items-center shadow-sm">
          <h2 className="text-xl font-semibold">Danh sách User</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            + Thêm User
          </button>
        </header>

        <div className="p-6 overflow-y-auto">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="p-4 font-bold">Name</th>
                  <th className="p-4 font-bold">Email</th>
                  <th className="p-4 font-bold">Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border-b hover:bg-gray-50">
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Thêm User</h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border p-2 rounded"
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-200 px-4 py-2 rounded"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded"
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
