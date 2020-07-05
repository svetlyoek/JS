function attachEvents() {

    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    const phonesUl = document.getElementById('phonebook');

    let phonebook = [];

    let url = 'http://localhost:3000/phonebook';


    createBtn.addEventListener('click', function () {

        let [personValue, phoneValue] = [personInput.value, phoneInput.value];

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({

                person: personValue,
                phone: phoneValue
            })
        })
            .then((response) => response.json())
            .then((response) => {

                phonebook.push(response);
                person.value = '';
                phone.value = '';
            });
    });

    loadBtn.addEventListener('click', function () {

        if (phonebook.length == 0) {

            const list = document.createElement('li');

            list.textContent = 'No entries!';

            phonesUl.appendChild(list);
            return;
        }

        phonesUl.innerHTML = '';

        phonebook.forEach(contact => {

            const key = Object.keys(contact)[0];

            const list = document.createElement('li');
            const deleteBtn = document.createElement('button');

            list.textContent = `${contact[key].person}: ${contact[key].phone}`;
            deleteBtn.textContent = 'Delete';

            list.appendChild(deleteBtn);

            deleteBtn.addEventListener('click', function (e) {

                let target = e.target;

                url = url + `/` + key;

                fetch(url, {

                    method: 'DELETE'
                })
                    .then((response) => {

                        console.log(response.statusText);
                    });

                target.parentElement.parentElement.removeChild(target.parentElement);

                phonebook = phonebook.filter(c => c[key] != contact[key]);
            });

            phonesUl.appendChild(list);
        });
    });
}

attachEvents();