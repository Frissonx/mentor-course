import Header from './components/Header'

function App() {
	return (
		<div className="flex flex-row h-screen bg-zinc-950">
			{/* Сайдбар - пока заглушка */}
			<aside className="w-64 bg-zinc-900 border-r border-zinc-800">
				{/* сюда позже приедет содержимое сайдбара */}
			</aside>

			{/* Правая область */}
			<div className="flex flex-col flex-1">
				<Header />
				{/* Контент - пока пусто */}
				<main className="flex-1 p-6">
					{/* сюда позже приедет главная страница */}
				</main>
			</div>
		</div>
	)
}

export default App
