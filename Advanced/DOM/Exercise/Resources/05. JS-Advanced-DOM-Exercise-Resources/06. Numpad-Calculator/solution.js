function solve() {

    const clearBtn = document.getElementsByClassName('clear')[0];
    const expOutput = document.getElementById('expressionOutput');
    const resultOutput = document.getElementById('resultOutput');
    let result = 0;
    let leftOperand = '';
    let rightOperand = '';
    let operator = '';
    let counter = 0;


    document.querySelectorAll('.keys > button').forEach(key => {
        key.addEventListener('click', function (e) {

            if (key.value === '=') {
                if (expOutput.textContent.includes('/')) {
                    result = Number(leftOperand) / Number(rightOperand);
                } else if (expOutput.textContent.includes('*')) {
                    result = Number(leftOperand) * Number(rightOperand);
                } else if (expOutput.textContent.includes('-')) {
                    result = Number(leftOperand) - Number(rightOperand);
                } else if (expOutput.textContent.includes('+')) {
                    result = Number(leftOperand) + Number(rightOperand);
                }

                resultOutput.textContent = result;

                leftOperand = '';
                rightOperand = '';
                operator = '';
            } else if (key.value !== '=' && key.value !== '/' && key.value !== '*' && key.value !== '-'
                && key.value !== '+') {

                expOutput.textContent += key.value;

                if (!expOutput.textContent.includes('/') && !expOutput.textContent.includes('*') &&
                    !expOutput.textContent.includes('+') && !expOutput.textContent.includes('-')) {
                    if (expOutput.textContent.length > 0) {
                        leftOperand += key.value;
                    } else if (expOutput.textContent.length == 0)
                        leftOperand = key.value;
                } else if (expOutput.textContent.includes('/') && expOutput.textContent.includes('*') &&
                    expOutput.textContent.includes('+') && expOutput.textContent.includes('-')) {
                    if (expOutput.textContent.length > 0) {
                        rightOperand += key.value;
                    } else if (expOutput.textContent.length == 0) {
                        rightOperand = key.value;
                    }

                }

            } else if (key.value === '=' || key.value === '/' || key.value === '*' || key.value === '-'
                || key.value === '+') {
                expOutput.textContent += key.value;
                operator = key.value;
            }

        })
    });

    clearBtn.addEventListener('click', function (e) {
        document.getElementById('expressionOutput').textContent = '';
        document.getElementById('resultOutput').textContent = '';
    });




}