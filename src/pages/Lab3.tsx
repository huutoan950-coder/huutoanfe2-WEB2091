import { useState } from "react";

export default function Lab3() {
  const [login, setLogin] = useState({ email: "", password: "" });
  const [reg, setReg] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    description: "",
  });
  const [post, setPost] = useState({
    title: "",
    category: "Công nghệ",
    slug: "",
    content: "",
    imageUrl: "",
  });
  const [submittedPost, setSubmittedPost] = useState<any>(null);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(reg.email)) return alert("Email không đúng định dạng");
    if (reg.password.length < 6) return alert("Mật khẩu tối thiểu 6 ký tự");
    if (reg.password !== reg.confirmPassword)
      return alert("Mật khẩu không khớp");
    alert("Đăng ký thành công!");
  };

  return (
    <div className="p-8 bg-gray-50 w-full h-full overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">Bài 1: Login</h2>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <input
            required
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />
          <input
            required
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          >
            Login
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">
          Bài 2: Register
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border p-2 rounded"
            onChange={(e) => setReg({ ...reg, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            onChange={(e) => setReg({ ...reg, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Phone"
            className="w-full border p-2 rounded"
            onChange={(e) => setReg({ ...reg, phone: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            onChange={(e) => setReg({ ...reg, password: e.target.value })}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border p-2 rounded"
            onChange={(e) =>
              setReg({ ...reg, confirmPassword: e.target.value })
            }
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded w-full"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">Bài 3: Product</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(product);
          }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Tên sản phẩm"
            className="w-full border p-2 rounded"
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Giá"
            className="w-full border p-2 rounded"
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
          <input
            type="number"
            placeholder="Số lượng"
            className="w-full border p-2 rounded"
            onChange={(e) =>
              setProduct({ ...product, quantity: e.target.value })
            }
          />
          <textarea
            placeholder="Mô tả"
            className="w-full border p-2 rounded"
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          ></textarea>
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded w-full"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">Bài 4: Post</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmittedPost(post);
          }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Title"
            className="w-full border p-2 rounded"
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
          <select
            className="w-full border p-2 rounded"
            onChange={(e) => setPost({ ...post, category: e.target.value })}
          >
            <option value="Công nghệ">Công nghệ</option>
            <option value="Đời sống">Đời sống</option>
          </select>
          <input
            type="text"
            placeholder="Slug"
            className="w-full border p-2 rounded"
            onChange={(e) => setPost({ ...post, slug: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image URL"
            className="w-full border p-2 rounded"
            onChange={(e) => setPost({ ...post, imageUrl: e.target.value })}
          />
          <textarea
            placeholder="Content"
            className="w-full border p-2 rounded"
            onChange={(e) => setPost({ ...post, content: e.target.value })}
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded w-full"
          >
            Submit
          </button>
        </form>
        {submittedPost && (
          <div className="mt-4 p-4 bg-gray-100 rounded">
            <p>
              <strong>Title:</strong> {submittedPost.title}
            </p>
            <p>
              <strong>Category:</strong> {submittedPost.category}
            </p>
            <p>
              <strong>Slug:</strong> {submittedPost.slug}
            </p>
            <p>
              <strong>Image URL:</strong> {submittedPost.imageUrl}
            </p>
            <p>
              <strong>Content:</strong> {submittedPost.content}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
