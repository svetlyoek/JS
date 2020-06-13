(function solution() {

    return {

        add: (firstVector, secondVector) => {

            let x1 = firstVector[0];
            let y1 = firstVector[1];

            let x2 = secondVector[0];
            let y2 = secondVector[1];

            return [(x1 + x2), (y1 + y2)];
        },

        multiply: (vector, scalar) => {

            let x = vector[0];
            let y = vector[1];

            return [(x * scalar), (y * scalar)];

        },

        length(vector) {

            let x = vector[0];
            let y = vector[1];

            return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        },

        dot(firstVector, secondVector) {

            let x1 = firstVector[0];
            let y1 = firstVector[1];

            let x2 = secondVector[0];
            let y2 = secondVector[1];

            return (x1 * x2) + (y1 * y2);
        },

        cross(firstVector, secondVector) {

            let x1 = firstVector[0];
            let y1 = firstVector[1];

            let x2 = secondVector[0];
            let y2 = secondVector[1];

            return (x1 * y2) - (y1 * x2);
        },
    }
})()

