function attachGradientEvents() {

    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');

    gradient.addEventListener('mousemove', printPercentage);
    gradient.addEventListener('mouseout', clearPercentage);

    function printPercentage(e) {
        let currentMouseX = e.offsetX;
        let percentage = Math.floor(currentMouseX / this.clientWidth * 100);
        result.textContent = percentage + '%';
    }

    function clearPercentage(e) {
        result.textContent = '';
    }

}