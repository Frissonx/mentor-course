// Блок 1 - методы массивов
const nums = [5, 12, 8, 130, 44, 3, 9];
const more10 = nums.filter((num) => num > 10);
console.log(more10);
const numSquare = nums.map((num) => num * 2);
console.log(numSquare);
const numSum = nums.reduce((acc, num) => acc + num);
console.log(numSum);
const numFind = nums.find((num) => num > 100);
console.log(numFind);

// Блок 2 - объекты
const users = [
  { name: "Anna", age: 25, active: true },
  { name: "Boris", age: 17, active: false },
  { name: "Carol", age: 30, active: true },
];

const usersName = users.map((user) => user.name);
console.log(usersName);
const userActive = users.filter((user) => user.active);
console.log(userActive);

async function request() {
  try {
    const response = await fetch("URL");
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log("Ошибка", error);
  }
}

const { name, age } = users[0];
console.log(name, age);

console.log(users[0].name, users[0].age);
