function solve(arguments) {

    let set = new Set();

    for (let arr of arguments) {

        let line = JSON.parse(arr).sort((a, b) => b - a);
        set.add(JSON.stringify(line));
    }

    let result = [];

    [...set].forEach(i => result.push(JSON.parse(i)));

    result.sort((a, b) => a.length - b.length).forEach(i => console.log(`[${i.join(', ')}]`));

}

solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]
);

solve(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]
);
