function solve(arguments) {

    const prototype = {
        area() {
            return this.height * this.width;
        },
        compareTo(otherRec) {

            const currentArea = this.area();
            const otherArea = otherRec.area();
            return otherArea - currentArea;
        }
    };

    function createRec(width, heigth) {

        const rectangle = Object.create(prototype);

        rectangle.width = width;
        rectangle.height = heigth;

        return rectangle;
    }

    return arguments.reduce(function (acc, [width, heigth]) {
        return acc.concat(createRec(width, heigth));
    }, []).sort((a, b) => b.width - a.width).sort((a, b) => a.compareTo(b));

}

console.log(solve([[10, 5], [5, 12]]));
console.log(solve([[10, 5], [3, 20], [5, 12]]));