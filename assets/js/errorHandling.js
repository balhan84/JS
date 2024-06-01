// console.log("before error:>>");
// try {
//   const a = 4 + b;
// } catch (err) {
//   document.write(`<p>Sorry</p>`);
// }

// console.log("after error:>>");
// document.write("<h1>My page</h1>");

// throw new Error();
// function f(n) {
//   if (typeof n !== "number") {
//     throw new Error("n must be number");
//   }
//   return n * n;
// }
// console.log("f(5) :>>", f(5));

// try {
//   console.log("f(5) :>>", f("5"));
// } catch (err) {
//   console.log("err:>>", err);
// }
// console.log("after error:>>");
// function fact(n) {
//   if (typeof n !== "number") {
//     throw new TypeError("n must be number");
//   }
//   if (!Number.isInteger(n) || n < 0 || n > Number.MAX_SAFE_INTEGER) {
//     throw new RangeError("n must be nonnegative integer value");
//   }

//   function factorial(m) {
//     if (m === 0) {
//       return 1;
//     }
//     return m * factorial(m - 1);
//   }
//   return factorial(n);
// }

// try {
//   const f = fact(5);
//   console.log(f);
// } catch (err) {
//   console.log("error:>>", err);
// }

// function validateName(userName) {
//   userName = userName.trim();

//   if (typeof userName !== "string") {
//     throw new TypeError("userName must be string");
//   }
//   if (userName.length < 4 || userName.length > 32) {
//     throw new RangeError("userName must be from 4 to 32 length");
//   }
//   return userName;
// }

// try {
//   console.log(validateName("444"));
// } catch (err) {
//   console.log("error:>>", err);
// }

// function validateAge(age) {
//   if (typeof age !== "number") {
//     throw new TypeError("age must be number");
//   }
//   if (!Number.isInteger(age) || age < 0 || age > 100) {
//     throw new RangeError("age must be from 0 to 100");
//   }
//   return age;
// }
// try {
//   console.log(validateAge("15"));
// } catch (err) {
//   if (err instanceof RangeError) {
//     console.log("RangeError");
//   } else if (err instanceof TypeError) {
//     console.log("TypeError");
//   } else {
//     console.log("Error");
//   }
//   console.log("error:>>", err);
// }
