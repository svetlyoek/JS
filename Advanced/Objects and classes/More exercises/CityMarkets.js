function solve(arguments) {

    let catalgue = new Map();

    for (let i = 0; i < arguments.length; i++) {

        let line = arguments[i].split(/[^\w. ]+/);

        let [town, product, income] = [line[0], line[1], Number(line[2] * line[3])];

        if (!catalgue.get(town)) {
            catalgue.set(town, new Map());
        }

        catalgue.get(town).set(product, income);
    }

    console.log([...catalgue]
        .map(k => `Town - ${k[0]}\n${[...k[1]]
            .map(p => `$$$${p[0].trim()} : ${p[1]}`)
            .join('\n')}`)
        .join('\n'));

}
solve(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']
);