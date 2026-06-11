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


function render() {
	list.innerHTML = tasks.map(task => `<li>${task}</li>`).join('');
}

form.addEventListener("submit", (event) => {
	event.preventDefault();
	if(!taskInput.value) return;
	tasks.push(taskInput.value);
	taskInput.value = '';
	render();

})
