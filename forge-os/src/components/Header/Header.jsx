import AddTaskButton from '../AddTaskButton'
import Logo from '../Logo'
import SearchBar from '../SearchBar'

function Header() {
	return (
		<header className="flex items-center justify-between gap-6 px-6 py-4 border-b border-gray-200 bg-gray-900">
			<div className="flex items-center gap-6 flex-1">
				<Logo />
				<SearchBar />
			</div>
			<AddTaskButton />
		</header>
	)
}
export default Header
