function solve(num) {
    let numbers = String(num);
    let result = true;
    let sum = 0;
    let firstNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        sum += Number(numbers[i]);

        if (firstNumber != numbers[i]) {
            result = false;
        }
    }
    console.log(result);
    console.log(sum);
}