// // 1. Перед запуском напиши, в каком порядке выведется (1,2,3 или иначе), но потом проверь:
// console.log("A");
// setTimeout(() => console.log("B"), 1000); // 1,3,2
// console.log("C");
//
// // 2. Предскажи порядок, потом запусти:
// console.log("старт");
// setTimeout(() => console.log("таймер 0мс"), 0);
// console.log("финиш");
// // я думаю будет старт, финиш, таймер0мс
//
// // 3. Напиши setTimeout, который через 1.5 секунды выведет: 'Прошло 1,5 секунды'
// setTimeout(() => console.log("Прошло 1,5 секунды"), 1500);

// Промис создается так: new Promise((resolve, reject) => { ... })
// resolve(значение)- вызываешь, когда успех (переводит в fulfilled)
// reject(ошибка) - вызываешь, когда провал (переводит в rejected)

// Пример - даю готовый, изучи и запусти:
// const coffeePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Кофе готов!");
//   }, 2000);
// });
//
// coffeePromise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// 1. Создай промис `orderPizza`, который через 1.5 секунды resolve'ит строку 'Пицца готова'.
// Повесь .then, который выведет результат.
// const orderPizza = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Пицца готова!");
//   }, 1500);
// });
//
// orderPizza
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
//
// const unstableServer = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random() > 0.5) resolve("Успех");
//     else reject("Ошибка сервера");
//   }, 1000);
// });
//
// unstableServer
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve("Данные получены");
      } else {
        reject("Сервер недоступен");
      }
    }, 1000);
  });
}
async function loadData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
loadData();

function orderPizza() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Пицца готова!");
      } else {
        reject("Пицца сгорела!");
      }
    }, 1500);
  });
}
async function getPizza() {
  try {
    const result = await orderPizza();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
getPizza();
