function attachEvents() {

    const townsDiv = document.getElementById('root');
    const input = document.getElementById('towns');
    const loadBtn = document.getElementById('btnLoadTowns');

    loadBtn.addEventListener('click', async function (e) {
        e.preventDefault();

        const towns = input.value.split(',');

        const templateString = await (await fetch('./towns-template.hbs')).text();
        const townString = await (await fetch('./town.hbs')).text();

        Handlebars.registerPartial('town', townString);
        const template = Handlebars.compile(templateString);

        townsDiv.innerHTML = template({ towns });

        input.value = '';
    });
}