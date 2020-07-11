import * as data from './data.js';

const loadBtn = document.getElementById('loadBooks');
const createBtn = document.querySelector('form > button')
const tableBody = document.querySelector('table tbody');
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const inputIsbn = document.getElementById('isbn');

window.onload = (e) => {
    tableBody.innerHTML = '';
};

loadBtn.addEventListener('click', async function loadBooks() {

    let books = '';

    try {

        books = await data.getBooks();

        books = books.sort((a, b) => b.created - a.created);

        tableBody.innerHTML = '';

        books.forEach(b => {

            const editBtn = document.createElement('button');
            editBtn.classList.add('edit');
            editBtn.textContent = 'Edit';

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete');
            deleteBtn.textContent = 'Delete';

            const newRow = document.createElement('tr');
            const titleData = document.createElement('td');
            const authorData = document.createElement('td');
            const isbnData = document.createElement('td');

            titleData.textContent = b.title;
            authorData.textContent = b.author;
            isbnData.textContent = b.isbn;

            newRow.appendChild(titleData);
            newRow.appendChild(authorData);
            newRow.appendChild(isbnData);

            const buttonsData = document.createElement('td');
            buttonsData.appendChild(editBtn);
            buttonsData.appendChild(deleteBtn);

            newRow.appendChild(buttonsData);

            tableBody.appendChild(newRow);

            deleteBtn.addEventListener('click', async function () {

                await data.deleteBook(b.objectId);
                loadBooks();
            });

            editBtn.addEventListener('click', function () {

                newRow.innerHTML = '';

                const titleInput = document.createElement('input');
                const authorInput = document.createElement('input');
                const isbmInput = document.createElement('input');
                const cancelBtn = document.createElement('button');
                const applyBtn = document.createElement('button');

                titleInput.value = b.title;
                authorInput.value = b.author;
                isbmInput.value = b.isbn;

                cancelBtn.textContent = 'Cancel';
                applyBtn.textContent = 'Apply';

                const firstData = document.createElement('td');
                const secondData = document.createElement('td');
                const thirdData = document.createElement('td');
                const newButtonsData = document.createElement('td');

                newButtonsData.appendChild(applyBtn);
                newButtonsData.appendChild(cancelBtn);

                firstData.appendChild(titleInput);
                secondData.appendChild(authorInput);
                thirdData.appendChild(isbmInput);

                newRow.appendChild(firstData);
                newRow.appendChild(secondData);
                newRow.appendChild(thirdData);
                newRow.appendChild(newButtonsData);

                cancelBtn.addEventListener('click', async function () {

                    loadBooks();

                });

                applyBtn.addEventListener('click', async function () {

                    if (titleInput.value != '' && authorInput.value != '' && isbmInput.value != '') {

                        const editedObj = {

                            title: titleInput.value,
                            author: authorInput.value,
                            isbn: isbmInput.value
                        }

                        await data.updateBook(editedObj, b.objectId);

                        loadBooks();
                    }
                });
            });
        });

    } catch (err) {

        console.log(err);
    }
});

createBtn.addEventListener('click', async function (e) {
    e.preventDefault();

    if (inputTitle.value != '' && inputAuthor.value != '' && inputIsbn.value != '') {

        const newBook = {
            title: inputTitle.value,
            author: inputAuthor.value,
            isbn: inputIsbn.value
        }

        await data.createBook(newBook);

        inputTitle.value = '';
        inputAuthor.value = '';
        inputIsbn.value = '';
    }
});

