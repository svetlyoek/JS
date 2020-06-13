function solve(arguments, string) {

    return arguments.sort((a, b) => string === 'asc' ? a - b : b - a);
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));