// 02 Table
function multiply(num) {
  for (let i = 1; i <= 10; i++) console.log(`${num} x ${i} = ${num * i}`);
}
// prompt.get(["num"], function (err, res) {
//   if (err) console.log(err);
//   //   console.log(res.num);
//   multiply(res.num);
// });

function addition(num) {
  for (let i = 1; i <= 10; i++) console.log(`${num} + ${i} = ${num + i}`);
}
// prompt.get(["num"], function (err, res) {
//   if (err) console.log(err);
//   //   console.log(res.num);
//   multiply(res.num)
// });

module.exports = {
  multiply,
  addition,
};
