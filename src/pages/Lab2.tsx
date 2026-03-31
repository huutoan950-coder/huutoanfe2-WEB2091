import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Lab2() {
  const themeCtx = useContext(ThemeContext);
  const isDark = themeCtx?.isDark;

  const [students] = useState([
    { id: "PH58533", name: "Toàn", age: 20, major: "Công nghệ thông tin" },
    { id: "PH12345", name: "Nguyễn Văn A", age: 19, major: "Thiết kế đồ họa" },
  ]);

  const [products] = useState([
    {
      id: 1,
      productName: "iPhone 12",
      price: "12.000.000đ",
      category: "Điện thoại",
    },
    {
      id: 2,
      productName: "MacBook Pro",
      price: "30.000.000đ",
      category: "Laptop",
    },
    {
      id: 3,
      productName: "Bàn phím cơ",
      price: "1.200.000đ",
      category: "Phụ kiện",
    },
    {
      id: 4,
      productName: "Chuột không dây",
      price: "500.000đ",
      category: "Phụ kiện",
    },
  ]);

  const [users] = useState([
    { id: 1, name: "Lê Hoàng", email: "hoang@gmail.com", status: "active" },
    { id: 2, name: "Phạm Mai", email: "mai@gmail.com", status: "inactive" },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const cardClass = `p-6 rounded-lg shadow ${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`;
  const tableHeaderClass = isDark
    ? "bg-gray-700 text-gray-200"
    : "bg-gray-100 text-gray-700";
  const borderClass = isDark ? "border-gray-700" : "border-gray-200";

  return (
    <div
      className={`p-8 w-full h-full overflow-y-auto space-y-8 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
    >
      {/* Bài 1: Bảng Sinh Viên */}
      <div className={cardClass}>
        <h2 className="text-xl font-bold mb-4">Bài 1: Bảng Sinh Viên</h2>
        <table className={`min-w-full border text-left ${borderClass}`}>
          <thead className={tableHeaderClass}>
            <tr>
              <th className={`p-3 border ${borderClass}`}>ID</th>
              <th className={`p-3 border ${borderClass}`}>Name</th>
              <th className={`p-3 border ${borderClass}`}>Age</th>
              <th className={`p-3 border ${borderClass}`}>Major</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr
                key={s.id}
                className={`border-b ${borderClass} ${isDark ? "hover:bg-gray-700" : "hover:bg-gray-50"}`}
              >
                <td className={`p-3 border ${borderClass}`}>{s.id}</td>
                <td className={`p-3 border ${borderClass}`}>{s.name}</td>
                <td className={`p-3 border ${borderClass}`}>{s.age}</td>
                <td className={`p-3 border ${borderClass}`}>{s.major}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bài 2: Bảng Sản Phẩm */}
      <div className={cardClass}>
        <h2 className="text-xl font-bold mb-4">Bài 2: Bảng Sản Phẩm</h2>
        <table className={`min-w-full border text-left mb-4 ${borderClass}`}>
          <thead className={tableHeaderClass}>
            <tr>
              <th className={`p-3 border ${borderClass}`}>ID</th>
              <th className={`p-3 border ${borderClass}`}>Product Name</th>
              <th className={`p-3 border ${borderClass}`}>Price</th>
              <th className={`p-3 border ${borderClass}`}>Category</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((p) => (
              <tr
                key={p.id}
                className={`border-b ${borderClass} ${isDark ? "hover:bg-gray-700" : "hover:bg-gray-50"}`}
              >
                <td className={`p-3 border ${borderClass}`}>{p.id}</td>
                <td className={`p-3 border ${borderClass}`}>{p.productName}</td>
                <td className={`p-3 border ${borderClass}`}>{p.price}</td>
                <td className={`p-3 border ${borderClass}`}>{p.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage(1)}
            className={`px-4 py-2 rounded transition-colors ${currentPage === 1 ? "bg-blue-600 text-white" : isDark ? "bg-gray-700 text-gray-300" : "bg-gray-200"}`}
          >
            1
          </button>
          <button
            onClick={() => setCurrentPage(2)}
            className={`px-4 py-2 rounded transition-colors ${currentPage === 2 ? "bg-blue-600 text-white" : isDark ? "bg-gray-700 text-gray-300" : "bg-gray-200"}`}
          >
            2
          </button>
        </div>
      </div>

      {/* Bài 3: Bảng User */}
      <div className={cardClass}>
        <h2 className="text-xl font-bold mb-4">Bài 3: Bảng User</h2>
        <table className={`min-w-full border text-left ${borderClass}`}>
          <thead className={tableHeaderClass}>
            <tr>
              <th className={`p-3 border ${borderClass}`}>ID</th>
              <th className={`p-3 border ${borderClass}`}>Name</th>
              <th className={`p-3 border ${borderClass}`}>Email</th>
              <th className={`p-3 border ${borderClass}`}>Status</th>
              <th className={`p-3 border ${borderClass}`}>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr
                key={u.id}
                className={`border-b ${borderClass} ${isDark ? "hover:bg-gray-700" : "hover:bg-gray-50"}`}
              >
                <td className={`p-3 border ${borderClass}`}>{u.id}</td>
                <td className={`p-3 border ${borderClass}`}>{u.name}</td>
                <td className={`p-3 border ${borderClass}`}>{u.email}</td>
                <td className={`p-3 border ${borderClass}`}>
                  <span
                    className={`px-2 py-1 rounded text-sm font-medium ${u.status === "active" ? (isDark ? "bg-green-900 text-green-200" : "bg-green-100 text-green-700") : isDark ? "bg-red-900 text-red-200" : "bg-red-100 text-red-700"}`}
                  >
                    {u.status}
                  </span>
                </td>
                <td className={`p-3 border ${borderClass} space-x-2`}>
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
