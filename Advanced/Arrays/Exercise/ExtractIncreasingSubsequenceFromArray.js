function solve(arguments) {
    let biggestNumber = Number.MIN_SAFE_INTEGER;
    let filtered = arguments.filter(filterMax);

    function filterMax(number) {
        if (number >= biggestNumber) {
            biggestNumber = number;
            return biggestNumber;
        }
    }
    console.log(filtered.join('\r\n'));
}
