import StoryList from "../components/StoryList";

export default function Lab5() {
  return (
    <div className="p-8 bg-gray-50 w-full h-full overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 border-b pb-2">
            Danh sách Truyện Tranh (Bài 5)
          </h2>
          <StoryList />
        </div>
      </div>
    </div>
  );
}
