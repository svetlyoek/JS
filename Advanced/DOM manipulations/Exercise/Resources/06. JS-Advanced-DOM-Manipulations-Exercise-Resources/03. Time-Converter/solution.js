function attachEventsListeners() {

    const buttons = Array.from(document.querySelectorAll('input[type="button"]'));
    const inputs = Array.from(document.querySelectorAll('input[type="text"]'));

    for (let i = 0; i < buttons.length; i++) {

        let currentButton = buttons[i];

        currentButton.addEventListener('click', function (e) {
            e.preventDefault();

            if (currentButton == e.target && i == 0) {
                let days = Number(inputs[0].value);
                inputs[1].value = (days * 24).toString();
                inputs[2].value = (days * 1440).toString();
                inputs[3].value = (days * 86400).toString();
            }
            if (currentButton == e.target && i == 1) {
                let hours = Number(inputs[1].value);
                inputs[0].value = (hours / 24).toString();
                inputs[2].value = (Number(inputs[0].value * 1440).toString()).toString();
                inputs[3].value = (Number(inputs[0].value * 86400).toString()).toString();
            }
            if (currentButton == e.target && i == 2) {
                let minutes = Number(inputs[2].value);
                inputs[0].value = (minutes / 1440).toString();
                inputs[1].value = (Number(minutes / 1440 * 24).toString()).toString();
                inputs[3].value = (Number(minutes / 1440 * 86400).toString()).toString();
            }
            if (currentButton == e.target && i == 3) {
                let seconds = Number(inputs[3].value);
                inputs[0].value = (seconds / 86400).toString();
                inputs[1].value = (Number(seconds / 86400 * 24).toString()).toString();
                inputs[2].value = (Number(seconds / 86400 * 1440).toString()).toString();
            }
        })
    }
}