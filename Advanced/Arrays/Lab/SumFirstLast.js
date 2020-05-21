function solve(arguments) {
    if (arguments.length == 1) {
        console.log(Number(arguments[0]) + Number(arguments[0]));
    }
    else {
        let firstElement = Number(arguments.shift());
        let lastElement = Number(arguments.pop());

        console.log(firstElement + lastElement);
    }
}