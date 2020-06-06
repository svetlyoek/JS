function notify(message) {

    const resultDiv = document.querySelector('#notification');

    resultDiv.textContent = message;
    resultDiv.style.display = 'block';

    setTimeout(() => {
        resultDiv.style.display = 'none';
    }, 2000);
}