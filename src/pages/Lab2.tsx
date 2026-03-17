import { useState } from "react";

export default function Lab2() {
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

  return (
    <div className="p-8 bg-gray-50 w-full h-full overflow-y-auto space-y-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Bài 1: Bảng Sinh Viên</h2>
        <table className="min-w-full border text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Age</th>
              <th className="p-3 border">Major</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id} className="border-b">
                <td className="p-3 border">{s.id}</td>
                <td className="p-3 border">{s.name}</td>
                <td className="p-3 border">{s.age}</td>
                <td className="p-3 border">{s.major}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Bài 2: Bảng Sản Phẩm</h2>
        <table className="min-w-full border text-left mb-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Product Name</th>
              <th className="p-3 border">Price</th>
              <th className="p-3 border">Category</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((p) => (
              <tr key={p.id} className="border-b">
                <td className="p-3 border">{p.id}</td>
                <td className="p-3 border">{p.productName}</td>
                <td className="p-3 border">{p.price}</td>
                <td className="p-3 border">{p.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage(1)}
            className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          >
            1
          </button>
          <button
            onClick={() => setCurrentPage(2)}
            className={`px-4 py-2 rounded ${currentPage === 2 ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          >
            2
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Bài 3: Bảng User</h2>
        <table className="min-w-full border text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b">
                <td className="p-3 border">{u.id}</td>
                <td className="p-3 border">{u.name}</td>
                <td className="p-3 border">{u.email}</td>
                <td className="p-3 border">
                  <span
                    className={`px-2 py-1 rounded text-sm ${u.status === "active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                  >
                    {u.status}
                  </span>
                </td>
                <td className="p-3 border space-x-2">
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded">
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
