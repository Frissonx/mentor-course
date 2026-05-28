// Задание 1.
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

for (let j = 50; j >= 30; j--) {
    console.log(j);
}

for(let k = 0; k <= 30; k += 2) {
    console.log(k);
}

// Задание 2.
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// Задание 3.
const prices = [100, 250, 75, 480, 999, 50];
let summa = 0;


for (let i = 0; i < prices.length; i++) {
    console.log(`Товар #${i + 1}: ${prices[i]} руб`);
}

for (const price of prices) {
    summa += price;
}
console.log(summa);

if (prices.length > 0) {
    let max = prices[0];

    for (const price of prices) {
        if (price > max) {
            max = price;
    }
}
}

// Задание 4.
const number = 7;

for (let i = 1; i <= 10; i++) {
    let multi = number * i;
    console.log(`${number} * ${i} = ${multi} `);
}
console.log('---');

for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
        let multi = i * j;
        console.log(`${i} * ${j} = ${multi}`);
    }
    console.log('---');
}
// Задание 5.
const users = ['Anna', 'Boris', 'Carol', 'David', 'Elena', 'Frank'];
const search = 'David';
let found = false;
for (let i = 0; i < users.length; i++) {
    if(users[i] === search) {
        console.log(`Found at index ${i}`);
        found = true;
        break;
    }
}
if (!found) {
    console.log('Not found.');
}

// Задание 6.
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
}
// Задание 7.(опцианально)

for (let n = 2; n <= 150; n++) {
    let isPrime = true;
    const limit = Math.sqrt(n);
    for (let div = 2; div <= limit; div++) {
        if (n % div === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(n);
    }
}
