export function loadError(message) {
    const errorBox = document.getElementById('errorBox');

    errorBox.style.display = 'block';
    errorBox.children[0].textContent = message;

    errorBox.addEventListener('click', hideError);
}

export function loadInfo(message) {
    const infoBox = document.getElementById('infoBox');

    infoBox.style.display = 'block';
    infoBox.children[0].textContent = message;

    infoBox.addEventListener('click', hideInfo);

    setInterval(() => {

        infoBox.style.display = 'none';

    }, 3000);
}

export function loading() {
    const loadingBox = document.getElementById('loadingBox');

    loadingBox.style.display = 'block';
}

function hideInfo() {

    infoBox.style.display = 'none';
}

function hideError() {

    errorBox.style.display = 'none';
}