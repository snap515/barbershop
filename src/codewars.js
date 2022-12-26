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

function points(games) {
  let ourTeam = 0;
  games.forEach(game => {
    if (game[0] > game[2]) {
      ourTeam += 3;
    } else if (game[0] === game[2]) {
      ourTeam += 1;
    }
  });
  console.log(ourTeam);
  return ourTeam;
}

points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']);
