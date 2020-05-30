function solve(arguments) {
    let result = new Map();

    for (let item of arguments) {
        let line = item.split(' : ');
        let name = line[0];
        let price = Number(line[1]);
        let letter = name[0];

        if (!result.get(letter)) {
            result.set(letter, new Map());
        }

        result.get(letter).set(name, price);
    }

    console.log([...result]
        .sort()
        .map(p => `${p[0]}\n  ${[...p[1]]
            .sort()
            .map(i => `${i[0]}: ${i[1]}`)
            .join("\n  ")}`)
        .join("\n"));

}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);