function solve(arguments) {
    let numbers = [];

    for (let i = 0; i < arguments.length; i++) {
        if (i % 2 != 0) {
            numbers.unshift(Number(arguments[i] * 2));
        }
    }
    console.log(numbers);
}