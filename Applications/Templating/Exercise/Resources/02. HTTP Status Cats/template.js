async function attachEvents() {

    const catsSection = document.getElementById('allCats');

    const templateString = await (await fetch('./cat-template.hbs')).text();
    const partialString = await (await fetch('./cat.hbs')).text();

    const template = Handlebars.compile(templateString);
    Handlebars.registerPartial('cat', partialString);

    catsSection.innerHTML = template({ cats });

    catsSection.addEventListener('click', function (e) {

        const target = e.target;

        if (target.tagName !== 'BUTTON') {

            return;
        }

        const infoDiv = target.parentNode;

        const statusDiv = infoDiv.querySelector('div.status');

        if (statusDiv.style.display === 'none') {

            statusDiv.style.display = 'block';
            target.textContent = 'Hide status code';

        } else {

            statusDiv.style.display = 'none';
            target.textContent = 'Show status code';
        }
    });

}