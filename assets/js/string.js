// const str = "I am Anna.";

// console.log(str[0]);
// console.log(str[5]);
// console.log(str.length);

// str[9] = "!";

// const newStr = str.slice(0, 9) + "!";
// console.log(newStr);
// "I am Anna".toLocaleUpperCase();
// "I am Anna".toLocaleLowerCase();
// "I am Anna".startsWith("I");
// "I am Anna".endsWith(".");
// console.log(
//   str.toLocaleUpperCase(),
//   str.toLocaleLowerCase(),
//   str.startsWith("I"),
//   str.endsWith("!")
// );

// function getInitials(name) {
//   const initialsArray = name.split(" ");
//   const initialsString = initialsArray[0][0] + initialsArray[1][0];
//   //   console.log(initialsString);
//   const initialsInUpperCase = initialsString.toUpperCase();
//   return initialsInUpperCase;
// }

// function getInitials(name) {
//   const initialsArray = name.split(" ");
//   return (initialsArray[0][0] + initialsArray[1][0]).toUpperCase();
// }

// function getInitials(name) {
//   return name
//     .split(" ")
//     .map((word) => word[0].toUpperCase())
//     .join("");
// }
// console.log(getInitials("ivo Smith"));

//change in string all bad words 'fuck' into ***

let messages = [
  {
    id: 1,
    body: "Lorem ipsum  fuck dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    createdAt: "2024-05-01",
  },
  {
    id: 2,
    body: "Ut enim ad minim veniam, quis nostrud fuck exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdAt: "2024-05-02",
  },
  {
    id: 3,
    body: "Duis aute irure dolor in reprehenderit fuck in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    createdAt: "2024-05-03",
  },
];

const newMes = messages[0].body.replaceAll("fuck", "***");

const gentelMessages = messages.map((m) => ({
  ...m,
  body: m.body.replaceAll("fuck", "***"),
}));
