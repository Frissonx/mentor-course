const book = {
  title: "JS for Beginners",
  author: "Alex",
  year: 2023,
  pages: 320,
};
// 1. Через деструктуризацию достань title and author, выведи "JS for Beginners - Ivan"
const { title, author } = book;
console.log(`${title} - ${author}`);

// 2. Сделай копию book через spread, в копии поменяй year  на 2024.
// Выведи оригинал и копию, убедись что оригинал цел.
const newBook = { ...book };
newBook.year = 2024;
console.log(book);
console.log(newBook);

const stock = { apple: 50, banana: 0, cherry: 120, date: 0 };
const notStock = Object.entries(stock)
  .filter(([name, value]) => value === 0)
  .map(([name]) => name);
console.log(notStock);

const sumStock = Object.values(stock).reduce((acc, value) => acc + value, 0);
console.log(sumStock);
