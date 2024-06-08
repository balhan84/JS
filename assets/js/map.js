"use strict";

// Map

// Колекція по ключу, яка може як ключ містити будь-який тип

// Властивості/методи:
// size
// set(key, value) => map
// get(key) => value
// has(key) => boolean
// delete(key) => boolean
// clear()

// const map1 = new Map();
// console.log(map1);

// map1.name ="Test"
// map1.set("name", "Test");
// map1.set("surname", "Testov");
// map1.set("age", 20).set("email", "qwerty@com");
// console.log(map1);

// const map2 = new Map([
//   ["age", 30],
//   ["isMale", true],
// ]);

// console.log(map1.get("age"));
// console.log(map1.size);
// map2.delete("isMale");
// console.log(map2);
// console.log(map1.has("age1"));

// 3 parameters currentValue key map
//forEach
// function callback(currentValue, key) {
//   console.log(currentValue);
//   console.log(key);
//   console.log(`map1[${key}] = ${currentValue}`);
// }

// map1.forEach(callback);

//change something
// map1.set("age", 25);
// console.log(map1);

// const phoneBook = new Map([
//   ["+3809936925814", "Test Testov"],
//   ["+3809925874133", "Black Sea"],
// ]);

// console.log(phoneBook.has("+380981234567"));

//for..of
// for (const prop of phoneBook) {
//   console.log("prop", prop);
// }

// console.log([...phoneBook.keys()]); //масив ключів
// console.log([...phoneBook.values()]); //масив значень
// console.log([...phoneBook.entries()]); //масив входів

// const phoneBookCopy = phoneBook; // not do this
// const phoneBookCopy1 = new Map(phoneBook)
// const phoneBookCopy1 = new Map([...phoneBook.entries()]);

// Example: перекладач. Словник міститься в мапі
// const vocabulary = new Map();
// vocabulary.set("dog", "собака");
// vocabulary.set("cat", "кіт");
// vocabulary.set("run", "бігти");

// const engPhrase = "dog run white cat";

// function translatePhrase(engPhrase) {
//   //get array words
//   const engWords = engPhrase.split(" ");
//   //розбили масив за пробілом за допомогою split
//   console.log(engWords);
//   //translate words if words are in dictionary
//   const ukrWords = engWords.map((word) => {
//     if (vocabulary.has(word)) {
//       return vocabulary.get(word);
//     }
//     return word;
//   });
//   console.log(ukrWords);
//   //create line with ukr words
//   const ukrPhrase = ukrWords.join(" ");
//   return ukrPhrase;
// }

// const ukrPhrase = translatePhrase(engPhrase);
// console.log(ukrPhrase);

// // function translatePhrase(engPhrase) {
// //     return engPhrase
// //     .split(" ");
// //     .map(word => (vocabulary.has(word) ? vocabulary.get(word) : word))
// //     .join(" ");
// //   }

// function translatePhrase(engPhrase) {
//   return engPhrase
//     .split(" ")
//     .map((w) => (vocabulary.has(w) ? vocabulary.get(w) : w))
//     .join(" ");
// }
// const ukrPhrase = translatePhrase(engPhrase);
// console.log(ukrPhrase);

// const user = { firstName: "Test", lastName: "Testov" };

// const usersMessages = new Map();
// usersMessages.set(user, [
//   { id: 1, body: "example1" },
//   { id: 2, body: "example2" },
// ]);
// // console.log(usersMessages.get(user));
// //practice
// const usersWithMessages2 = [
//   { id: 1, name: "Test1", message: "hello", date: new Date() },
//   { id: 1, name: "Test1", message: "how are you", date: new Date() },
//   { id: 2, name: "Test2", message: "hi)", date: new Date() },
//   { id: 2, name: "Test2", message: "fine)", date: new Date() },
// ];

//get array of original users

// const users = [];
// usersWithMessages2.forEach((um) => {
//   if (!users.find((user) => user.id === um.id)) {
//     users.push({ id: um.id, name: um.name });
//   }
// });
// console.log("users:>>", users);
//

// const onlyMessage = usersWithMessages2.map((um) => ({
//   message: um.message,
//   date: um.date,
// }));
// console.log(onlyMessage);

// const userToMessage = new Map();

// users.forEach((user) => {
//   userToMessage.set(
//     user,
//     usersWithMessages2
//       .filter((userWithMessages) => userWithMessages.id === user.id)
//       .map((userWithMessages) => ({
//         message: userWithMessages.message,
//         date: userWithMessages.date,
//       }))
//   );
// });
// console.log(userToMessage);
