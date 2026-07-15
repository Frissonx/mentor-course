import { Search } from 'lucide-react'

function SearchBar() {
	return (
		<div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700 flex-1 max-w-lg">
			<Search
				size={18}
				className="text-zinc-400"
			/>
			<input
				type="text"
				placeholder="Поиск задач, заметок, вопросов..."
				className="flex-1 bg-transparent outline-none text-zinc-100 placeholder-zinc-400"
			/>
			<span className="text-xs text-zinc-500">⌘ K</span>
		</div>
	)
}

export default SearchBar
