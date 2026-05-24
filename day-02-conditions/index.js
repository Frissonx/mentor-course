const age = 10;

if (age < 13) {
    console.log('Ребенок');
} else if (age < 18) {
    console.log('Подросток');
} else if (age < 60) {
    console.log('Взрослый');
} else {
    console.log('Пенсионер');
}

// Задание 2 

const num1 = 10;
const num2 = 0;
const operation = '/';

let result;

if (operation === '+') {
    result = num1 + num2;
} else if (operation === '-') {
    result = num1 - num2;
} else if (operation === '*') {
    result = num1 * num2;
} else if (operation === '/' && num2 === 0) {
    result = 'Делить на ноль нельзя';
} else if (operation === '/') {
    result = num1 / num2;
} else {
    result = 'Неизвестная операция';
}

console.log(`${num1} ${operation} ${num2} = ${result}`);


switch (operation) {
    case '+': {
        result = num1 + num2;
        break;
    }
    case '-': {
        result = num1 - num2;
        break;
    }
    case '*': {
        result = num1 * num2;
        break
    }
    case '/': {
        result = num2 === 0 ? 'Делить на ноль нельзя' : num1 / num2;
        break;
    } 
    default: {
        result = 'Неизвестная операция';
    }
        
}
console.log(`${num1} ${operation} ${num2} = ${result}`);

// Задание 3 

const score = 75;

//Было
let grade;
if (score >= 90) {
    grade = 'отлично';
} else {
    grade = 'не отлично';
}
console.log(grade);

const grade2 = score >= 90 ? 'отлично' : 'не отлично';
console.log(grade2);

const isWeekend = true

const plan = isWeekend ? 'выходной' : 'работаем';
console.log(plan);

// Задание 4

const number = 47;

if (number % 2 === 0) {
    console.log('четное');
} else {
    console.log('нечетное');
}

const number1 = number % 2 === 0 ? 'четное' : 'нечетное';
console.log(number1);


const fizzBuzz = 22;

if (fizzBuzz % 15 === 0) {
    console.log('FizzBuzz');
} else if (fizzBuzz % 3 === 0) {
    console.log('Fizz');
} else if (fizzBuzz % 5 === 0) {
    console.log('Buzz');
} else {
    console.log(fizzBuzz);
}

console.log(5 + '5');
console.log('5' - '5');
console.log('5' + 5 + 5);
console.log(5 + 5 +'5');