function subtract() {
    const firstInput = document.getElementById('firstNumber').value;
    const secondInput = document.getElementById('secondNumber').value;
    const resultDiv = document.getElementById('result');

    let result = Number(firstInput) - Number(secondInput);
    let paragraph = document.createElement('p');

    paragraph.textContent = result;
    resultDiv.appendChild(paragraph);
}