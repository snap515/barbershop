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

console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));
console.log(findOutlier([2, 6, 8, 10, 3]));
console.log(findOutlier([0, 0, 3, 0, 0]));
console.log(findOutlier([1, 1, 0, 1, 1]));
console.log(findOutlier([3, 4, 2]));
