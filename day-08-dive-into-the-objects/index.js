const user = { name: "Anna", age: 25, city: "Moscow", salary: 80000 };

// 1. Через деструктуризацию достань name  и city  в отдельные переменные, выведи их.
const { name, city } = user;
console.log(name, city);
// 2. Напиши функцию describe, которая принимает объект user
function describe({ name, age }) {
  return `${name}, возраст ${age}`;
}
console.log(describe(user));

// 3. Получи массив всех имен (ключей объекта).
const salaries = { Anna: 80000, Boris: 45000, Carol: 120000, David: 60000 };
const keysSalaries = Object.keys(salaries);
console.log(keysSalaries);
// 4. Получи сумму всех зарплат
const total = Object.values(salaries).reduce((acc, sum) => acc + sum, 0);
console.log(total);
// 5. Сколько человек получает больше 50000?
const count = Object.values(salaries).filter((num) => num > 50000).length;
console.log(count);

const product = { name: "Laptop", price: 50000, inStock: true };

// 1. Сделай копию product через spread, в копии измени price на 45000.
//    Выведи оба объекта — убедись, что оригинал НЕ изменился.
const copyProduct = { ...product };
copyProduct.price = 45000;
console.log(product);
console.log(copyProduct);

const prices = { bread: 50, milk: 80, cheese: 300 };

// 2. Через Object.entries и forEach выведи каждую строку вида "bread стоит 50"
//    (деструктурируй пару [name, price] прямо в параметре коллбека)
Object.entries(prices).forEach(([key, value]) => {
  console.log(`${key} стоит ${value}`);
});

// 3. Через Object.entries + filter + map получи массив названий товаров дороже 70.
//    Подсказка: entries даёт пары [name, price]; фильтруй по цене, map в название.
//    Ожидаешь: ['milk', 'cheese']
const newPrices = Object.entries(prices)
  .filter(([name, price]) => price > 70)
  .map(([name]) => name);
console.log(newPrices);
