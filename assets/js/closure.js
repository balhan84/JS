//замикання
// const a = "global";

// function f1() {
//   const a = "local";

//   function f2() {
//     console.log("a :>> ", a);
//   }

//   f2();
// }
// f1();

//реалізувати лічильник використовуючи замикання
//0 1 2 3 4 5 6
// function counter() {
//   let count = 0;

//   function increased() {
//     return count++;
//   }
//   return increased;
// }
// const count1 = counter();
// console.log(count1());
// console.log(count1());
