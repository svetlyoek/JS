function attachEvents() {

    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    const messages = document.getElementById('messages');
    const author = document.getElementById('author');
    const message = document.getElementById('content');

    const url = `http://localhost:3000/messenger`;

    sendBtn.addEventListener('click', function (e) {

        if (author.value !== '' && message.value !== '') {

            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    author: author.value,
                    content: message.value
                })
            })
                .then((response) => {

                    if (!response.ok) {

                        console.error('Something get wrong!');

                    } else {

                        return response.json();
                    }
                })
                .then((response) => {

                    author.value = '';
                    message.value = '';
                });
        }
    });

    refreshBtn.addEventListener('click', function (e) {

        fetch(url)
            .then((response) => {

                if (!response.ok) {

                    console.error('Something get wrong!');

                } else {

                    return response.json();
                }
            })
            .then((data) => {

                messages.textContent = '';

                for (let message of Object.keys(data)) {

                    messages.textContent += `${data[message].author}: ${data[message].content}\n`;
                }
            });
    });
}

attachEvents();