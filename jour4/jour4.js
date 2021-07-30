// 01 Object
// let cat = {
//   name: "Garfield",
//   age: 3,
//   isCute: true,
// };
// console.log(cat);
// console.log(cat.age);
// if (cat.isCute) console.log("So Cute!");

// 02 Combine
// let cat = {
//   name: "Garfield",
//   age: 3,
//   isCute: true,
// };
// let cat2 = {
//   name: "Tom",
//   age: 5,
//   isCute: false,
// };
// let cats = [cat, cat2];
// console.log(cats[0].age, cats[1].isCute);

// 03 Even
// let checkIfEven = function (num) {
//   if (num % 2 == 0) console.log(`${num} est pair`);
//   else console.log(`${num} est impair`);
// };
// checkIfEven(102);

// 04 Compare
// let compare = function (num1, num2) {
//   if (num1 > num2) console.log(`${num1} is bigger than ${num2}`);
//   else if (num1 < num2) console.log(`${num2} is bigger than ${num1}`);
//   else if (num1 === num2) console.log("Both numbers are same");
// };
// compare(400, 400);

// 05 Add up
//
// let addUp = function (num) {
//   let sum = 0;
//   for (let i = 0; i <= num; i++) sum += i;
//   return sum;
// };
// console.log(addUp(200));

// 06 Time
// let format = function (seconds) {
//   let hours = parseInt(seconds / 3600);
//   seconds = seconds % 3600;
//   let minutes = parseInt(seconds / 60);
//   seconds = seconds % 60;
//   console.log(`${hours}:${minutes}:${seconds}`);
// };
// format(3601);

// Bonus Generate password
// let generatePassword = function (num) {
//   let password = "";
//   if (num > 15 || num < 6) {
//     console.log("Error");
//     return;
//   }
//   for (let i = 0; i < num; i++) {
//     password =
//       password +
//       String.fromCharCode(parseInt(Math.random() * (90 - 65 + 1) + 65));
//   }
//   console.log(password);
// };
// generatePassword(14);

// Bonus II
// let launchDice = function (numberOfDice) {
//   let sum = 0;
//   for (let i = 0; i <= numberOfDice; i++) sum += parseInt(Math.random() * 7);
//   return sum;
// };
// let joeur1 = launchDice(5),
//   joeur2 = launchDice(5);
// console.log(joeur1, joeur2);
// joeur1 > joeur2
//   ? console.log(`Joueur1 wins with score ${joeur1}`)
//   : console.log(`Joueur2 wins with score ${joeur2}`);
