// 02 Map Double
// let array = [1, 2, 3, 4, 5];
// let double = array.map((arr) => arr * 2);
// console.log(double);

// 03 Map Names
// let longNames = [
//   {
//     firstName: "Jane",
//     lastName: "Doe",
//   },
//   {
//     firstName: "John",
//     lastName: "Smith",
//   },
// ];
// let shortNames = longNames.map(function (object) {
//   return { name: object.firstName + " " + object.lastName };
// });

// console.log(shortNames);

// // 04 Filter Numbers
// let array = [1, "toto", 34, "javascript", 8];
// let numbers = array.filter((arr) => typeof arr == "number");
// console.log(numbers);

// 05 Filter Even
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let even = numbers.filter((num) => num % 2 == 0);
// console.log(even);

// 06 Cakes
// let cakes = [
//   {
//     name: "cake",
//     flavor: "vanilla",
//     status: "available",
//   },
//   {
//     name: "brownie",
//     flavor: "chocolate",
//     status: "available",
//   },
//   {
//     name: "pie",
//     flavor: "strawberry",
//     status: "available",
//   },
//   {
//     name: "muffin",
//     flavor: "pistachio",
//     status: "available",
//   },
//   {
//     name: "donut",
//     flavor: "chocolate",
//     status: "available",
//   },
// ];
// let chocolateCakes = cakes
//   .filter((arr) => arr.flavor === "chocolate")
//   .map(function (arr) {
//     arr.status = "sold out!";
//     return arr;
//   });

// console.log(chocolateCakes);
