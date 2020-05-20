function solve(params) {
    const calorie = {};

    for (let i = 0; i < params.length; i += 2) {
        let name = params[i];
        let value = Number(params[i + 1]);

        calorie[name] = value;
    }

    console.log(calorie);
}
