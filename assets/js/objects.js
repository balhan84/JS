// const newsTitle1 = "Lorem ipsum dolor sit amet";
// const newsBody1 =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
// const newsDate1 = new Date("2024-05-18");

// const news = {
//   newsTitle1: "Lorem ipsum dolor sit amet",
//   newsBody1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   newsDate1: new Date("2024-05-18"),
// };
// console.log("news", news);
// // alert(news);

// //read
// console.log(news.newsTitle1); //звернення до властивості
// news.newsDate1 = new Date("2024-05-19"); //зміна
// console.log("news", news);

// news.author = "Test Testov"; //додати
// console.log("news", news);

// //delete
// delete news.newsDate1;
// console.log("news", news);

// const brand = "Ford";
// const model = "Kuga";
// const year = 2024;
// const color = "red";

// const car = {
//   brand: "Ford",
//   model: "Kuga",
//   year: 2024,
//   color: "red",
//   owner: {
//     firstname: "Anna",
//     lastname: "Bal",
//   },
// };

// console.log("car", car);

// console.log(car.brand);

// car.number = 1478;
// console.log("car", car);

// car.color = "black";
// console.log("car", car);

// delete car.year;
// console.log("car", car);

// document.write(`<h2>${car.brand}, ${car.model}</h2>`);
// document.write(`<p>${car.owner.firstname} ${car.owner.lastname}</p>`);

// const carCopy1 = Object.assign({}, car);
// console.log("carCopy1 === car", carCopy1 === car);

// const carCopy2 = { ...car };
// console.log("carCopy2 === car", carCopy2 === car);

// function getFullName() {
//   return `${this.firstName} ${this.lastName} `;
// }

// const user = {
//   firstName: "Test",
//   lastName: "Testov",
//   password: "qwerty",
//   age: 23,
//   //   getFullName: function () {
//   //     return `${user.firstName} ${user.lastName} `;
//   //   },
//   getFullName() {
//     return `${this.firstName} ${this.lastName} `;
//   },
//   //   getFullName: getFullName,
//   changePassw(newPassword) {
//     this.password = newPassword;
//   },
// };

// const user1 = {
//   firstName: "Test1",
//   lastName: "Testov1",
//   password: "qwerty1",
//   age: 26,
//   //   getFullName: function () {
//   //     return `${user.firstName} ${user.lastName} `;
//   //   },
//   getFullName: getFullName,
// };

// console.log(user.getFullName());
// // console.log(user1.getFullName());
// user.changePassw(prompt("new password"));
// console.log("user", user);

// document.write(`<h2>${user.getFullName()}</h2>`);

// const car = {
//   brand: "Ford",
//   model: "Kuga",
//   year: 2014,
//   color: "red",
//   owner: {
//     firstname: "Anna",
//     lastname: "Bal",
//   },
//   changeColor(newColor) {
//     this.color = newColor;
//   },
//   getAge() {
//     return new Date().getFullYear() - this.year;
//   },
// };

// car.changeColor(prompt("new color"));
// console.log(car.getAge());
// console.dir(car);
// console.dir(car.getAge());
// console.dir(new Date());

// for (const key in car) {
//   console.log("key", key, car[key]);
// }

// const propName = "color";
// console.log("color:", car[propName]);

// const cat = {};

// for (let i = 0; i < 3; i++) {
//   let key = prompt("Enter the key");
//   let value = prompt("Enter the value");
//   cat[key] = value;
// }

// function User(name, surname, userAge, userEmail, isMale) {
//   // const  this = {};
//   this.firstName = name;
//   this.lastName = surname;
//   this.age = userAge;
//   this.email = userEmail;
//   this.isMale = isMale;
//   this.changeEmail = function (newEmail) {
//     this.email = newEmail;
//   };
// return this;
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName} `;
// };
// User.prototype.changeEmail = function (newEmail) {
//   this.email = newEmail;
// };

// const user1 = new User("Test", "Testov", 25, "mail@gmail.com", true);
// // const user2 = new User("Test1", "Testov1", 30, "mail123@gmail.com", true);

// console.log("user1:>>", user1);
// console.log(user1.getFullName());

// user1.changeEmail("newemail@gmail.com");
// console.log("user1:>>", user1);

// function Cat(name, age, color) {
//   this.catName = name;
//   this.catAge = age;
//   this.catColor = color;
// }

// const cat = new Cat("Mur", 3, "red");
// console.log("cat:>>", cat);
