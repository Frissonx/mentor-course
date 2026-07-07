import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  function handleAddTask(e) {
    const newTask = { id: Date.now(), text: input, completed: false };
    e.preventDefault();
    if (input.trim() !== "") {
      setTasks([...tasks, newTask]);
      setInput("");
    }
  }

  return (
    <div>
      <h1>Мои задачи</h1>
      <form onSubmit={handleAddTask}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Что сделать?"
        />
        <button type="submit">Добавить</button>
      </form>
      <p>Задач: {tasks.length}</p>
      <ul>
        {tasks.map((task, id) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => setTasks(tasks.filter((_, i) => i !== id))}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
