import { useEffect, useState } from 'react'

function App() {
	const [tasks, setTasks] = useState(() => {
		const savedTasks = localStorage.getItem('tasks')
		return savedTasks ? JSON.parse(savedTasks) : []
	})

	const [input, setInput] = useState('')
	const [search, setSearch] = useState('')

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

	function handleAddTask(e) {
		const newTask = { id: Date.now(), text: input, completed: false }
		e.preventDefault()
		if (input.trim() !== '') {
			setTasks([...tasks, newTask])
			setInput('')
		}
	}

	function handleToggle(id) {
		setTasks(
			tasks.map(task =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		)
	}

	function handleSearch(e) {
		setSearch(e.target.value)
	}

	const filteredTasks = tasks.filter(task =>
		task.text.toLowerCase().includes(search.toLowerCase())
	)

	return (
		<div>
			<h1>Мои задачи</h1>
			<form onSubmit={handleAddTask}>
				<input
					value={input}
					onChange={e => setInput(e.target.value)}
					placeholder="Что сделать?"
				/>
				<button type="submit">Добавить</button>
			</form>
			<p>Задач: {filteredTasks.length}</p>
			<input
				value={search}
				onChange={handleSearch}
				placeholder="Поиск задач..."
			/>
			<ul>
				{filteredTasks.map(task => (
					<li key={task.id}>
						{task.text}
						<button onClick={() => handleToggle(task.id)}>
							{task.completed ? '✓' : '✗'}
						</button>
						<button
							onClick={() => setTasks(tasks.filter(t => t.id !== task.id))}
						>
							x
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}
export default App
