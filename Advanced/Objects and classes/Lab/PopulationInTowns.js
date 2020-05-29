function solve(arguments) {
    let obj = {};

    for (let i = 0; i < arguments.length; i++) {
        let lines = arguments[i].split(" <-> ");

        let townName = lines[0];
        let townPopulation = Number(lines[1]);
        if (obj.hasOwnProperty(townName)) {
            obj[townName] += townPopulation;
        } else {
            obj[townName] = townPopulation;
        }
    }

    for (const key in obj) {
        console.log(`${key} : ${obj[key]}`)
    }
}
solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);
solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);