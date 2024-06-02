"use strict";

//1 неможливість викор неогол змінні
//генер помилки які не в суворому режимі
//ігноруються
//вимикає спадкування глобального контексту
//в несувором реж this в функції window
//в суворому - undefined
// const a = 10;

// const b = 10;

// b.name = "test";

//var
a = 5;
console.log("a", a);

var a = 10; // підняття змінних hoisting- використання
console.log("a", a); //до оголошення

// function f() {
//     //local scope
//   var a = 100;
//   console.log("a", a);
// }
// f();
//немає блокової області видимості
if (true) {
  var a = 100;
  console.log("a", a);
}
