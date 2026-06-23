import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)}>
        Задача
      </input>
      <button onClick={() => setTasks([...tasks, newTask])}>Добавить</button>
    </div>
  );
}
export default App;
