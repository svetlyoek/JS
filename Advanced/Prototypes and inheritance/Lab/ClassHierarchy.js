function solve() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        changeUnits(newUnits) {

            this.units = newUnits;
        };

        convertUnits(value) {

            return this.units === 'mm' ?
                value * 10 : this.units === 'm' ?
                    value / 100 : value;
        };

        get area() {
            throw new Error('Not implemented!');
        }

        toString() {

            return `Figures units: ${this.units} Area: ${this.area} - `;
        };
    };

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this.radius = radius;
        }

        get area() {

            const convertedRadius = this.convertUnits(this.radius);
            return Math.PI * convertedRadius * convertedRadius;
        }

        toString() {
            const convertedRadius = this.convertUnits(this.radius);
            return super.toString() + `radius: ${convertedRadius}`;
        }
    };

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
        }

        get area() {

            const convertedWidth = this.convertUnits(this.width);
            const convertedHeight = this.convertUnits(this.height);
            return convertedWidth * convertedHeight;
        }

        toString() {
            const convertedWidth = this.convertUnits(this.width);
            const convertedHeight = this.convertUnits(this.height);
            return super.toString() + `width: ${convertedWidth}, height: ${convertedHeight}`;
        }

    };

    return {
        Figure,
        Circle,
        Rectangle,
    };

}
let func = solve();
let c = new func.Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new func.Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50



