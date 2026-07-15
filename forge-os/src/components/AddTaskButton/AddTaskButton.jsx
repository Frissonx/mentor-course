import { Plus } from 'lucide-react'

function AddTaskButton() {
	return (
		<button className="flex items-center  gap-2 px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 whitespace-nowrap">
			<Plus size={18} />
			Новая задача
		</button>
	)
}
export default AddTaskButton
