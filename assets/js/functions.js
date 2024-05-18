// function sayHello() {
//   document.write(`<p>Hello user!</p>`);
// }

// sayHello();

// function sayHello(user, surname) {
//   document.write(`<p>Hello ${user} ${surname}!</p>`);
// }

// sayHello("Test", "Testov");
// sayHello("Test2", "Cup");
// sayHello("Test3");

// function sayHello(user, surname) {
//   return `Hello ${user} ${surname}!`;
// }

// const helloString = sayHello("Test", "Testov");
// console.log("helloString", helloString);
// document.write(`<p>${helloString}</p>`);

// function sum(firstNumber, secondNumber) {
//   return firstNumber + secondNumber;
// }

// // const result = sum(1, 2);
// // console.log(result);

// function inputNumber(summandNumber) {
//   let summand;
//   do {
//     summand = prompt(`Enter ${summandNumber} number`);
//   } while (!Number.isFinite(+summand) || summand === "");
//   return Number(summand);
// }

// const firstNumber = inputNumber(1);
// const secondNumber = inputNumber(2);

// const result = sum(firstNumber, secondNumber);
// console.log(result);

// const age = 16;

// const title1 = "jksdkjaskljdl";
// Змінні для заголовка новини
// const newsTitle1 = "Lorem ipsum dolor sit amet";
// const newsTitle2 = "Consectetur adipiscing elit";
// const newsTitle3 = "Sed do eiusmod tempor";

// Змінні для тіла новини
// const newsBody1 =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
// const newsBody2 =
//   "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
// const newsBody3 =
//   "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

// Змінні для дати новини
// const newsDate1 = new Date("2024-05-18");
// const newsDate2 = new Date("2024-05-17");
// const newsDate3 = new Date("2024-05-16");

// function news(newsTitle, newsBody, newsDate) {
//   const nowSpan =
//     newsDate.toLocaleDateString() === new Date().toLocaleDateString()
//       ? "<span class='todayNews' >New!</span>"
//       : "";

//   return `<article>
//     <h3>${newsTitle} ${nowSpan}</h3>
//     <p>${newsBody}</p>
//     <p>${newsDate.toDateString()}</p>
// </article>`;
// }

// if (age < 18) {
//   document.write(`alert`);
// }

// document.write(
//   news(newsTitle1, newsBody1, newsDate1),
//   news(newsTitle2, newsBody2, newsDate2),
//   news(newsTitle3, newsBody3, newsDate3)
// );

// pow(4);
// pow(4, 3);
/**
 * function pow
 * @param {number} a - power base
 * @param {number} [exp=2]  - power exp
 * @returns {number} Base a in power exp
 */
// function pow(a, exp = 2) {
//   return a ** exp;
// }
// console.log(pow(5, 3));

/**
 * @function userCard
 * @param {string} name - The name of the user
 * @param {string} [surname = Anonimus] - The surname of the user
 * @returns {string} Generating of the userCard
 */
// function userCard(name, surname = "Anonimus") {
//   const userCard = `<article>
//   <h2>${name} ${surname}</h2>
// </article>`;
//   return userCard;
//   return `<article>
//   <h2>${name} ${surname}</h2>
// </article>`;
// }

// document.write(userCard("Anna"));

// const userCard = function (name, surname = "Anonimus") {
//   return `<article>
// <h2>${name} ${surname}</h2>
//  </article>`;
// };
// document.write(userCard("Anna"));
