function solve() {

    const prototype = {

        health: 100
    };

    return {

        mage: (name) => {

            let obj = Object.create(prototype);

            obj.name = name;
            obj.mana = 100;
            obj.cast = (spell) => {

                obj.mana -= 1;
                console.log(`${name} cast ${spell}`);
            }

            return obj;
        },

        fighter: (name) => {

            let obj = Object.create(prototype);

            obj.name = name;
            obj.stamina = 100;
            obj.fight = () => {

                obj.stamina -= 1;
                console.log(`${name} slashes at the foe!`);
            }

            return obj;
        }
    };
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);

