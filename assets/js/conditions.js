// if -умовний оператор,розгалуження

//if (condition) {
//true
// } else {
//false
//}

// const isOnline = true;

// if (isOnline) {
//   document.write(`<p>User is online</p>`);
// } else {
//   document.write(`<p>User is offline</p>`);
// }

// const isEnoughMoney = false;

// if (isEnoughMoney) {
//   document.write(`<p>Операцію схвалено</p>`);
// } else {
//   document.write(`<p>Операцію відхилено</p>`);
// }

// const isOnline = true;

// let color = null;
// if (isOnline) {
//   color = `green`;
//   status = "online";
// } else {
//   color = `red`;
//   status = "offline";
// }

// console.log(color);

// if (isOnline) {
//   document.write(`<p>User is <span style="color:${color}">online</span></p>`);
// } else {
//   document.write(`<p>User is <span style="color:${color}">offline</span></p>`);
// }

// document.write(`<p>User is <span style="color:${color}">${status}</p>`);

// const isOnline = false;
// const color = isOnline ? "green" : "red";

// const status = isOnline ? "online" : "offline";
// console.log("status :>>", status);
// document.write(`<p>User is <span style="color:${color}">${status}</p>`);

// > < >= <= порівняння
// const age = 18;
// console.log("isAdult", age >= 18);
// const isAdult = age >= 18;

// if (age >= 18) {
//   document.write(`<p>У вас повний доступ</p>`);
// } else {
//   document.write(`<p>У вас обмежений доступ</p>`);
// }

// const RIGHT_NUMBER = 2;
// const guessNumber = +prompt("Вкажіть число");

// if (RIGHT_NUMBER == guessNumber) {
//   document.write(`<p>Ви вгадали число</p>`);
// } else {
//   document.write(`<p>Ви не вгадали число</p>`);
// }

// const isRightNumber = RIGHT_NUMBER === guessNumber;
// document.write(`<p>Ви ${isRightNumber ? "" : "не "}вгадали число</p>`);

// const firstNumber = +prompt("number1");
// const secondNumber = +prompt("number2");
// const symbol = prompt("operator");

// if (symbol === "+") {
//   document.write(firstNumber + secondNumber);
// } else {
//   document.write(firstNumber - secondNumber);
// }

// const isResult = symbol === "+";
// document.write(
//   `<p>${isResult ? firstNumber + secondNumber : firstNumber - secondNumber}</p>`
// );

// const firstNumber = +prompt("number1");
// const secondNumber = +prompt("number2");
// const sign = prompt("operator");

// if (sign === "+") {
//   console.log(firstNumber + secondNumber);
// } else if (sign === "*") {
//   console.log(firstNumber * secondNumber);
// } else if (sign === "-") {
//   console.log(firstNumber - secondNumber);
// } else {
//   console.log("Error");
// }

// const age = 16;
// if (age < 18) {
//   alert("У вас обмежений доступ до послугу порталу");
// }

// document.write(`<p>Вітаємо на порталі</p>`);

// const isMale = false;
// const isMarried = false;
// const name = "Test";

// if (isMale) {
//   document.write(`<p>Hello Mr ${name}</p>`);
// } else if (!isMale && isMarried) {
//   document.write(`<p>Hello Mrs ${name}</p>`);
// } else {
//   document.write(`<p>Hello Ms ${name}</p>`);
// }

// let appeal = "";

// if (isMale) {
//   appeal = "Mr";
// } else if (isMarried) {
//   appeal = "Mrs";
// } else {
//   appeal = "Ms";
// }

// document.write(`<p>Hello ${appeal} ${name}</p>`);

// const price = 800;
// const age = 20;
// const discount = 0;

// if (age < 18 || age >= 65) {
//   discount = 100;
// }

// const resultPrice = price - discount;
// document.write(`<p>${resultPrice}</p>`);

// const day = "friday";
// const date = 13;

// if (day === "friday" && date === 13) {
//   document.write(`<p>Вітаємо у Вас знижка 10%</p>`);
// }

let value = 0;

if (value !== undefined && value !== null) {
  console.log("Correct");
}

if (value) {
  console.log("Correct");
}
