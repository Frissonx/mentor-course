function IconButton({ icon: Icon, onClick, hasBadge }) {
	return (
		<button
			onClick={onClick}
			className=" relative flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800 hover:bg-zinc-700"
		>
			<Icon
				size={20}
				className="text-zinc-300"
			/>
			{hasBadge && (
				<span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500"></span>
			)}
		</button>
	)
}

export default IconButton
