import CategoryForm from "../components/CategoryForm";
import StoryForm from "../components/StoryForm";

export default function Lab4() {
  return (
    <div className="p-8 bg-gray-50 w-full h-full overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 border-b pb-2">
            Bài 1, 2, 3: Form Danh Mục
          </h2>
          <CategoryForm />
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 border-b pb-2">
            Bài 4: Form Truyện Tranh
          </h2>
          <StoryForm />
        </div>
      </div>
    </div>
  );
}
