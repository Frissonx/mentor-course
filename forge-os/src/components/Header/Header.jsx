import { BarChart3, Bell, Menu } from 'lucide-react'
import AddTaskButton from '../AddTaskButton'
import IconButton from '../IconButton'
import SearchBar from '../SearchBar'
import UserProfile from '../UserProfile'

function Header() {
	return (
		<header className="flex items-center justify-between gap-6 px-6 py-4 border-b  border-zinc-800 bg-zinc-950">
			<div className="flex items-center gap-3 flex-1">
				<IconButton icon={Menu} />
				<SearchBar />
			</div>
			<div className="flex items-center gap-3 ">
				<AddTaskButton />
				<IconButton
					icon={Bell}
					hasBadge
				/>
				<IconButton icon={BarChart3} />
				<UserProfile />
			</div>
		</header>
	)
}
export default Header
