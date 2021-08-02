// 01 Countries

// const countriesNames = [];
// const request = require("request");

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

const request = require("request");
function catchPokemon(num) {
  request.get(
    `https://pokeapi.co/api/v2/berry/${num}/`,
    function (err, res, body) {
      if (err) console.log(err);
      JSON.parse(body);
      console.log(body[num].endpoint);
    }
  );
}
catchPokemon(1);
