function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll('button'));
    const radios = Array.from(document.querySelectorAll('input[value="unlock"]'));
    const hiddenFields = Array.from(document.querySelectorAll('#user1HiddenFields, #user2HiddenFields, #user3HiddenFields'));
    console.log(hiddenFields);
    for (let i = 0; i < buttons.length; i++) {

        let currentBtn = buttons[i];

        currentBtn.addEventListener('click', function (e) {
            e.preventDefault();

            if (!radios[i].checked) {
                return;
            } else if (radios[i].checked && currentBtn.textContent === 'Hide it') {
                currentBtn.textContent = 'Show more';
                hiddenFields[i].style.display = 'none';
            } else if (radios[i].checked && currentBtn.textContent === 'Show more') {

                currentBtn.textContent = 'Hide it';
                hiddenFields[i].style.display = 'block';
            }
        })
    }
}