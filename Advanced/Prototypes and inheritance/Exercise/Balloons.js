function solve() {

    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    };

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this._ribbon = {

                color: ribbonColor,
                length: ribbonLength,
            };
        }

        get ribbon() {

            return this._ribbon;
        }
    };

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }

        get text() {
            return this._text;
        }
    };

    return {

        Balloon,
        PartyBalloon,
        BirthdayBalloon
    };
}

let func = solve();

let balloon = new func.Balloon('red', 10);
let partyBalloon = new func.PartyBalloon('white', 3, 'green', 2);
let birthdayBallon = new func.BirthdayBalloon('black', 15, 'yellow', 7, 'Birthday balloon');

console.log(balloon);
console.log(partyBalloon);
console.log(birthdayBallon);