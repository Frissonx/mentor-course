function UserCard({ name, age }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Возраст: {age}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <UserCard name="Анна" age={28} />
      <UserCard name="Борис" age={26} />
      <UserCard name="карол" age={18} />
    </div>
  );
}

export default App;
