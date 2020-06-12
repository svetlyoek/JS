function solution() {

    let string = '';

    return {

        append: (newString) => string += newString,
        removeStart: (n) => string = string.substring(Number(n)),
        removeEnd: (n) => string = string.substring(0, string.length - Number(n)),
        print: () => console.log(string)
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

