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

const doMath = function (a, b, callback) {
  const result = callback(a, b);
  console.log(result);
};

const add = function (x, y) {
  return x + y;
};

doMath(2, 14, add);
