function addItem() {

    const input = document.getElementById('newItemText').value;
    const ul = document.getElementById('items');

    const list = document.createElement('li');
    list.textContent = input;
    ul.appendChild(list);

    document.getElementById('newItemText').value = '';
}