

let FriendlyDragon = require('./classes/friendly-dragon')
let EvilDragon = require('./classes/evil-dragon')

let falkor = new FriendlyDragon('Falkor','white', ["save Atreyu from the swamp", "save Atreyu from the Nothing","scare the local bullies into a dumpster"],'Bastian')
let smaug = new EvilDragon('Smaug', 'black',["take over your mountain kingdom", "steal all your dwarven gold",  "burn down your floating village"], "Dwarf King" )

let allDragons = FriendlyDragon.getDragons(falkor, smaug)
console.log(falkor);
falkor.hasLifeGoals();
console.log(falkor.breathesFire());
console.log(falkor.helpsPeople());
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports.falkor = falkor
  module.exports.smaug = smaug
  module.exports.allDragons = allDragons;
} catch {
  module.exports = null;
}
