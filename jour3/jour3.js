// 01 Array
// let fruits = ["mango", "lemon", "blueberry"];
// console.log(fruits);

// 02 Access
// let ingredients = ["eggs", "milk", "butter"];
// console.log(ingredients[1]);
// console.log(ingredients.indexOf("butter"));

// 03 Add and Remove
// let objects = ["pen", "book", "lamp"];
// console.log(objects);
// objects.unshift("chair");
// console.log(objects);
// objects.pop();
// console.log(objects);
// objects.push("laptop");
// console.log(objects);
// objects.shift();
// console.log(objects);

// 04 Order
// let numbers = [4, 10, 8, 12, 6];
// numbers.reverse();
// console.log(numbers);
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// 05 Boucle
// let total = 0,
//   limit = 10;
// for (let i = 0; i <= limit; i++) total += i;
// console.log(total);

// 06 Reverse
// let sentence = "Hello Konexio !",
//   reversedSentence = "";
// for (let i = sentence.length - 1; i >= 0; i--) {
//   reversedSentence = reversedSentence + sentence[i];
// }
// console.log(sentence, reversedSentence);

// Bonus I
// for (let i = 0; i <= 100; i++) {
//   if (i % 7 == 0) continue;
//   else if (i % 3 == 0 && i % 5 == 0) console.log("fizzbuzz");
//   else if (i % 3 == 0) console.log("fizz");
//   else if (i % 5 == 0) console.log("buzz");
//   else console.log(i);
// }

// Bonus II
// let i = 0,
//   total = 0,
//   limit = 10;
// while (i <= limit) {
//   total += i;
//   i++;
// }
// console.log(total);

// Bonus III
// let names = [
//   "François",
//   "çeline",
//   "Sophiane A",
//   "Fatoumata",
//   "M. Amir",
//   "Hussnain",
//   "Thishan",
//   "Alaxandre",
//   "Sophiane B",
//   "Ishran",
//   "Steve",
//   "Ibrahim",
// ];
// for (let i = 0; i < names.length - 1; i++)
//   console.log(names[parseInt(Math.random() * names.length)]);

// Bonus IV
// let array = [],
//   maxInt = 0;
// for (let i = 0; i <= 19; i++) {
//   array.push(parseInt(Math.random() * 100));
// }
// console.log(array);

// for (let i = 0; i < array.length; i++) {
//   let current = array[i];
//   if (current > maxInt) maxInt = current;
// }
// console.log(maxInt);
