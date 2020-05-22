function solve(arguments) {
    let rotationCount = arguments.pop();
    let lastElement = '';

    for (let i = 0; i < rotationCount % arguments.length; i++) {
        lastElement = arguments.pop();
        arguments.unshift(lastElement);
    }
    console.log(arguments.join(' '));
}
