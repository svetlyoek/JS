function toggle() {
    const button = document.querySelectorAll('#accordion .head > span')[0];

    if (button.textContent === 'More') {
        document.querySelector('#extra').style.display = 'block';
        button.textContent = 'Less';

    } else {
        document.querySelector('#extra').style.display = 'none';
        button.textContent = 'More';
    }
}