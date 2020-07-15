const contacts = [
    {
        id: 1,
        name: "John",
        phoneNumber: "0847759632",
        email: "john@john.com"
    },
    {
        id: 2,
        name: "Merrie",
        phoneNumber: "0845996111",
        email: "merrie@merrie.com"
    },
    {
        id: 3,
        name: "Adam",
        phoneNumber: "0866592475",
        email: "adam@stamat.com"
    },
    {
        id: 4,
        name: "Peter",
        phoneNumber: "0866592475",
        email: "peter@peter.com"
    },
    {
        id: 5,
        name: "Max",
        phoneNumber: "0866592475",
        email: "max@max.com"
    },
    {
        id: 6,
        name: "David",
        phoneNumber: "0866592475",
        email: "david@david.com"
    }
];

async function loadHtml() {

    const contactsHtml = document.getElementById('app');

    const templateString = await (await fetch('./contact-template.hbs')).text();
    const contactString = await (await fetch('./contact.hbs')).text();
    
    const template = Handlebars.compile(templateString);
    Handlebars.registerPartial('contact', contactString);

    contactsHtml.innerHTML = template({ contacts });
};

function displayDetails(id) {

    const detailsDiv = document.getElementById(id);

    if (detailsDiv.style.display === 'none') {

        detailsDiv.style.display = 'block';

    } else {

        detailsDiv.style.display = 'none';
    }
};




