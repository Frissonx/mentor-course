const input = document.querySelector('#name-input'); //  Получаем первый совпавший элемент
const greeting = document.querySelector('#greeting');//  Получаем первый совпавший элемент
const defaultName = greeting.textContent; // Создали переменную в которое взяли значение с нашего html документа, что бы не хардкодить , а при необходимости меня только в html
const form = document.querySelector('#my-form');//  Получаем первый совпавший элемент
const taskInput = document.querySelector('#task-input')//  Получаем первый совпавший элемент

form.addEventListener('submit', (event) => {	// подписываюсь на отправку формы: браузер вызовет эту функцию при submit и передаст в event информацию о событии 
	event.preventDefault(); // отменяем стандартное поведение , в нашем случае отменяем обновление странички
 	console.log(`Добавлена задача: ${taskInput.value}`); // Пишим в кансоль какую задачу добавили
 	taskInput.value = ''; // Очищаем поле задачи, Потому что мы значению в нашем поле присваиваем пустоту.

});

input.addEventListener('input', () => {  // обрабатываем действие ввода текста 
	greeting.textContent = input.value || defaultName;  // присваевыем значение введенное либо дефолтный текс 
});
