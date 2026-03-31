import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Lab3() {
  const themeCtx = useContext(ThemeContext);
  const isDark = themeCtx?.isDark;

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

  // Reusable tailwind classes for consistency
  const cardClass = `p-6 rounded-lg shadow ${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`;
  const inputClass = `w-full border p-2 rounded outline-none transition-colors ${
    isDark
      ? "bg-gray-700 border-gray-600 text-white focus:border-blue-500"
      : "bg-white border-gray-300 focus:border-blue-400"
  }`;

  return (
    <div
      className={`p-8 w-full h-full overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
    >
      {/* Bài 1: Login */}
      <div className={cardClass}>
        <h2 className="text-xl font-bold mb-4 border-b pb-2">Bài 1: Login</h2>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <input
            required
            type="email"
            placeholder="Email"
            className={inputClass}
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />
          <input
            required
            type="password"
            placeholder="Password"
            className={inputClass}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </form>
      </div>

      {/* Bài 2: Register */}
      <div className={cardClass}>
        <h2 className="text-xl font-bold mb-4 border-b pb-2">
          Bài 2: Register
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className={inputClass}
            onChange={(e) => setReg({ ...reg, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className={inputClass}
            onChange={(e) => setReg({ ...reg, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Phone"
            className={inputClass}
            onChange={(e) => setReg({ ...reg, phone: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className={inputClass}
            onChange={(e) => setReg({ ...reg, password: e.target.value })}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className={inputClass}
            onChange={(e) =>
              setReg({ ...reg, confirmPassword: e.target.value })
            }
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Bài 3: Product */}
      <div className={cardClass}>
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
            className={inputClass}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Giá"
            className={inputClass}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
          <input
            type="number"
            placeholder="Số lượng"
            className={inputClass}
            onChange={(e) =>
              setProduct({ ...product, quantity: e.target.value })
            }
          />
          <textarea
            placeholder="Mô tả"
            className={`${inputClass} min-h-[100px]`}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          ></textarea>
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded w-full hover:bg-purple-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Bài 4: Post */}
      <div className={cardClass}>
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
            className={inputClass}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
          <select
            className={inputClass}
            onChange={(e) => setPost({ ...post, category: e.target.value })}
          >
            <option value="Công nghệ">Công nghệ</option>
            <option value="Đời sống">Đời sống</option>
          </select>
          <input
            type="text"
            placeholder="Slug"
            className={inputClass}
            onChange={(e) => setPost({ ...post, slug: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image URL"
            className={inputClass}
            onChange={(e) => setPost({ ...post, imageUrl: e.target.value })}
          />
          <textarea
            placeholder="Content"
            className={`${inputClass} min-h-[100px]`}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded w-full hover:bg-indigo-700 transition-colors"
          >
            Submit
          </button>
        </form>
        {submittedPost && (
          <div
            className={`mt-4 p-4 rounded border ${isDark ? "bg-gray-700 border-gray-600" : "bg-gray-100 border-gray-200"}`}
          >
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
