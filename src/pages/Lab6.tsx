import EditStory from "../components/EditStory";

export default function Lab6() {
  return (
    <div className="p-8 bg-gray-50 w-full h-full overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 border-b pb-2">
            Chỉnh sửa Truyện (Lesson 6)
          </h2>
          <EditStory />
        </div>
      </div>
    </div>
  );
}
