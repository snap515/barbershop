// ---------------------------------------------- CODEWARS JS FOR BEGINNERS  2 --------------------------------------------------------
// не моё решение

// function findOutlier(integers) {
//   const [p0, p1, p2] = integers.slice(0, 3).map(n => n & 1);
//   return p0 === p1
//     ? integers.find(n => (n & 1) !== p0)
//     : integers[+(p0 === p2)];
// }

// через сумму четных и нечетных чисел и сравнения их

// function findOutlier(integers) {
//   let even = 0;
//   let notEven = 0;
//   integers.forEach(integer =>
//     integer % 2 === 0 ? (even += 1) : (notEven += 1)
//   );
//   return even > notEven
//     ? integers.filter(integer => integer % 2 !== 0).join('')
//     : integers.filter(integer => integer % 2 === 0).join('');
// }

// REDUCE через сумму четных и нечетных чисел и сравнения их (не доделал)

// function findOutlier(integers) {
//   let evenTotal = integers.reduce(integer);
//   return evenTotal > notEvenTotal
//     ? integers.filter(integer => integer % 2 !== 0).join('')
//     : integers.filter(integer => integer % 2 === 0).join('');
// }

// через длину массива четных и нечетных чисел

// function findOutlier(integers) {
//   let even = integers.filter(integer => integer % 2 === 0);
//   let notEven = integers.filter(integer => integer % 2 !== 0);
//   // console.log(even);
//   // console.log(notEven);
//   return even.length < notEven.length ? even.join('') : notEven.join('');
// }

// через длину массива четных и нечетных чисел и тернатрный оператор

// function findOutlier(integers) {
//   return integers.filter(integer => integer % 2 === 0).length === 1
//     ? integers.filter(integer => integer % 2 === 0).join('')
//     : integers.filter(integer => integer % 2 !== 0).join('');
// }

// console.log(findOutlier([1, 0, 1]));
// console.log(findOutlier([1, 2, 3]));
// console.log(findOutlier([2, 6, 8, 10, 3]));
// console.log(findOutlier([0, 0, 3, 0, 0]));
// console.log(findOutlier([1, 1, 0, 1, 1]));
// console.log(findOutlier([3, 4, 2]));

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

//The output should be two capital letters with a dot separating them.

//It should look like this:

//Sam Harris => S.H

//patrick feeney => P.F

// function abbrevName(name) {
//   let fullName = name.split('');
//   let firstLetter = fullName[0] + '.';
//   let secondLetter;
//   for (let i = 0; i < fullName.length; i += 1) {
//     if (fullName[i] === ' ') {
//       secondLetter = fullName[i + 1];
//     }
//   }
//   let abbrev = firstLetter + secondLetter;
//   console.log(name, ':', abbrev);
//   return abbrev;
// }

// function abbrevName(name) {
//   console.log(
//     name.split('')[0].toUpperCase() +
//       '.' +
//       name.split('')[name.indexOf(' ') + 1].toUpperCase()
//   );
//   return (
//     name.split('')[0].toUpperCase() +
//     '.' +
//     name.split('')[name.indexOf(' ') + 1].toUpperCase()
//   );
// }

// abbrevName('Tom holand');
// abbrevName('sam harris');
// abbrevName('Patrick Feenan');
// abbrevName('Evan Cole');
// abbrevName('P Favuzzi');

//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

//Note: input will never be an empty string

// function fakeBin(x) {
//   let array = x.split('');
//   console.log(array);
//   let newArray = array.map(number => {
//     if (number < 5) {
//       return 0;
//     }
//     return 1;
//   });
//   console.log(newArray.join(''));
//   return newArray.join('');
// }

// function fakeBin(x) {
//   console.log(
//     x
//       .split('')
//       .map(number => (number < 5 ? 0 : 1))
//       .join('')
//   );
//   return x
//     .split('')
//     .map(number => (number > 5 ? 0 : 1))
//     .join('');
// }

// fakeBin('45385593107843568');
// fakeBin('6162636261626362');

//You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

//Considering these factors, write a function that tells you if it is possible to get to the pump or not.

