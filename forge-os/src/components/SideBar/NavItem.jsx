function NavItem({ label, icon: Icon, isActive }) {
	return (
		<a
			onClick={e => {
				menuItems.forEach(element => {})
			}}
			className={`flex items-center gap-3 px-4 py-1.5 rounded-lg ${
				isActive
					? 'bg-orange-500 text-white'
					: 'text-zinc-400 hover:bg-zinc-800'
			}`}
		>
			<Icon size={20} />
			{label}
		</a>
	)
}

export default NavItem
