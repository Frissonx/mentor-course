// 1. Состояние: let task = []
// 2. Найди форму, поле, список (один раз, снарпужи)
// 3. function render() - нарисовать task в #task-list:
// 	  map каждой задачи в `<li>...</li>`, join, innerHTML
// 4. Обработчик submit на форме:
// 	  - preventDefault
//    - если поле пустое - ничего не делать (просто return)
//    - добавить текст их поля в массив tasks (впомни .push из ранних дней)
// 	  - очистить поле
//    - вызвать render()

"use strict";
let tasks = [];
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const list = document.querySelector("#task-list");
const count = document.querySelector("#counter");

// function render() {
// 	list.innerHTML = tasks.map(task => `<li>${task}</li>`).join('');
// }

function render() {
  list.innerHTML = "";
  count.textContent = `Количество задач: ${tasks.length}`; // Очистили список
  tasks.forEach((task, index) => {
    const li = document.createElement("li"); // Созадли пустой <li>
    li.textContent = task; // Положили текст как текст
    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      render();
    });
    li.append(delBtn);
    list.append(li);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!taskInput.value) return;
  tasks.push(taskInput.value);
  taskInput.value = "";
  render();
});
