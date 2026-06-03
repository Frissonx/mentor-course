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

const users = [
  {
    id: 1,
    name: "Anna",
    age: 25,
    city: "Moscow",
    isActive: true,
    salary: 80000,
  },
  {
    id: 2,
    name: "Boris",
    age: 17,
    city: "Saint Petersburg",
    isActive: false,
    salary: 0,
  },
  {
    id: 3,
    name: "Carol",
    age: 30,
    city: "Moscow",
    isActive: true,
    salary: 120000,
  },
  {
    id: 4,
    name: "David",
    age: 22,
    city: "Kazan",
    isActive: true,
    salary: 65000,
  },
  { id: 5, name: "Elena", age: 19, city: "Moscow", isActive: false, salary: 0 },
  {
    id: 6,
    name: "Frank",
    age: 45,
    city: "Saint Petersburg",
    isActive: true,
    salary: 150000,
  },
  {
    id: 7,
    name: "Greg",
    age: 35,
    city: "Kazan",
    isActive: true,
    salary: 95000,
  },
];

// Посчитай, сколько АКТИВНЫХ пользователей в каждом городе.
// Ожидаем: { Moscow: 1, 'Saint Petersburg': 1, Kazan: 2 }
const activeUsers = users
  .filter((user) => user.isActive)
  .map((user) => user.city)
  .reduce((acc, city) => {
    acc[city] = (acc[city] || 0) + 1;
    return acc;
  }, {});

console.log(activeUsers);
