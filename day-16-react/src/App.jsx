function ProductCard({ title, price }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>Цена: {price} рублей</p>
    </div>
  );
}

function App() {
  const products = [
    { id: 1, title: "Burn", price: 120 },
    { id: 2, title: "RedBull", price: 230 },
    { id: 3, title: "Flash", price: 100 },
  ];
  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default App;
