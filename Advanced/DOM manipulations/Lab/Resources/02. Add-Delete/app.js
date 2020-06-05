function addItem() {

    const input = document.getElementById('newText').value;
    const ul = document.getElementById('items');

    const list = document.createElement('li');
    list.innerHTML = `${input} <a href="#">[Delete]</a>`;
    ul.appendChild(list);

    list.addEventListener('click', function (e) {
        e.preventDefault();
        ul.removeChild(list);
    });

    document.getElementById('newText').value = '';
}