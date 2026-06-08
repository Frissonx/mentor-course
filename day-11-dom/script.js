//1. Найди заголовок(#title) и поменяй его текст на 'DOM работает!'
const title = document.querySelector("#title");
title.textContent = "Dom Работает!";
// 2. Найди заголовок и сделай его цвет синим (blue) через .style.color
title.style.color = "blue";
// 3. Найди кнопку (#btn) и повест на нее addEventListener на 'click',
//    что бы при клике в консоль выводилось 'Клик!'
let count = 0;
const counter = document.querySelector("#counter");

const button = document.querySelector("#btn");
button.addEventListener("click", () => {
  count++;
  render();
});
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  count = 0;
  render();
});
function render() {
  counter.textContent = `Нажатий: ${count}`;
}
