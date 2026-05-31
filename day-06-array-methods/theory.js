// Часть 1. Теория (~50 минут)
// 1. Функция как аргумент
// В JS функция - это тоже значение. Её можно:
// Сохранить в переменную (мы это делали:const greet = () => ...)
// Передать в другую функцию как аргумент <- вот тут магия
// вернуть из функции

function callTwice(fn) {
  fn();
  fn();
}

function sayHi() {
  console.log("Hi!");
}
callTwice(sayHi);

// Что произошло:
// Мы передали саму функцию (sayHi) как аргумент
// Внутри callTwice ее вызвали дважды

// Важно мы передаём sayHi, без скобок. sayHi - это функция. sayHi() - это результат ее вызова. Это критичная разница:
// callTwice(sayHi);
// callTwice(sayHi());

// Терминология:
// Higher-order function (функция высшего порядка) - функция, которая принимает другую функцию или возвращает функцию.
// Callback - функция, которая передают как аргумент (она "перезванивает", когда нужно)

// В нашем примере: callTwice - функция высшего порядка, sayHi - callback.

// 2. forEach - выполнить действие для каждого элемента
// Замена цикла, когда нужно что-то сделать с каждым элементом (но нее создавать новый массив)

// Сравни:

const fruits = ["apple", "banana", "orange"];

// Старая школа:
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Современная:
fruits.forEach(function (fruit) {
  console.log(fruit);
});

// С arrow function (так пишут все):
fruits.forEach((fruit) => console.log(fruit));

// ForEach сам обходит массив и сам передает каждый элемент в твою функцию.

// Полная сигнатура callback:

fruits.forEach((fruit, index, array) => {
  console.log(index, fruit);
});

// fruit - текущий элемент
// index - его индекс(нужно редко)
// array - сам массив (нужен очень редко)
// В 95% случаев используешься только первый параметр.

// Что возвращает forEach?undefined. Это важно. forEach - для побочных эффектов (вывод в консоль, отправка в API). Если тебе нужно получить новый массив - это map

// 3. map - преобразовать каждый элемент
// возвращает новый массив той же длины, где каждый элемент - это результат твой функции для исходного элемента

const numbers = [1, 2, 3, 4];

const doubled = numbers.map((n) => n * 2);
console.log(doubled);
console.log(numbers);

//  Запомни сразу: map НЕ мутирует. Возвращает новый массив.

// Примеры из реальной работы:

// 1. Достать одно поле из массива объектов
const users = [
  { name: "Anna", age: 25 },
  { name: "Boris", age: 30 },
  { name: "Carol", age: 28 },
];
const names = users.map((user) => user.name);
// ['Anna', 'Boris', 'Carol']

// 2. Преобразование с шаблоном
const greetings = users.map((user) => `Hello, ${user.name}!`);

// 3. Создать новые объекты на основе старых.

const usersWithStatus = users.map((user) => ({
  ...user,
  isAdult: user.age >= 18,
}));

// (Кстати, ты уже использовал map вчера для тегов - tags.map(tag => '#' + tag). Это как раз он.)

// 4. filter - отобрать подходящие элементы
// возвращает новый массив с теми элементами, для которых callback вернул true.

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = numbers1.filter((n) => n % 2 === 0);
console.log(even);

const big = numbers1.filter((n) => n > 5);
console.log(big);

// Callback должен возвращать boolean (или truthy/falsy). Если true - элемент попадает в новый массив, если false - нет.
// Примеры:

const users2 = [
  { name: "Anna", age: 25 },
  { name: "Boris", age: 30 },
  { name: "Carol", age: 28 },
];
const adults = users2.filter((user) => user.age >= 18);

const users1 = [
  { name: "Anna", age: 25 },
  { name: "Boris", age: 30 },
  { name: "Carol", age: 28 },
];

const user = users1.find((u) => u.name === "Boris");
console.log(user);

const missing = users1.find((u) => u.name === "Frank");
console.log(missing);

// Когда использовать что:

// Метод          Возвращает                    Когда использовать
// filter         массив всех подходящих        "найди всех студентов"
// find     первый подходящий(или undefined)    "найди пользователя с id=5"
// find останавливает на первом совпадении - поэтому быстрее filter, если нужен только один

// 6. findIndex - найти индекс
// Как find, но возвращает индекс, а не сам элемент. Если не нашел - -1(как indexOf).

const idx = users.findIndex((u) => u.name === "Boris");
console.log(idx);

// indexOf работает только для примитивов (числа, строки). Для объектов нужен findIndex (потому что объекты сравниваются по ссылке, помнишь?).

// 7. Главная мысль дня: декларативность vs императивность

// Императивный код - "Как делать":

const result = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 5) {
    result.push(numbers[i] * 2);
  }
}

// Эти 6 строк, читая которые восстанавливаешь намерение.

// Декларативный код - "Что делать":
const result1 = numbers.filter((n) => n > 5).map((n) => n * 2);

// Это 1 строка, читающаяся как фраза: "взять числа, отфильтровать большие 5, удвоить каждое".
// Современный JS - декларативный. Это:
// Короче
// Читабельнее
// Меньше места для багов
// Цепочки методов позволяют делать многошаговые трансформации
