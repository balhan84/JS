// const arr = new Array(1, 2, 3);
// console.log("arr:>>", arr);

// const users = [
//   { id: 2, name: "Test", age: 20 },
//   { id: 3, name: "Ivo", age: 23 },
// ];
// console.log(users[0]);
// console.log(users.length);

// const months = [
//   { id: 3, name: "March" },
//   { id: 4, name: "April" },
//   { id: 5, name: "May" },
// ];
// console.log("months:>>", months);

// copy
// const month1 = Array.from(months);
// const months2 = [...months];
// read list
// for (let i = 0; i < months.length; i++) {
//   console.log(months[i]);
// }

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }

// for (let i = 0; i < users.length; i++) {
//   document.write(`
//   <article>
//   <h2>${users[i].name}</h2>
//   <p>Age:${users[i].age}</p>
// </article>
//     `);
// }
// document.write(`<ul>`);
// for (let i = 0; i < months.length; i++) {
//   document.write(`
//   <li>${months[i].name}</li>
//     `);
// }
// document.write(`</ul>`);

// const numbers = [11, 40, -8, 20, 55];
// function arraySum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     console.log("i:>>", i);
//     console.log("arr[i]:>>", arr[i]);
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(arraySum(numbers));

// const users = [
//   { id: 2, name: "Test", age: 20 },
//   { id: 3, name: "Ivo", age: 23 },
// ];

// function ageAver(arr) {
//   let average = 0;
//   for (let i = 0; i < arr.length; i++) {
//     average += arr[i].age;
//   }
//   return average / arr.length;
// }

// console.log(ageAver(users));

// const numbers = [1, 3, 4, 6, 8];
// for (const index in numbers) {
//   console.log(index, ">>", numbers[index]);
// }

// for (const element of numbers) {
//   console.log(element);
// }

// const months = ["March", "April", "May"];
// document.write(`<ul>`);
// for (const element of months) {
//   document.write(`
//       <li>${element}</li>
//        `);
// }
// document.write(`</ul>`);

// months.push("June");
// console.log(months);

//pop, push
//shift and unshift try not use

// const numElements = +prompt("Введіть кількість елементів масиву:");

// const inputArr = [];
// for (let i = 0; i < numElements; i++) {
//   const carName = prompt(`Введіть назву машини ${i + 1}:`);
//   inputArr.push(carName);
// }

// console.log("Заповнений масив назв машин:", inputArr);

// const lastEl = inputArr.pop();
// console.log(lastEl);
// console.log(inputArr);

// const months = ["March", "April", "May"];
// const monthsCopy = months.slice();

// const monthsPart = months.slice(0, 2);
// console.log("monthsPart", monthsPart);

// const months = ["january", "february", "March", "April", "May"];
// console.log("months", months);
// const deleteMonth = months.splice(0, 2);
// console.log("months", months);

// const a = [1, 2, 3, 4];
// const b = [7, 8, 9];

// const c = a.concat(b);
// const deleteMonth2 = months.splite(11).concat(months.splice(0, 2));

// const d = [...a, ...b];
// const deleteMonth3 = [...months.splice(11), ...months.splice(0, 2)];

// const messages = [
//   {
//     id: 1,
//     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     createdAt: "2024-05-01",
//   },
//   {
//     id: 2,
//     body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     createdAt: "2024-05-02",
//   },
//   {
//     id: 3,
//     body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     createdAt: "2024-05-03",
//   },
//   {
//     id: 4,
//     body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     createdAt: "2024-05-04",
//   },
//   {
//     id: 5,
//     body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
//     createdAt: "2024-05-05",
//   },
//   {
//     id: 6,
//     body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
//     createdAt: "2024-05-06",
//   },
// ];

// const newMessages = [
//   {
//     id: 7,
//     body: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius.",
//     createdAt: "2024-05-07",
//   },
//   {
//     id: 8,
//     body: "Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
//     createdAt: "2024-05-08",
//   },
//   {
//     id: 9,
//     body: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.",
//     createdAt: "2024-05-09",
//   },
// ];
// function findIndexById(array, id) {
//   // let index = 0;
//   for (const index in array) {
//     if (array[index].id === id) {
//       return index;
//     }
//   }
// }
// const allMessages = messages.concat(newMessages);
// console.table(allMessages);
// // const allMessages1 = [...messages, ...newMessages]
// const deleteMessagIndex = findIndexById(allMessages, 5);
// allMessages.splice(deleteMessagIndex, 1);
// console.table(allMessages);
