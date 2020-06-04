function solve() {
    const menuTo = document.getElementById('selectMenuTo');
    const button = document.querySelector('button');
    const resultField = document.getElementById('result');

    const inputNumber = document.getElementById('input');

    const binaryOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';
    menuTo.appendChild(binaryOption);

    const hexaOption = document.createElement('option');
    hexaOption.value = 'hexadecimal';
    hexaOption.textContent = 'Hexadecimal';
    menuTo.appendChild(hexaOption);

    button.addEventListener('click', function (e) {
        e.preventDefault();

        switch (menuTo.value) {
            case 'binary': resultField.value = Number(inputNumber.value).toString(2);
                break;
            case 'hexadecimal': resultField.value = Number(inputNumber.value).toString(16).toUpperCase();
                break;
            default:
                break;
        }

    });

}