import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import CategoryForm from "../components/CategoryForm";
import StoryForm from "../components/StoryForm";

export default function Lab4() {
  const themeCtx = useContext(ThemeContext);
  const isDark = themeCtx?.isDark;

  const cardClass = `p-6 rounded-lg shadow transition-colors ${
    isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"
  }`;

  return (
    <div
      className={`p-8 w-full h-full overflow-y-auto transition-colors ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className={cardClass}>
          <h2
            className={`text-xl font-bold mb-4 border-b pb-2 ${isDark ? "border-gray-700" : "border-gray-200"}`}
          >
            Bài 1, 2, 3: Form Danh Mục
          </h2>
          <CategoryForm />
        </div>

        <div className={cardClass}>
          <h2
            className={`text-xl font-bold mb-4 border-b pb-2 ${isDark ? "border-gray-700" : "border-gray-200"}`}
          >
            Bài 4: Form Truyện Tranh
          </h2>
          <StoryForm />
        </div>
      </div>
    </div>
  );
}
