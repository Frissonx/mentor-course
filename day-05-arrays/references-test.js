// Тест 1: примитивы сравниваются по значению
const a = 5;
const b = 5;
console.log("Тест 1:", a === b); // true

// Тест 2: массивы сравниваются по ссылке
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log("Тест 2:", arr1 === arr2); // false

// Тест 3: одна и та же ссылка
const arr3 = arr1;
console.log("Тест 3:", arr1 === arr3); // true

// Тест 4: мутация через одну ссылку видна через другую
arr3.push(4);
console.log("Тест 4 (arr1):", arr1); // [1, 2, 3, 4]

// Тест 5: sort возвращает ту же ссылку
const original = [3, 1, 2];
const sorted = original.sort();
console.log("Тест 5:", original === sorted); // true

// Тест 6: slice создаёт новую ссылку
const original2 = [3, 1, 2];
const sortedCopy = original2.slice().sort();
console.log("Тест 6 (original2):", original2); // [3, 1, 2]
console.log("Тест 6 (sortedCopy):", sortedCopy); // [1, 2, 3]
console.log("Тест 6 (равны?):", original2 === sortedCopy); // false
