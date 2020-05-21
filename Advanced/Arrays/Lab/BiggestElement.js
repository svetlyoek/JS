function solve(arguments) {
    let biggestNumber = Number.NEGATIVE_INFINITY;
    arguments.forEach(element => element.forEach(element => biggestNumber = Math.max(biggestNumber, element)));

    console.log(biggestNumber);
}