const firstName = 'Alexander';
const lastName = 'Garavyy';
const age = 29;
const city = 'St-Pitersburg';
const isLearningProgramming = true;


const favoriteLanguages = ["JavaScript", "Python"];


const goals = {
    becomeJunior: true,
    months: 6,
    hoursPerDay: 5
};

const currentYear = 2026;
let birthYear = currentYear - age;

const skillsToLearn = ['Javascript', 'English', 'Инженерное мышление','Дисциплина','Сила воли'];

const templateString = `Я родился в ${currentYear} и хочу выучить и освоить ${skillsToLearn.length } технологий`;

console.log("Привет! Меня зовут", firstName, lastName);
console.log("Мне", age, "лет, я из города", city);
console.log("Учу программирование?", isLearningProgramming);
console.log("Любимые языки:", favoriteLanguages);
console.log("Мои цели:", goals);

console.log(`Через ${goals.months} месяцев я стану junior!`);
console.log(templateString);
console.log(`Я родился в ${birthYear} году!`);