//Function should return true if it is possible and false if not.

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   console.log(distanceToPump <= mpg * fuelLeft);
//   return distanceToPump <= mpg * fuelLeft ? true : false;
// };

// zeroFuel(50, 25, 2);

//Build a function that returns an array of integers from n to 1 where n>0.

//Example : n=5 --> [5,4,3,2,1]

// const reverseSeq = n => {
//   const array = [];
//   for (let i = 1; i <= n; i += 1) {
//     array.push(i);
//   }
//   return array.reverse();
// };

// reverseSeq(7);

//Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

//For example: ["3:1", "2:2", "0:1", ...]

//Points are awarded for each match as follows:

//if x > y: 3 points (win)
//if x < y: 0 points (loss)
//if x = y: 1 point (tie)
//We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

//Notes:

//our team always plays 10 matches in the championship
//0 <= x <= 4
//0 <= y <= 4

// function points(games) {
//   let ourTeam = 0;
//   games.forEach(game => {
//     if (game[0] > game[2]) {
//       ourTeam += 3;
//     } else if (game[0] === game[2]) {
//       ourTeam += 1;
//     }
//   });
//   console.log(ourTeam);
//   return ourTeam;
// }

// points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']);

// class Car {
//   // Change code below this line
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

// const Audi = new Car({ brand: 'audi', model: 'q8', price: 123456 });

// console.log(Audi);

// 5 модуль 10 задача
// class Storage {
//   constructor(items = {}) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     return this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     this.items.splice(this.items.indexOf(itemToRemove), 1);
//   }
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// 5 модуль 11 задача

// class StringBuilder {
//   constructor(initialValue = {}) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }

//   padStart(str) {
//     this.value = str + this.value;
//   }

//   padEnd(str) {
//     this.value += str;
//   }
//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

// // Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// const toJadenCase = function (message) {
//   let words = message.split(' ');
//   let newArray = [];
//   console.log(words);
//   for (let word of words) {
//     newArray.push(word[0].toUpperCase);
//   }
//   console.log(newArray);
//   return newArray;
// };
// let mess = 'hello this is me mario';
// toJadenCase(mess);

// function getLength(arr) {
//   //return length of arr
//   console.log(arr.length);
//   return arr.length;
// }
// function getFirst(arr) {
//   //return the first element of arr
//   console.log(arr[0]);
//   return arr[0];
// }
// function getLast(arr) {
//   //return the last element of arr
//   console.log(arr[arr.length - 1]);
//   return arr[arr.length - 1];
// }

// function pushElement(arr) {
//   const el = 1;
//   arr.push(el);
//   console.log(arr);
//   return arr;
// }
// function popElement(arr) {
//   //pop an element from arr
//   console.log(arr.pop());
//   return arr.pop();
// }

// pushElement([1, 2, 3]);

// function animal(obj) {
//   const { name, legs, color } = obj;
//   return `This ${color} ${name} has ${legs} legs.`;
// }

// console.log(animal({ name: 'dog', legs: 4, color: 'white' }));
// animal({ name: 'dog', legs: 4, color: 'white' });

//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// function createPhoneNumber(numbers) {
//   let numbStr = numbers.join('');
//   return (
//     '(' +
//     numbStr[0] +
//     numbStr[1] +
//     numbStr[2] +
//     ')' +
//     ' ' +
//     numbStr[3] +
//     numbStr[4] +
//     numbStr[5] +
//     '-' +
//     numbStr[6] +
//     numbStr[7] +
//     numbStr[8] +
//     numbStr[9]
//   );
// }

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// function countSmileys(arr) {
//   let counter = 0;
//   arr.forEach(element => {
//     if (
//       (element.includes(':') || element.includes(';')) &&
//       (element.includes('D') || element.includes(')'))
//     ) {
//       counter += 1;
//     }
//   });

//   console.log(counter);
// }

// countSmileys([';)', ':D', ';(', ';D']);

function pickIt(arr) {
  var odd = [],
    even = [];
  //coding here
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  console.log(even);
  console.log(odd);
  return [odd, even];
}

pickIt([1, 2, 3, 4, 5]);
