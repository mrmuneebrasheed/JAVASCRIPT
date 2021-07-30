// 01 Countries

const prompt = require("prompt");
prompt.start();
const request = require("request");

// request.get("https://restcountries.eu/rest/v1/all", function (err, res, body) {
//   if (err) console.log(err);
//   const countriesData = JSON.parse(body);
//   //   console.log(countriesData.length);
//   for (let i = 0; i < countriesData.length; i++)
//     countriesNames.push(countriesData[i].name);
//   console.log(countriesNames);
// });

// 02 Chuck Norris

// const request = require("request");
// function getFact() {
//   request.get(
//     "https://api.chucknorris.io/jokes/random",
//     function (err, res, body) {
//       if (err) console.log(err);
//       const blague = JSON.parse(body);
//       console.log(blague.value);
//     }
//   );
// }
// getFact();

// 03 Pokemon

// const request = require("request");
// function catchPokemon(num) {
//   request.get(
//     `https://pokeapi.co/api/v2/pokemon/${num}`,
//     function (err, res, body) {
//       if (err) console.log(err);
//       const data = JSON.parse(body);
//       const pokemonName = data.forms[0].name;
//       console.log(`My pokemon at id:${num}, name is ${pokemonName}`);
//     }
//   );
// }
// catchPokemon(25);

// Jouer Black Jack

// let min = 16,
//   max = 21,
//   bankCards = Math.floor(Math.random() * (max - min + 1) + min),
//   playerCards = 0;
// function play() {
//   prompt.get(["choice"], function (error, result) {
//     if (result.choice === "draw") {
//       let min = 1,
//         max = 10;
//       playerCards += Math.floor(Math.random() * (max - min + 1) + min);
//       console.log(`Your card worth ${playerCards} is drawn`);
//     }
//   });
// }
// play();

function reverseDigits(n) {
  n = String(n);
  let array = n.split("");
  array = array.reverse();
  return array;
}
console.log(reverseDigits(2345));
