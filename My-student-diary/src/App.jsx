import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  

  function handleAddTask() {
    const newTask = { id: Date.now(), text: input, completed: false };

    if (input.trim() !== "") {
      setTasks([...tasks, newTask]);
      setInput("");
    }
  }

  return (
    <div>
      <input value={input} placeholder="Задача" onChange={(e) => setInput(e.target.value)} z />
      <button onClick={handleAddTask}>Добавить</button>
    </div>
  );
}
export default App;
