function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('Alex'));

const greet2 = name => `Hello, ${name}!`;
console.log(greet2('Maksim'));

const greet3 = function(name) {
    return `Hello, ${name}!`;
}
console.log(greet3('Maks'));

const square = n => n * n;
console.log(square(5));
console.log(square(6));

function square1(n) {
    return n * n;
}
console.log(square1(3));

const square3 = function(n) {
    return n * n;
}
console.log(square3(9));

const isAdult = age => age>= 18;
console.log(isAdult(25));

function isAdult1(age) {
    return age >= 18;
}
console.log(isAdult1(10));

const isAdult2 = function(age) {
    return age >= 18;
}
console.log(isAdult2(65));

// Задание 2.
 function calculate(num1, num2, operator) {
     switch (operator) {
         case '+': {
              return num1 + num2;
         }
         case '-': {
              return num1 - num2;

         }
         case '*': {
             return num1 * num2;
         }
         case '/': {
             if (num2 === 0) {
                 return 'Делить на ноль нельзя!';
             }
             return num1 / num2;
         }
         default: {
             return 'Неизвестная операция';
         }
     }
 }
 console.log(calculate(10, 5, '+'));
console.log(calculate(10, 5, '-'));
console.log(calculate(10, 5, '*'));
console.log(calculate(10, 5, '/'));
console.log(calculate(10, 0, '/'));
console.log(calculate(10, 5, '%'));

// Задание 3.
const nums = [10, 5, 8, 20, 3];

function sum(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

function max(array) {
    let maximum = array[0];
    for (const item of array) {
        if (item > maximum) {
            maximum = item;
        }
    }
    return maximum;
}

function average(array) {
    if (array.length === 0) return 0;
    return sum(array) / array.length;
}
console.log(sum(nums));
console.log(max(nums));
console.log(average([1, 2, 3]));
console.log(average(nums));
console.log(average([10, 20, 30, 40]));
console.log(average([]));

// Задание 4.

function greetUser(name, greeting = 'Hello') {
    if (!name) {
        return 'Anonymous user';
    }
        return `${greeting}, ${name}!`;
}
console.log(greetUser(''));
console.log(greetUser('John'));
console.log(greetUser('Jane', 'Привет'));
console.log(greetUser());


// Задание 5.
let total = 0;
function addToTotal(value) {
    total += value;
    return total;
}
function addToTotal2 (current, value) {
    current += value;
    return current;
}
console.log(addToTotal2(10, 5));
console.log(addToTotal2(100, 50));

// Задание 6.

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 2; i <= 50; i++) {
    if(isPrime(i)) {
        console.log(i);
    }
}