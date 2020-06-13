function solve() {

    let result = new Map();

    for (let item of arguments) {

        let type = typeof item;

        console.log(`${type}: ${item}`);

        if (!result.get(type)) {
            result.set(type, 0);
        }

        result.set(type, result.get(type) + 1);
    }

    [...result]
        .sort((a, b) =>
            b[1] - a[1])
        .forEach(i => {
            console.log(`${i[0]} = ${i[1]}`);
        })
}

solve('cat', 42, function () { console.log('Hello world!'); });
solve({ name: 'bob' }, 3.333, 9.999);