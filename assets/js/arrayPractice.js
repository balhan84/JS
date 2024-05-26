// // forEach виконує колбек послідовно для всіх елементів масиву
// // filter => новий масив з елеметами, які задовольняють умові в колбеку
// // map => новий масив з елементами, які повернуті з колбеку для кожного елемента вихідного масиву
// // findIndex => індекс знайденого елемента (для якого з колбека повертається true,
// //              або -1, якщо його не знайдено (для кожного повернулося false))
// // every => true (виконується всім) / false
// // some => true (виконується хоча б для одного) / false

// // Phone: id, brand, model, makeYear, color, isNfc, price

// function Phone(id, brand, model, makeYear, color, isNfc, price) {
//   this.id = id;
//   this.brand = brand;
//   this.model = model;
//   this.makeYear = makeYear;
//   this.color = color;
//   this.isNfc = isNfc;
//   this.price = price;
// }

// const phones = [];
// const PHONES_COUNT = 10;

// for (let i = 0; i < PHONES_COUNT; i++) {
//   const phone = new Phone(
//     i + 1,
//     Math.random() > 0.5 ? "Samsung" : "IPhone",
//     `Series ${Math.trunc(Math.random() * 20)}`,
//     2015 + Math.trunc(Math.random() * 10),
//     Math.random() > 0.5 ? "white" : "black",
//     Math.random() > 0.5,
//     5000 + Math.trunc(Math.random() * 7000)
//   );

//   phones.push(phone);
// }

// console.table(phones);

// // filter
// const somePhones = phones.filter(isGreater8000);
// function isGreater8000(p) {
//   return p.price > 8000;
// }

// console.log(somePhones);

// const phones2018 = phones.filter((phone) => phone.makeYear === 2018);
// console.log(phones2018);

// phones.forEach((phone) => {
//   document.write(`${phone.brand}, ${phone.model}, ${phone.makeYear} <br><br>`);
// });

// const foundId = phones.findIndex((phone) => phone.id === 10);
// console.log("foundId", foundId);
// phones.splice(foundId, 1);
// console.log("phones", phones);

// const discountPrice = phones.map((phone) => ({
//   ...phone,
//   price: phone.price * 0.95,
// }));
// console.log("discountPrice", discountPrice);

// phones
//   .filter((phone) => phone.isNfc)
//   .forEach((phone) => console.log(`${phone.brand}, ${phone.model}`));

// const appleSince2016 = phones.filter(
//   (phone) => phone.brand === "IPhone" && phone.makeYear >= 2016
// );
// console.log(appleSince2016);

// const isGoldPhone = phones.some((phone) => phone.color === "gold");
// console.log("isGoldPhone", isGoldPhone);

// const phoneSince2013 = phones.every((phone) => phone.makeYear > 2013);
// console.log("phoneSince2013", phoneSince2013);

// const appleWhiteWithNfs = phones
//   .filter((phone) => phone.brand === "IPhone" && phone.color === "white")
//   .every((phone) => phone.isNfc);
// console.log("appleWhiteWithNfs", appleWhiteWithNfs);
