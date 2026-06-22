import { useState, useEffect } from "react";

function UserCard({ name, email, city }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{city}</p>
    </div>
  );
}

function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function loadUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    }
    loadUsers();
  }, []);

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <p>Найдено: {filtered.length}</p>
      <ul>
        {filtered.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            city={user.address.city}
          />
        ))}
      </ul>
    </div>
  );
}
export default App;
