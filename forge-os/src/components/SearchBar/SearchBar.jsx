import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-zinc-800 border border-gray-700 flex-1 max-w-lg">
      <Search size={18} className="text-gray-40" />
      <input
        type="text"
        placeholder="Поиск задач, заметок, вопросов..."
        className="flex-1 bg-transparent outline-none text-gray-100 placeholder-gray-500"
      />
      <span className="text-xs text-gray-500">⌘ K</span>
    </div>
  );
}

export default SearchBar;
