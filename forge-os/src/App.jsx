import Header from './components/Header'
import Logo from './components/Logo'
import Nav from './components/SideBar/Nav'

function App() {
	return (
		<div className="flex flex-row h-screen bg-zinc-950">
			{/* Сайдбар - пока заглушка */}
			<aside className="w-64 bg-zinc-900 border-r border-zinc-800">
				<Logo />
				<Nav />
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
