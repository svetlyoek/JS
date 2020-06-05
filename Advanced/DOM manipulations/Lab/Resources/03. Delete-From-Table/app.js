function deleteByEmail() {

    const input = document.getElementsByName('email')[0].value;
    const tableData = Array.from(document.querySelectorAll('td:nth-child(2)'));
    const resultDiv = document.getElementById('result');
    let isFound = false;

    for (let data of tableData) {
        if (data.textContent === input) {
            data.parentElement.remove();
            isFound = true;
        }
    }

    resultDiv.textContent = isFound === true ? 'Deleted.' : 'Not found.';
    document.getElementsByName('email')[0].value = '';
}
