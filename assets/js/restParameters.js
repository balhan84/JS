// function sum(...argsOfSum) {
//   let sum = 0;
//   for (const element of argsOfSum) {
//     sum += element;
//   }
//   return sum;
// }

// const a = sum(1, 2, 5);

// function f(firstEl, ...restParams) {
//   console.log(firstEl);
//   console.log(restParams);
// }
// const b = f(1, 2, 5);

// function accum(sign, ...numbers) {
//   if (sign === "+") {
//     let sum = 0;
//     for (const el of numbers) {
//       sum += el;
//     }
//     return sum;
//   } else if (sign === "*") {
//     let mult = 0;
//     for (const el of numbers) {
//       mult *= el;
//     }
//     return mult;
//   } else {
//     return "Unknown sign";
//   }
// }

// const numbers = ("+", 1, 2, 8);
// accum("+", 1, 2, 8, 10);
// accum("*", 1, 2, 8);
// accum("*", 1, 2, 8, 10);

// console.log("accum", accum());
