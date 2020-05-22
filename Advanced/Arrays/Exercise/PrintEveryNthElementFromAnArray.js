function solve(arguments) {
    let steps = Number(arguments.pop());

    for (let i = 0; i < arguments.length; i += steps) {
        console.log(arguments[i]);
    }
}
