/* globals $, Sammy */
import home from './controllers/home.js';
import create, { createFurniture } from './controllers/create.js';
import profile from './controllers/profile.js';
import details from './controllers/details.js';
import apiDelete from './controllers/delete.js';

$(() => {

    const app = Sammy('#main', function () {

        this.use('Handlebars', 'hbs');

        this.userData = {};

        this.get('#/furniture/all', home);
        this.get('/index.html', home);
        this.get('/', home);

        this.get('#/furniture/create', create);

        this.get('#/furniture/mine', profile);

        this.get('#/furniture/details/:id', details);

        this.post('#/furniture/create', (context) => { createFurniture.call(context) });

        this.get('#/furniture/delete/:id', apiDelete);
    });

    app.run();

});
