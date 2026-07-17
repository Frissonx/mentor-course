import { ChevronDown } from 'lucide-react'

function UserProfile() {
	return (
		<button className="flex items-center gap-2  py-1 rounded-lg hover:bg-zinc-800">
			<div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white text-sm">
				A
			</div>
			<span className="text-zinc-200 text-sm">Александр</span>
			<ChevronDown
				size={16}
				className="text-zinc-400"
			/>
		</button>
	)
}

export default UserProfile
