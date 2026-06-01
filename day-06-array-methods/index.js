// // Задание 1. forEach
// // 1.
// const fruits = ["apple", "banana", "orange", "mango"];
// fruits.forEach(function (fruit, index) {
//   console.log(`${index + 1}.${fruit}`);
// });
//
// // 2.
// let totalLetters = 0;
//
// fruits.forEach((fruit) => (totalLetters += fruit.length));
// console.log(totalLetters);
//
// // Задание 2. map
// const numbers = [1, 2, 3, 4, 5];
//
// // 1. Получи массив квадратов: [1, 4, 9, 16, 25]
// const square = numbers.map((n) => n * n);
// console.log(square);
//
// // 2. Получи массив строк: ['Number 1', 'Number 2' ....]
// const str = numbers.map((n) => `Number ${n}`);
// console.log(str);
//
// // 3. Получи массив boolean: [false, true, false, true, false] (true для четных)
//
// const even = numbers.map((n) => n % 2 === 0);
// console.log(even);
//
// const temperaturesCelsius = [0, 10, 20, 30, 100];
// // 4. Получи массив в Fahrenheit: F = C * 9/5 + 32
// const fahrenheit = temperaturesCelsius.map((c) => (c * 9) / 5 + 32);
// console.log(fahrenheit);
//
// const words = ["hello", "world", "javascript"];
// // 5. Получи массив длин слов: [5, 5, 10]
// const value = words.map((word) => word.length);
// console.log(value);
// // 6. Получи массив в верхнем регистре
// const lowerToUpper = words.map((word) => word.toUpperCase());
// console.log(lowerToUpper);
//
// // Задание 3. filter
//
// const numbersFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// // 1. Отфильтруй четные
// const evenNumbers = numbersFilter.filter((n) => n % 2 === 0);
// console.log(evenNumbers);
// // 2. Отфильтруй большие 5
// const moreFive = numbersFilter.filter((n) => n > 5);
// console.log(moreFive);
// // 3. Отфильтруй кратные 3
// const multiplesThree = numbersFilter.filter((n) => n % 3 === 0);
// console.log(multiplesThree);
//
// const words2 = ["apple", "a", "banana", "ok", "orange", "js"];
// const moreFour = words2.filter((word) => word.length > 4);
// console.log(moreFour);
//
// const mixed = [0, 1, "", "hello", null, 42, undefined, "world"];
// const truthy = mixed.filter((item) => item);
// console.log(truthy);
//
// // Задание 4. find and findIndex
// const users1 = [
//   { id: 1, name: "Anna", age: 25, role: "admin" },
//   { id: 2, name: "Boris", age: 17, role: "user" },
//   { id: 3, name: "Carol", age: 30, role: "user" },
//   { id: 4, name: "David", age: 22, role: "admin" },
//   { id: 5, name: "Elena", age: 19, role: "user" },
// ];
// const findId = users1.find((user) => user.id === 3);
// console.log(findId);
//
// const findAdmin = users1.find((user) => user.role === "admin");
// console.log(findAdmin);
//
// const findIndex = users1.findIndex((user) => user.name === "David");
// console.log(findIndex);
//
// const findUser = users1.find((user) => user.name === "Frank");
// console.log(findUser);
//
// function findUserById(id) {
//   id = users1.find((user) => user.id === id);
//   if (!id) {
//     return "Don't found user";
//   }
//   return id;
// }
// console.log(findUserById(4));
//
// // Задание 5. Цепочки методов
// const products = [
//   { name: "Bread", price: 50, inStock: true },
//   { name: "Milk", price: 80, inStock: false },
//   { name: "Cheese", price: 300, inStock: true },
//   { name: "Eggs", price: 120, inStock: true },
//   { name: "Yogurt", price: 60, inStock: false },
//   { name: "Butter", price: 200, inStock: true },
// ];
//
// // 1. Получи название тех товаров, что в наличии
// const doneProducts = products
//   .filter((product) => product.inStock)
//   .map((product) => product.name);
// console.log(doneProducts);
//
// // 2. Получи массив цен товаров в наличии
// const priceProduct = products
//   .filter((product) => product.inStock)
//   .map((product) => product.price);
// console.log(priceProduct);
//
// // 3. Получи строку с названием товаров в наличии через ,
// const strDoneProduct = products
//   .filter((product) => product.inStock)
//   .map((product) => product.name)
//   .join(",");
// console.log(strDoneProduct);
//
// // 4. Получи название товаров дороже 100 и в наличии
// const more100IsStock = products
//   .filter((product) => product.inStock && product.price > 100)
//   .map((product) => product.name);
// console.log(more100IsStock);
//
// // Задание 6. Мини-проект - обработка списка пользователей
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
// // 1. getActiveUsers(users) -> массив активных пользователей
// function getActiveUsers(array) {
//   return array.filter((user) => user.isActive).map((user) => user.name);
// }
//
// function getAdultActiveNames(array) {
//   return array
//     .filter((user) => user.isActive && user.age >= 18)
//     .map((user) => user.name);
// }
//
// function getUsersFromCity(array, city) {
//   return array.filter((user) => user.city === city);
// }
//
// function getUserById(array, id) {
//   return array.filter((user) => user.id === id);
// }
//
// console.log(getActiveUsers(users));
// console.log(getAdultActiveNames(users));
// console.log(getUsersFromCity(users, "Moscow"));
// console.log(getUserById(users, 8));
// console.log(getAverageSalaryOfActive(users));
// console.log(getCities(users));
//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // Отфильтруй четные числа ->
// const even = numbers.filter((n) => n % 2 === 0);
// console.log(even);
//
// // 2. Отфильтруй числа больше 5
// const moreFive = numbers.filter((n) => n > 5);
// console.log(moreFive);
//
// // 3. Отфильтруй кратны 3
// const multiplesFhree = numbers.filter((n) => n % 3 === 0);
// console.log(multiplesFhree);
//
// const words = ["apple", "a", "banana", "ok", "orange", "js"];
// // 4. Отфильтруй слова длиннее 4 символа
// const moreFour = words.filter((word) => word.length > 4);
// console.log(moreFour);
//
// const mixed = [0, 1, "", "hello", null, 42, undefined, "world"];
// const truthy = mixed.filter((mix) => mix);
// console.log(truthy);
//
// const users = [
//   { id: 1, name: "Anna", age: 25, role: "admin" },
//   { id: 2, name: "Boris", age: 17, role: "user" },
//   { id: 3, name: "Carol", age: 30, role: "user" },
//   { id: 4, name: "David", age: 22, role: "admin" },
//   { id: 5, name: "Elena", age: 19, role: "user" },
// ];
// const userId = users.find((user) => user.id === 3);
// console.log(userId);
//
// const userAdmin = users.find((user) => user.role === "admin");
// console.log(userAdmin);
//
// const userFindIndexOf = users.findIndex((user) => user.name === "David");
// console.log(userFindIndexOf);
//
// const userFindFrank = users.find((user) => user.name === "Frank");
// console.log(userFindFrank);
//
// function findUserById(id) {
//   return users.find((user) => user.id === id);
// }
// console.log(findUserById(3));
//
// // 1. Найди пользователя с id === 3
// // 2. Найди первого админа (role === 'admin')
// // 3. Найди индекс пользователя с name === 'David'
// // 4. Найди пользователя с name === 'Frank' (его нет — посмотри, что вернётся, и выведи это)
// // 5. Напиши функцию findUserById(id), которая принимает id и возвращает пользователя
// //    (подсказка: внутри функции — users.find(...), где условие сравнивает u.id с пришедшим id)

const products = [
  { name: "Bread", price: 50, inStock: true },
  { name: "Milk", price: 80, inStock: false },
  { name: "Cheese", price: 300, inStock: true },
  { name: "Eggs", price: 120, inStock: true },
  { name: "Yogurt", price: 60, inStock: false },
  { name: "Butter", price: 200, inStock: true },
];

// 1. Названия только тех товаров, что в наличии (inStock === true)
//    filter → map → ['Bread', 'Cheese', 'Eggs', 'Butter']
const inStockProduct = products
  .filter((product) => product.inStock)
  .map((product) => product.name);
console.log(inStockProduct);

const priceProduct = products
  .filter((product) => product.inStock === true)
  .map((product) => product.price);
console.log(priceProduct);

const more100AndInStock = products
  .filter((product) => product.inStock && product.price > 100)
  .map((product) => product.name);
console.log(more100AndInStock);
// 2. Массив цен товаров в наличии → [50, 300, 120, 200]

// 3. Названия товаров дороже 100 И в наличии
//    (filter с двумя условиями через &&) → ['Cheese', 'Eggs', 'Butter']
