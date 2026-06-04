// const numbers = [5, 10, 15, 20];
// // Посчитай сумму всех чисел через reduce
// const sumNumbers = numbers.reduce((acc, sum) => acc + sum, 0);
// console.log(sumNumbers);
//
// // 2. Произведение всех чисел
// const nums = [1, 2, 3, 4];
// const prodNums = nums.reduce((acc, num) => acc * num, 1);
// console.log(prodNums);
//
// // 3. Найди максимум через reduce
// const values = [3, 7, 2, 9, 4];
// const valuesNums = values.reduce((acc, num) => Math.max(acc, num));
// console.log(valuesNums);
//
// // 4. Склей слова в одну строку через пробел
// const words = ["Я", "учу", "JavaScript"];
// const strWords = words.reduce((acc, word) => acc + " " + word);
// console.log(strWords);
//
// // Пример:
// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const count = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});
// console.log(count);

// 1. Посчитай, сколько пользователей в каждом городе.
//    Возьми массив городов и сверни в объект-счётчик.
// const cities = ["Moscow", "Kazan", "Moscow", "Moscow", "Kazan"];
// // ожидаем: { Moscow: 3, Kazan: 2 }
// const total = cities.reduce((acc, cur) => {
//   acc[cur] = (acc[cur] || 0) + 1;
//   return acc;
// }, {});
// console.log(total);
//
// const users = [
//   {
//     id: 1,
//     name: "Anna",
//     age: 25,
//     city: "Moscow",
//     isActive: true,
//     salary: 80000,
//   },
//   {
//     id: 2,
//     name: "Boris",
//     age: 17,
//     city: "Saint Petersburg",
//     isActive: false,
//     salary: 0,
//   },
//   {
//     id: 3,
//     name: "Carol",
//     age: 30,
//     city: "Moscow",
//     isActive: true,
//     salary: 120000,
//   },
//   {
//     id: 4,
//     name: "David",
//     age: 22,
//     city: "Kazan",
//     isActive: true,
//     salary: 65000,
//   },
//   { id: 5, name: "Elena", age: 19, city: "Moscow", isActive: false, salary: 0 },
//   {
//     id: 6,
//     name: "Frank",
//     age: 45,
//     city: "Saint Petersburg",
//     isActive: true,
//     salary: 150000,
//   },
//   {
//     id: 7,
//     name: "Greg",
//     age: 35,
//     city: "Kazan",
//     isActive: true,
//     salary: 95000,
//   },
// ];
//
// // Посчитай, сколько АКТИВНЫХ пользователей в каждом городе.
// // Ожидаем: { Moscow: 1, 'Saint Petersburg': 1, Kazan: 2 }
// const activeUsers = users
//   .filter((user) => user.isActive)
//   .map((user) => user.city)
//   .reduce((acc, city) => {
//     acc[city] = (acc[city] || 0) + 1;
//     return acc;
//   }, {});
//
// console.log(activeUsers);

// Проверка reduce
const nums = [4, 8, 15, 16, 23, 42];
const sumNUms = nums.reduce((acc, num) => acc + num, 0);
console.log(sumNUms);

// 2. Самое ДЛИННОЕ слово в массиве (вернуть само строку)
const words = ["cat", "elephant", "dog", "butterfly", "ant"];
const maxWord = words.reduce(
  (acc, word) => (word.length > acc.length ? word : acc),
  "",
);
console.log(maxWord);

const letters = ["a", "b", "a", "c", "b", "a"];
const totalLetters = letters.reduce(
  (acc, letter) => ({ ...acc, [letter]: (acc[letter] || 0) + 1 }),
  {},
);
console.log(totalLetters);

const data = [10, 20, 30];
const valueData = data.reduce(
  (acc, value) => ({
    sum: (acc["sum"] || 0) + value,
    count: (acc["count"] || 0) + 1,
  }),
  {},
);
console.log(valueData);

// 5. Сумма цен ТОЛЬКО товаров в наличии (комбинация с тем, что знаешь)
const cart = [
  { name: "Bread", price: 50, inStock: true },
  { name: "Milk", price: 80, inStock: false },
  { name: "Cheese", price: 300, inStock: true },
];
const sumActiveCart = cart
  .filter((goods) => goods.inStock)
  .reduce((acc, goods) => acc + goods.price, 0);

const sumActiveCart1 = cart
  .filter((goods) => goods.inStock)
  .map((x) => x.price)
  .reduce((acc, price) => acc + price, 0);

console.log(sumActiveCart);
console.log(sumActiveCart1);
// ожидаешь: 350
// тут можно двумя путями — подумай какими, выбери любой
