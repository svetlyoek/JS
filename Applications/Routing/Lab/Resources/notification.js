export function loadError(message) {
    const errorBox = document.getElementById('errorBox');

    errorBox.style.display = 'block';
    errorBox.children[0].textContent = message;

    setInterval(() => {

        errorBox.style.display = 'none';

    }, 3000);
}

export function loadInfo(message) {
    const infoBox = document.getElementById('infoBox');

    infoBox.style.display = 'block';
    infoBox.children[0].textContent = message;

    setInterval(() => {

        infoBox.style.display = 'none';

    }, 3000);
}

export function loading() {
    const loadingBox = document.getElementById('loadingBox');

    loadingBox.style.display = 'block';
}