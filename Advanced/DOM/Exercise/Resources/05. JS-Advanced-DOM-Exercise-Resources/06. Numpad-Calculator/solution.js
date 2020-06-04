function solve() {

    const clearBtn = document.getElementsByClassName('clear')[0];
    const expOutput = document.getElementById('expressionOutput');
    const resultOutput = document.getElementById('resultOutput');
    let result = 0;
    let leftOperand = 0;
    let rightOperand = 0;
    let splittedResult = '';

    document.querySelectorAll('.keys > button').forEach(key => {
        key.addEventListener('click', function (e) {
            if (key.value !== '=') {
                expOutput.textContent += key.value;
            } else if (key.value === '=') {

                splittedResult = expOutput.textContent.split(/[^\w.]/);
                leftOperand = Number(splittedResult[0]);
                rightOperand = Number(splittedResult[1]);

                if (leftOperand === 0 || rightOperand === 0) {
                    resultOutput.textContent = 'NaN';
                    return;
                }

                if (expOutput.textContent.includes('/')) {

                    result = leftOperand / rightOperand;

                } else if (expOutput.textContent.includes('*')) {

                    result = leftOperand * rightOperand;

                } else if (expOutput.textContent.includes('-')) {

                    result = leftOperand - rightOperand;

                } else if (expOutput.textContent.includes('+')) {

                    result = leftOperand + rightOperand;
                }

                resultOutput.textContent = result;
            }

        })
    });

    clearBtn.addEventListener('click', function (e) {
        document.getElementById('expressionOutput').textContent = '';
        document.getElementById('resultOutput').textContent = '';
    });
}