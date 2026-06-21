import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!input) return;
    setTasks([...tasks, input]);
    setInput("");
  }

  return (
    <div>
      <h1>Мои задачи</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Что сделать?"
        />
        <button type="submit">Добавить</button>
      </form>
      <p>Задач: {tasks.length}</p>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button
              onClick={() => setTasks(tasks.filter((_, i) => i !== index))}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
