/* globals Sammy */

import home from './controllers/home.js';
import register, { registerPost } from './controllers/register.js';
import login, { loginPost } from './controllers/login.js';
import logout from './controllers/logout.js';
import { getAllMovies, create, createPost, buyTickets, details, myMovies, edit, editPost, deleteMovie, deleteMoviePost } from './controllers/cinema.js';



$(() => {

    const app = Sammy('#container', function () {

        this.use('Handlebars', 'hbs');

        this.userData = {};

        this.get('#/home', home);
        this.get('/', home);
        this.get('index.html', home);

        this.get('#/register', register);
        this.post('#/register', (context) => { registerPost.call(context) });

        this.get('#/login', login);
        this.post('#/login', (context) => { loginPost.call(context) });

        this.get('#/logout', logout);

        this.get('#/cinema', getAllMovies);

        this.get('#/create', create);
        this.post('#/create', (context) => { createPost.call(context) });

        this.get('#/buy/:id', buyTickets);

        this.get('#/details/:id', details);

        this.get('#/my_movies', myMovies);

        this.get('#/edit/:id', edit);
        this.post('#/edit/:id', (context) => { editPost.call(context) });

        this.get('#/delete/:id', deleteMovie);
        this.post('#/delete/:id', (context) => { deleteMoviePost.call(context) });


    });

    app.run();
});