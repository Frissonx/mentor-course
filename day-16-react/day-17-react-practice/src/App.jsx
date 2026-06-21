// import { useState } from "react";

// function App() {
//   const [items, setItems] = useState([]);
//   const [inputName, setInputName] = useState("");
//   const [inputPrice, setInputPrice] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!inputName || !inputPrice) return;
//     setItems([...items, { name: inputName, price: Number(inputPrice) }]);
//     setInputName("");
//     setInputPrice("");
//   }

//   return (
//     <div>
//       <h1>Товары</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           value={inputName}
//           onChange={(e) => setInputName(e.target.value)}
//           placeholder="Название"
//         />
//         <input
//           value={inputPrice}
//           onChange={(e) => setInputPrice(e.target.value)}
//           placeholder="Цена"
//           type="number"
//         />
//         <button type="submit">Добавить</button>
//       </form>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             {item.name} - {item.price} рублей!
//             <button
//               onClick={() => setItems(items.filter((_, i) => i !== index))}
//             >
//               X
//             </button>
//           </li>
//         ))}
//       </ul>
//       <p>Итого: {items.reduce((sum, item) => sum + item.price, 0)} рублей</p>
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    }
    loadPosts();
  }, []);

  return (
    <div>
      <ul>
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
