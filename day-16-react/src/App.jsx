import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Нажатий: {count}</p>
      <button onClick={() => setCount(count + 1)}>Прибавь</button>
      <button onClick={() => setCount(count - 1)}>Вычти</button>
      <button onClick={() => setCount(0)}>Сброс</button>
    </div>
  );
}

export default App;
