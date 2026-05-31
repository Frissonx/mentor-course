// function repeat(action, times) {
//   for (let i = 1; i <= times; i++) {
//     action();
//   }
// }
//
// // проверка:
// repeat(function () {
//   console.log("Работаю!");
// }, 3);

function processNumber(num, callback) {
  return callback(num);
}
//
// console.log(
//   processNumber(10, function (n) {
//     return n * 2;
//   }),
// );
// console.log(
//   processNumber(10, function (n) {
//     return n * n;
//   }),
// );
// console.log(
//   processNumber(10, function (n) {
//     return n + 100;
//   }),
// );

console.log(processNumber(10, (n) => n * 2));
console.log(processNumber(10, (n) => n * n));
console.log(processNumber(10, (n) => n + 100));
