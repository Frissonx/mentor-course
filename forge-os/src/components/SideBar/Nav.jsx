import {
	BarChart3,
	CheckSquare,
	FileText,
	Flame,
	HelpCircle,
	Home,
	Lightbulb
} from 'lucide-react'
import NavItem from './NavItem'

const menuItems = [
	{ id: 1, label: 'Главная', icon: Home, isActive: true },
	{ id: 2, label: 'Задачи', icon: CheckSquare, isActive: false },
	{ id: 3, label: 'Серии обучения', icon: Flame, isActive: false },
	{ id: 4, label: 'Статистика', icon: BarChart3, isActive: false },
	{ id: 5, label: 'Заметки', icon: FileText, isActive: false },
	{ id: 6, label: 'Вопросы', icon: HelpCircle, isActive: false },
	{ id: 7, label: 'Идеи', icon: Lightbulb, isActive: false }
]

function Nav() {
	return (
		<nav className="flex flex-col gap-1 p-4">
			{menuItems.map(item => (
				<NavItem
					key={item.id}
					label={item.label}
					icon={item.icon}
					isActive={item.isActive}
				/>
			))}
		</nav>
	)
}

export default Nav
