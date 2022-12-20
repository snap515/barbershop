// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//----------------------------------------------------------первый способ "добавить зелье"
// addPotion(newPotion) {
//   for (const potion of this.potions) {
//     if (newPotion.name === potion.name) {
//       console.log(
//         `Error! Potion ${newPotion.name} is already in your inventory!`
//       );
//       return;
//     }
//     this.potions.push(newPotion);
//     console.log(this.potions);
//   }

//--------------------------------------------------------второй способ "добавить зелье"
// addPotion(newPotion) {
//   const arrayNames = [];
//   for (const potion of this.potions) {
//     arrayNames.push(potion.name);
//   }
//   if (arrayNames.includes(newPotion.name)) {
//     console.log(
//       `Error! Potion ${newPotion.name} is already in your inventory!`
//     );
//     console.log(this.potions);
//     return;
//   }
//   this.potions.push(newPotion);
//   console.log(this.potions);
//   return;

// },

//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };

// atTheOldToad.addPotion({ name: 'Speed potion', price: 460 });
// atTheOldToad.addPotion({ name: 'plotva', price: 460 });
// atTheOldToad.addPotion({ name: 'Dragon breath', price: 780 });
// atTheOldToad.addPotion({ name: 'zelie', price: 460 });
// atTheOldToad.addPotion({ name: 'Dragon breath', price: 780 });
// atTheOldToad.addPotion({ name: 'Stone skin', price: 520 });
// atTheOldToad.addPotion({ name: 'plotva', price: 460 });
// atTheOldToad.addPotion({ name: 'zelie', price: 460 });

// ------------------------------Callback функции---------------------------------------

// const fnA = function (message, callback) {
//   console.log(message);
//   console.log(callback);
// };

// const fnB = function () {
//   console.log('это лог вызова функции B');
// };

// fnA('hello my friend', fnB);

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// };

// const add = function (x, y) {
//   return x + y;
// };

// doMath(2, 14, add);

// // Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest('Манго', greet);

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return makePizza();
//     }
//     return onOrderError();
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// const onSuccess = function makePizza(pizzaName) {
//   console.log(`Your order is accepted. Cooking pizza ${pizzaName}.`);
// };

// // Callback for onError
// const onError = function onOrderError(error) {
//   console.log(`Error! ${error}`);
// };

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// const changeEven = (numbers, value) => {
//   return numbers.map(number => (number % 2 === 0 ? number + value : number));
// };

// function changeEven(numbers, value) {
//   // Change code below this line
//   let evenNumbers = [];
//   numbers.forEach(number => {
//     number % 2 === 0
//       ? evenNumbers.push(number + value)
//       : evenNumbers.push(number);
//   });
//   console.log(numbers);
//   console.log(evenNumbers);
//   return evenNumbers;
//   // Change code above this line
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// changeEven([44, 13, 81, 92, 36, 54], 100);

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);
// console.log(titles);

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);
// console.log(genres);

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getUserNames = users => {
//   const userNames = users.map(user => user.name);
//   console.log(userNames);
//   return userNames;
// };

// getUserNames(users);

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index
// );

// console.log(allGenres);
// console.log(uniqueGenres);

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39,
  },
];

// const getFriends = users => {
//   const allFriends = users.flatMap(user => user.friends);
//   console.log(allFriends);
//   const filterFriends = allFriends.filter(
//     (friend, index, array) => array.indexOf(friend) === index
//   );
//   console.log(filterFriends);
//   return filterFriends;
// };

// getFriends(users);

// const getActiveUsers = users => {
//   const activeUsers = users.filter(user => user.isActive);
//   console.table(activeUsers);
//   return activeUsers;
// };

// getActiveUsers(users);

// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line
// const totalAveragePlaytimePerGame = players.reduce((totalTime, player) => {
//   return totalTime + player.playtime / player.gamesPlayed;
// }, 0);
// console.log(totalAveragePlaytimePerGame);

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((prevAuthor, nextAuthor) => prevAuthor.localeCompare(nextAuthor));
// console.log(names);

// const getSortedFriends = users => {
//   const sortFriends = users
//     .map(user => user.name)
//     .filter((name, index, array) => array.indexOf(name) === index)
//     .sort((prevName, nextName) => prevName.localeCompare(nextName));
//   console.log(sortFriends);
//   return sortFriends;
// };

// getSortedFriends(users);

//4 модуль 48 из 48
const getTotalBalanceByGender = (users, gender) => {
  const filterByGender = users.filter(user => user.gender === gender);
  console.log(`отфильтровано по ${gender} полу:`, filterByGender);
  const totalBalance = filterByGender.reduce(
    (totalBalance, user) => totalBalance + user.balance,
    0
  );
  console.log(`общий баланс у ${gender} = `, totalBalance);
};

getTotalBalanceByGender(users, 'male');
getTotalBalanceByGender(users, 'female');
