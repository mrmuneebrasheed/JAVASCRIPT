let prompt = require("prompt");
prompt.start();

// 01 Calculator
// prompt.get(["num1", "num2", "operator"], function (err, res) {
//   if (err) console.log("error");
//   calculate(res.num1, res.num2, res.operator);
// });
// function calculate(number1, number2, operator) {
//   if (operator === "+") {
//     return `${number1} + ${number2} = ${number1 + number2}`;
//   } else if (operator === "-") {
//     return number1 - number2;
//   } else if (operator === "x") {
//     return number1 * number2;
//   } else if (operator === "/") {
//     return number1 / number2;
//   } else if (operator === "%") {
//     return number1 % number2;
//   } else {
//     console.log(`${operator} is not managed by our calculator`);
//   }
// }

// 02 Table
// function multiply(num) {
//   for (let i = 1; i <= 10; i++) console.log(`${num} x ${i} = ${num * i}`);
// }
// prompt.get(["num"], function (err, res) {
//   if (err) console.log(err);
//   //   console.log(res.num);
//   multiply(res.num);
// });

// 03 Separate Table

// let { multiply, addition } = require("./table-utils.js");

// multiply(5);
// addition(5);

// 04 Guess
// let mysteryNum = Math.floor(Math.random() * 100 + 1);
// function play(num) {
//   //   if (typeof num != "Number") console.log("Error, this is not a number");
//   if (num > mysteryNum) console.log("C'est Moins");
//   else if (num < mysteryNum) console.log("C'est Plus");
//   else if (num == mysteryNum) console.log("Bravo! Correct Number");
// }
// prompt.get(["num"], function (err, res) {
//   if (err) console.log(err);
//   play(res.num);
// });
