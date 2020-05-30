function solve(arguments) {
    let result = new Map();
    let obj = {};
    let bottleQuantity = 1000;

    for (let i = 0; i < arguments.length; i++) {

        let tokens = arguments[i].split(' => ');
        let product = tokens[0];
        let quantity = Number(tokens[1]);

        if (!obj.hasOwnProperty(product)) {
            obj[product] = 0;
        }
        obj[product] += quantity;

        if (obj[product] >= bottleQuantity) {
            let bottlesCount = Math.floor(obj[product] / bottleQuantity);

            if (result.get(product)) {
                result.set(product, result.get(product) + bottlesCount)
            } else {
                result.set(product, bottlesCount);
            }
        }

        obj[product] = obj[product] % 1000;
    }
    console.log([...result].map(item => `${item[0]} => ${item[1]}`).join("\n"));
}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);
solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);