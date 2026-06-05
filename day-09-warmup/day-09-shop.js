const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    category: "electronics",
    inStock: true,
    sold: 12,
  },
  {
    id: 2,
    name: "Mouse",
    price: 1500,
    category: "electronics",
    inStock: true,
    sold: 80,
  },
  {
    id: 3,
    name: "Desk",
    price: 12000,
    category: "furniture",
    inStock: false,
    sold: 5,
  },
  {
    id: 4,
    name: "Chair",
    price: 8000,
    category: "furniture",
    inStock: true,
    sold: 23,
  },
  {
    id: 5,
    name: "Monitor",
    price: 20000,
    category: "electronics",
    inStock: true,
    sold: 15,
  },
  {
    id: 6,
    name: "Lamp",
    price: 3000,
    category: "furniture",
    inStock: false,
    sold: 40,
  },
];

// Напиши функции (каждая принимает products):

// 1. getInStockNames(products) → массив названий товаров в наличии
//    Ожидаешь: ['Laptop', 'Mouse', 'Chair', 'Monitor']
function getInStockNames(products) {
  return products
    .filter((product) => product.inStock)
    .map((product) => product.name);
}
console.log(getInStockNames(products));
// 2. getTotalRevenue(products) → общая выручка (price * sold по ВСЕМ товарам, суммой)
//    Подсказка: тут пригодится reduce, где на каждом шаге acc + price*sold
function getTotalRevenue(products) {
  return products.reduce((acc, total) => acc + total.price * total.sold, 0);
}
console.log(getTotalRevenue(products));
// 3. getProductsByCategory(products, category) → товары указанной категории
function getProductsByCategory(products, category) {
  return products.filter((product) => product.category === category);
}
console.log(getProductsByCategory(products, "furniture"));

// 4. getMostExpensive(products) → объект самого дорогого товара (вернуть весь объект)
//    Подсказка: reduce, сравнивая acc.price и current.price (вспомни "длинное слово")
function getMostExpensive(products) {
  return products.reduce((acc, product) =>
    product.price > acc.price ? product : acc,
  );
}
console.log(getMostExpensive(products));

// 5. getCategoryRevenue(products) → объект { electronics: ..., furniture: ... }
//    с выручкой (price*sold) по каждой категории
//    Это самое сложное: reduce в объект, acc[category] += price*sold
function getCategoryRevenue(products) {
  return products.reduce(
    (acc, product) => ({
      electronics: (acc.electronics +=
        product.category === "electronics" ? product.price * product.sold : 0),
      furniture: (acc.furniture +=
        product.category === "furniture" ? product.price * product.sold : 0),
    }),
    { electronics: 0, furniture: 0 },
  );
}
console.log(getCategoryRevenue(products));

function getCategoryRevenue1(products) {
  return products.reduce((acc, product) => {
    const revenue = product.price * product.sold;
    acc[product.category] = (acc[product.category] || 0) + revenue;
    return acc;
  }, {});
}
console.log(getCategoryRevenue1(products));
