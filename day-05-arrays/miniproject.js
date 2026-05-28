// Корзина пустая на старте
const cart = [];

function addItem(item) {
  // добавляет item  в конец cart
  cart.push(item);
  // Выводит Added: [item]
  console.log(`Added: ${item}`);
}

function removeItem(item) {
  // Находит item  в cart через indexOf
  const numberOfIndex = cart.indexOf(item);
  // Если есть удаляет через splice
  // Выводит "Removed: [item]"  или "Item not found: [item]"
  if (numberOfIndex === -1) {
    console.log(`Item not found: ${item}`);
    return;
  }

  cart.splice(numberOfIndex, 1);
  console.log(`Removed: ${item}`);
}

function hasItem(item) {
  // Возвращает true/false  через includes
  return cart.includes(item);
}

function getCartSize() {
  return cart.length;
}

function showCart() {
  // Выводит "Cart: item1, item2, item3" через join
  // если пусто - "Cart is empty"
  if (cart.length === 0) {
    console.log("Cart is empty");
    return;
  }
  console.log(`Cart: ${cart.join(", ")}`);
}

// Тесты — должно работать так:
addItem("Bread"); // Added: Bread
addItem("Milk"); // Added: Milk
addItem("Eggs"); // Added: Eggs
showCart(); // Cart: Bread, Milk, Eggs
console.log(hasItem("Milk")); // true
console.log(getCartSize()); // 3
removeItem("Milk"); // Removed: Milk
removeItem("Cheese"); // Item not found: Cheese
showCart(); // Cart: Bread, Eggs
console.log(getCartSize()); // 2
