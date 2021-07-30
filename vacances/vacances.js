// 01 Alphabet
// let reverseString = "";
// function sortLetters(string) {
//   string = string.toLowerCase();
//   for (let i = 97; i <= 122; i++) {
//     for (let j = 0; j < string.length; j++) {
//       //   console.log(String.charCodeAt(i));
//       //   console.log(string[j]);
//       if (i == string.charCodeAt(j))
//         reverseString = reverseString + string.charAt(j);
//     }
//   }
//   console.log(reverseString);
// }
// sortLetters("Konexio");

// 02 XOXO

// function countEach(string) {
//   let xCount = 0,
//     oCount = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string.charAt(i) == "x") xCount++;
//     if (string.charAt(i) == "o") oCount++;
//   }
//   if (xCount == oCount) return true;
//   else return false;
// }
// console.log(countEach("xooxx"));
