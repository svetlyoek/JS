(function () {
    let firstNum, secondNum, resultNum;

    function init(num1, num2, result) {
        firstNum = document.getElementById(num1);
        secondNum = document.getElementById(num2);
        resultNum = document.getElementById(result);
    }

    function add() {
        action((a, b) => a + b);
    }

    function subtract() {
        action((a, b) => a - b);
    }

    function action(operation) {
        let val1 = Number(firstNum.value);
        let val2 = Number(secondNum.value);
        resultNum.value = operation(val1, val2);
    }

    let model = { init, add, subtract };
    return model;
})();