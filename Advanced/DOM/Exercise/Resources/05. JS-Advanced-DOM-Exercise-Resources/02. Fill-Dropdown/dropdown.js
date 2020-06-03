function addItem() {

    const inputText = document.getElementById('newItemText').value;
    const inputValue = document.getElementById('newItemValue').value;
    const menu = document.getElementById('menu');

    const option = document.createElement('option');

    option.textContent = inputText;
    option.value = inputValue;

    menu.appendChild(option);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}