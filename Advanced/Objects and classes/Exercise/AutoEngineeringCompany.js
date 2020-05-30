function solve(arguments) {
    let result = new Map();

    for (let item of arguments) {
        let [brand, model, count] = item.split(' | ');
        count = Number(count);

        if (!result.get(brand)) {
            result.set(brand, new Map());

        }
        if (!result.get(brand).get(model)) {
            result.get(brand).set(model, 0)
        }

        result.get(brand).set(model, result.get(brand).get(model) + count);
    }

    console.log([...result]
        .map(car => `${car[0]}\n${[...car[1]]
            .map(item => `###${item[0]} -> ${item[1]}`)
            .join("\n")}`)
        .join("\n"));
}
solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);