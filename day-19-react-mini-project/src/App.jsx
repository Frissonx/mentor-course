import { useState } from "react";

function ItemCard({ title, year, rating }) {
  return (
    <div>
      <h3>Название: {title}</h3>
      <p>Год выпуска: {year}</p>
      <p>Рейтинг: {rating}</p>
    </div>
  );
}

function App() {
  const movies = [
    { id: 1, title: "Inception", year: 2010, rating: 8.8 },
    { id: 2, title: "The Matrix", year: 1999, rating: 8.7 },
    { id: 3, title: "Interstellar", year: 2014, rating: 8.6 },
    { id: 4, title: "The Dark Knight", year: 2008, rating: 9.0 },
    { id: 5, title: "Pulp Fiction", year: 1994, rating: 8.9 },
  ];
  const [showTop, setShowTop] = useState(false);

  const filtered = showTop ? movies.filter((m) => m.rating >= 8.8) : movies;

  return (
    <div>
      <ul>
        {filtered.map((movie) => (
          <ItemCard
            key={movie.id}
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
          />
        ))}
      </ul>
      <button onClick={() => setShowTop(true)}>Высокий рейтинг</button>
      <button onClick={() => setShowTop(false)}>Сброс</button>
    </div>
  );
}
export default App;
