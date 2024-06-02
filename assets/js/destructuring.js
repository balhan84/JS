const user = { firstName: "Test", lastName: "Testov" };

// function renderUser(user) {

//   // const firstName = user.firstName;
//   // const lastName =user.lastName;

//   const { firstName, lastName } = user; //деструктуризація
//   document.write(`
//     <article>
//       <h2>${firstName} ${lastName}</h2>
//     </article>
//     `);
// }

// function renderUser({ firstName, lastName }) {
//   document.write(`
//       <article>
//         <h2>${firstName} ${lastName}</h2>
//       </article>
//       `);
// }

// function renderUser({ firstName = "Anon", lastName = "Anonim" }) {
//   document.write(`
//         <article>
//           <h2>${firstName} ${lastName}</h2>
//         </article>
//         `);
// }
// renderUser(user);

// function renderUser({ firstName: name = "Anon", lastName = "Anonim" }) {
//   document.write(`
//           <article>
//             <h2>${name} ${lastName}</h2>
//           </article>
//           `);
// }
// renderUser(user);

// Оголосити змінні, використовуючи деструктуризацію
// const book = { author: "Astred Lindgren", title: "Karlson" };

// function renderBook({ author, title }) {
//   document.write(`
//             <article>
//               <h2>${author} ${title}</h2>
//             </article>
//             `);
// }
// renderBook(book);
// const book = {
//   author: {
//     firstName: "Astred",
//     lastName: "Lindgren",
//   },
//   title: "Karlson",
// };
// console.log(book);

// const {                          // це спосіб оголошення змінних
//   author: { firstName, lastName },//витягуванням з обєкта
//   title,
// } = book;

// console.log("firstName", firstName);
// console.log("lasttName", lastName);
// console.log("title", title);

//arrays

// const arr = [1, 2, 3];
// // const [firstEl, secondEl, thirdEl] = arr;
// // console.log(firstEl);
// const [, , thirdEl] = arr;
// console.log(thirdEl);

const user1 = {
  name: "Test",
  age: 23,
  emails: ["test1@test.com", "test2@test.com"],
  isMale: true,
};

// const {
//   name: userName,
//   age: userAge,
//   emails: [email1, email2],
//   isMale,
// } = user1;

// console.log(userName, userAge, email1, email2, isMale);

// const attr = { id: "btn", style: "color:blue", title: "click me" };

// const { style, ...restAttr } = attr;
// console.log(style);
// console.log("restAttr", restAttr);

const { name, ...restUser } = user1;
console.log(name);
console.log(restUser);
