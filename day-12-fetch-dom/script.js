// 1. Напиши async-функцию loadUsers, которая:
//    -fetch 'https://jsonplaceholder.typicode.com/users' (массив пользователей)
//    -await .json()
//    -возьми контейнер #list
//    -через .map(user => `<li>...<li>`).join('') построй список ИМЕН (user.name)
//    -и вставь в контейнер через .innerHTML
//    - оберни в try/catch
//
// 2. Повесь loadUsers на клик кнопки #load (addEventListener)
//    Открой страницу, нажми кнопку - на странице появятся имена с сервера!

const container = document.querySelector("#list");
const load = document.querySelector("#load");

async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    container.innerHTML = data.map((user) => `<li>${user.name}</li>`).join("");
  } catch (error) {
    console.log("Пользователей нет:", error);
  }
}

load.addEventListener("click", loadUsers);
