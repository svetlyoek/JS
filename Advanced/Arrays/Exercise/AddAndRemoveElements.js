function solve(arguments) {
    let number = 1;
    let numbers = [];

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] === 'add') {
            if (i == 0) {
                numbers.push(number);
            } else {
                numbers.push(number += 1);
            }

        } else if (arguments[i] === 'remove') {
            numbers.splice(numbers.length - 1, 1);
            number += 1;
        }
    }
    if (numbers.length > 0) {
        console.log(numbers.join('\r\n'));

    } else {
        console.log('Empty');
    }
}
