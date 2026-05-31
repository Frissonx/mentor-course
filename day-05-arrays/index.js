// Задание 1.
const fruits = ["apple", "banana", "orange"];

console.log(fruits.length);
console.log(fruits[fruits.length - 1]);
fruits.push("mango");
fruits.unshift("grape");
const removedLasted = fruits.pop();
console.log(removedLasted);
const removedFirst = fruits.shift();
console.log(removedFirst);
console.log(fruits);

// Задание 2.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const copyNumbers = numbers.slice(2, 5);
console.log(copyNumbers);
const lastEL = numbers.slice(-3);
console.log(lastEL);
numbers.splice(4, 2);
console.log(numbers);
numbers.splice(2, 0, 99);
console.log(numbers);

// Задание 3.
const users = ["Anna", "Boris", "Carol", "David", "Elena"];
const findUser1 = users.includes("David");
console.log(findUser1);

const findUser2 = users.includes("Frank");
console.log(findUser2);
const usersIndex = users.indexOf("Carol");
console.log(usersIndex);

const usersIndex2 = users.indexOf("Frank");
if (usersIndex2 === -1) {
  console.log("Not found");
} else {
  console.log(usersIndex2);
}

function hasUser(name) {
  return users.includes(name);
}
console.log(hasUser("Carol"));

const hasUser2 = (name) => users.includes(name);
console.log(hasUser2("Frank"));

// Задача 4.
const tags = ["javascript", "react", "nodejs", "css"];
const addStr = tags.map((tag) => "#" + tag).join(" ");
console.log(addStr);

const tags2 = [];
for (let tag2 of tags) {
  tags2.push("#" + tag2);
}
console.log(tags2.join(" "));

const keys = ["Name", "Age", "City", "Skills"];
const csv = "Alex,29,Saint Petersburg,JavaScript";
const values = csv.split(",");
const zip = (keys, values) => keys.map((key, i) => [key, values[i]]);
console.log(zip(keys, values).map(([k, v]) => `${k}: ${v}`));

const sentence = "Hello world this is JavaScript";
const sentence1 = sentence.split(" ").length;
console.log(sentence1);

// Задание 5.
const prices = [100, 50, 200, 25, 175, 80];
prices.sort((a, b) => a - b);
console.log(prices);

prices.sort((a, b) => b - a);
console.log(prices);

const pricesCopy = prices.slice().sort((a, b) => a - b);
console.log(pricesCopy);

const names = ["Charlie", "Alice", "Bob"];
console.log(names);
const namesCopy = [...names].sort();
console.log(namesCopy);
const namesRevers = [...names].reverse();
console.log(namesRevers);
