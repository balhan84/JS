// let currentStep = 1;
// const STEPS_COUNT = 4;

// while (currentStep <= STEPS_COUNT) {
//   console.log(currentStep);
//   console.log("Пройти прямо");
//   console.log("Повернути на 90 град наліво");
//   currentStep++;
// }
// console.log("Next line");

// let currentPage = 10;
// const pageCount = 20;

// while (currentPage <= pageCount) {
//   console.log(currentPage);
//   currentPage++;
// }

// let currentPage = 10;
// const pageCount = 20;

// while (currentPage <= pageCount) {
//   console.log("Current page:", currentPage);
//   currentPage += 2;
// }

// let currentPage = Number(prompt("Input start page"));
// const endPage = Number(prompt("Input end page"));

// while (currentPage <= endPage) {
//   if (currentPage % 2 === 0) {
//     console.log(currentPage);
//   }
//   currentPage += 1;
// }

// let inputNumber = Number(prompt("Input number"));

// while (!Number.isFinite(inputNumber)) {
//   inputNumber = Number(prompt("Input number"));
// }
// console.log(`${inputNumber} ** 2 = ${inputNumber ** 2}`);

// let inputNumber = null;

// do {
//   inputNumber = Number(prompt("Input number"));
// } while (!Number.isFinite(inputNumber));
// console.log(`${inputNumber} ** 2 = ${inputNumber ** 2}`);

// let currentNumber = 50;
// const endNumber = 40;

// do {
//   console.log(currentNumber);
//   currentNumber--;
// } while (endNumber <= currentNumber);

// const RIGHT_PASSWORD = "qwerty";
// const TRY_LIMIT = 3;
// let isPasswordCorrect = false;

// let currentTry = 1;

// do {
//   let inputPassword = prompt("Input password");
//   if (inputPassword === RIGHT_PASSWORD) {
//     console.log("Password is correct");
//     break;
//   }
// } while (++currentTry <= TRY_LIMIT);

// if (!isPasswordCorrect) {
//   console.log("Password is wrong");
// }

// do {
//   isPasswordCorrect = prompt("Input password") === RIGHT_PASSWORD;
// } while (++currentTry <= TRY_LIMIT && !isPasswordCorrect);

// console.log(`Password is ${isPasswordCorrect ? "correct" : "wrong"}`);

// startPage = 1;
// stopPage = 10;
// step = 1;
// debugger;
// for (let startPage = 1; startPage <= stopPage; startPage++) {
//   console.log(startPage);
// }

// startPage = 101;
// stopPage = 91;
// step = 1;

// const stopPage = 91;

// for (let startPage = 101; startPage >= stopPage; startPage -= 2) {
//   console.log(startPage);
// }

// const startNumber = 5;
// const endNumber = 12;
// let sum = 1;

// for (let i = startNumber; i <= endNumber; i++) {
//   if (i % 2 === 0) {
//     sum *= i;
//   }

//   console.log(sum);
// }
const currentDate = new Date("2024-04-05");

const startDate = currentDate.getDate();

const monthNumber = currentDate.getMonth();
// console.log("MonthNumber:>>", monthNumber);

const currentYear = new Date().getFullYear();
const nextMonth = monthNumber + 1;
const lastMonthDate = new Date(currentYear, nextMonth, 0);
const endDate = lastMonthDate.getDate();

document.write("<table><thead><tr>");
for (let date = startDate; date <= endDate; date++) {
  document.write(`<th>${date}</th>`);
}
document.write("</tr></thead></table>");
