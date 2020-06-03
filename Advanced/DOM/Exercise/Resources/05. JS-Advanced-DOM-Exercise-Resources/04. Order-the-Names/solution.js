function solve() {

    const input = document.querySelector('#exercise > article > input').value;
    const firstLetter = input[0];

    const listItems = Array.from(document.querySelectorAll('li'));

    for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].textContent[0] === firstLetter) {
            if (listItems[i].textContent !== '') {
                listItems[i].textContent += `, ${input}`;
            }

        } else {
            let index = input.charCodeAt(firstLetter);
            if (i == index - 65) {
                listItems[i].textContent = input;
            }
        }

    }

    document.querySelector('#exercise > article > input').value = '';
}