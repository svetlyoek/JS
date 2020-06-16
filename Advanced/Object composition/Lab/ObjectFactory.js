function solve(arguments) {

    let arr = JSON.parse(arguments);

    let result = arr.reduce((acc, curr) => {

        let obj = Object.assign(acc, curr);

        return obj;
    }, {});

    return result;
}

solve(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`);
solve(`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`);