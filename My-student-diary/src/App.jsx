import { useEffect, useState } from 'react'

function App() {
	const [tasks, setTasks] = useState(() => {
		const savedTasks = localStorage.getItem('tasks')
		return savedTasks ? JSON.parse(savedTasks) : []
	})

	const [formData, setFormData] = useState({
		today: '',
		tomorrow: '',
		comment: ''
	})

	const [search, setSearch] = useState('')

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

	function handleAddEntry(e) {
		e.preventDefault()
		if (
			formData.today.trim() !== '' ||
			formData.tomorrow.trim() !== '' ||
			formData.comment.trim() !== ''
		) {
			const newEntry = {
				id: Date.now(),
				date: new Date().toLocaleDateString('ru-RU'),
				completed: false,
				today: formData.today,
				tomorrow: formData.tomorrow,
				comment: formData.comment
			}
			setTasks([...tasks, newEntry])
			setFormData({ today: '', tomorrow: '', comment: '' })
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

	const filteredTasks = tasks.filter(
		task =>
			task.today.toLowerCase().includes(search.toLowerCase()) ||
			task.tomorrow.toLowerCase().includes(search.toLowerCase()) ||
			task.comment.toLowerCase().includes(search.toLowerCase())
	)

	const totalEntries = tasks.length

	const completedEntries = tasks.filter(task => task.completed).length

	const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000
	const recentEntries = tasks.filter(
		task => new Date(task.date).getTime() >= sevenDaysAgo
	).length

	return (
		<div>
			<div>
				<h2>Статистика</h2>
				<p>Всего записей: {totalEntries}</p>
				<p>Выполнено: {completedEntries}</p>
				<p>Записей за последние 7 дней: {recentEntries}</p>
			</div>
			<h1>Дневник разработчика</h1>
			<form onSubmit={handleAddEntry}>
				<input
					value={formData.today}
					onChange={e => setFormData({ ...formData, today: e.target.value })}
					placeholder="Что сделал сегодня?"
				/>
				<input
					value={formData.tomorrow}
					onChange={e => setFormData({ ...formData, tomorrow: e.target.value })}
					placeholder="Что планируешь завтра?"
				/>
				<textarea
					value={formData.comment}
					onChange={e => setFormData({ ...formData, comment: e.target.value })}
					placeholder="Комментарий..."
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
						{task.today} | {task.tomorrow} | {task.comment} | {task.date}
						{task.completed ? ' (Выполнено)' : ' (Не выполнено)'}
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
