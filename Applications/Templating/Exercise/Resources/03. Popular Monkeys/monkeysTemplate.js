async function attachEvents() {

    const monkeysDiv = document.querySelector('div.monkeys');

    const templateString = await (await fetch('./monkey-template.hbs')).text();
    const partialString = await (await fetch('./monkey.hbs')).text();

    const template = Handlebars.compile(templateString);
    Handlebars.registerPartial('monkey', partialString);

    monkeysDiv.innerHTML = template({ monkeys });

    monkeysDiv.addEventListener('click', function (e) {

        const target = e.target;

        if (target.tagName !== 'BUTTON') {

            return;
        }

        const monkeyDiv = target.parentNode;

        const infoParagraph = monkeyDiv.querySelector('p');

        if (infoParagraph.style.display === 'none') {

            infoParagraph.style.display = 'block';
            target.textContent = 'LESS';

        } else {

            infoParagraph.style.display = 'none';
            target.textContent = 'INFO';
        }
    });
}