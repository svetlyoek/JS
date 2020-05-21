function solve(arguments) {
    let numbers = [];

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < 0) {
            numbers.unshift(arguments[i]);
        } else {
            numbers.push(arguments[i]);
        }
    }
    console.log(numbers);
}