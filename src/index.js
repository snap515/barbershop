const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
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

  addPotion(newPotion) {
    const arrayNames = [];
    for (const potion of this.potions) {
      arrayNames.push(potion.name);
    }
    // console.log(arrayNames);
    if (arrayNames.includes(newPotion.name)) {
      console.log(
        `Error! Potion ${newPotion.name} is already in your inventory!`
      );
      console.log(this.potions);
      return;
    }
    this.potions.push(newPotion);
    console.log(this.potions);
    return;

    // for (const potion of this.potions) {
    //   if (potion.name === newPotion.name) {
    //     console.log(`Error! Potion ${newPotion} is already in your inventory!`);
    //   } else {
    //     this.potions.push(newPotion);
    //     console.log(this.potions);
    //     break;
    //   }
    // }
  },
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
};

atTheOldToad.addPotion({ name: 'Speed potion', price: 460 });
atTheOldToad.addPotion({ name: 'plotva', price: 460 });
atTheOldToad.addPotion({ name: 'Dragon breath', price: 780 });
// atTheOldToad.addPotion({ name: 'zelie', price: 460 });
// atTheOldToad.addPotion({ name: 'Dragon breath', price: 780 });
// atTheOldToad.addPotion({ name: 'Stone skin', price: 520 });
// atTheOldToad.addPotion({ name: 'plotva', price: 460 });
// atTheOldToad.addPotion({ name: 'zelie', price: 460 });
