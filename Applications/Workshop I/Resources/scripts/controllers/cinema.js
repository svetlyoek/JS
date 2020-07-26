import * as data from '../data.js';
import { loadError, loadInfo, loading } from '../notification.js';

export async function getAllMovies() {

    const token = getToken();

    try {

        if (!token) {

            loadError('You are not authorized!');
            return;
        }

        const search = this.params.search || '';

        let movies = await data.apiGetMovies(search);

        if (movies.hasOwnProperty('errorData')) {

            const error = new Error();
            Object.assign(error, movies);
            throw error;
        }

        this.partials = {

            header: await this.load('./templates/common/header.hbs'),
            movie: await this.load('./templates/cinema/movie.hbs'),
            footer: await this.load('./templates/common/footer.hbs')
        }

        this.app.userData.movies = movies;

        movies = movies.sort((a, b) => b.tickets - a.tickets);

        const context = Object.assign({ origin: encodeURIComponent('#/cinema'), search }, this.app.userData);

        this.partial('./templates/cinema/moviePage.hbs', context);

    } catch (error) {

        console.log(error);

        loadError(error);
    }
}

export async function myMovies() {

    const token = localStorage.getItem('userToken');

    try {

        if (!token) {

            loadError('You are not authorized!');
            return;
        }

        let movies = await data.getMoviesByOwner();

        movies = movies.sort((a, b) => b.tickets - a.tickets);

        if (movies.hasOwnProperty('errorData')) {

            const error = new Error();
            Object.assign(error, movies);
            throw error;
        }

        this.app.userData.movies = movies;

        this.partials = {
            header: await this.load('./templates/common/header.hbs'),
            movie: await this.load('./templates/cinema/movie.hbs'),
            ownMovie: await this.load('./templates/cinema/ownMovie.hbs'),
            footer: await this.load('./templates/common/footer.hbs')
        }

        const context = Object.assign({ myMovies: true, origin: encodeURIComponent('#/my_movies') }, this.app.userData);

        this.partial('./templates/cinema/moviePage.hbs', context);

    } catch (error) {

        console.log(error);
        loadError(error);
    }
}

export async function create() {

    const token = getToken();

    if (!token) {

        loadError('You are not authorized!');
        return;
    }

    loading();

    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        createForm: await this.load('./templates/cinema/createForm.hbs'),
        footer: await this.load('./templates/common/footer.hbs')
    }

    this.partial('./templates/cinema/createPage.hbs', this.app.userData);
}

export async function createPost() {

    try {

        const title = this.params.title;
        const image = this.params.image;
        const description = this.params.description;
        const genres = this.params.genres;
        const tickets = Number(this.params.tickets);

        if (Object.values(this.params).some(value => value.length == 0)) {

            throw new Error('All fields are required!')
        }

        if (title.length < 6) {

            throw new Error('Title must be at least 6 symbols long!');
        }

        if (description.length < 10) {

            throw new Error('Description must be at least 10 symbols long!');
        }

        if (image.match(`^(https:\/\/)`) == null || image.match(`^(http:\/\/)`)) {

            throw new Error('Image url must starts with \'https://\' or \'http://\'');
        }

        const movie = {
            title: title,
            image: image,
            description: description,
            genres: genres,
            tickets: tickets
        }

        const result = await data.createMovie(movie);

        if (result.hasOwnProperty('errorData')) {

            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        loadInfo('Movie created successfully.');

        this.redirect('#/home');


    } catch (error) {

        console.log(error);
        loadError(error);
    }
}

export async function buyTickets() {

    const token = getToken();

    const movieId = this.params.id;

    let movie = this.app.userData.movies.find(movie => movie.objectId == movieId);

    if (movie === undefined) {

        movie = await data.getMovieById(movieId);
    }

    if (movie.tickets == 0) {

        loadError('No tickets left!');
        return;
    }

    try {

        if (!token) {

            loadError('You are not authorized!');
            return;
        }

        const result = await data.apiBuyTicket(movie);

        if (result.hasOwnProperty('errorData')) {

            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        const index = this.app.userData.movies.indexOf(movie);
        this.app.userData.movies.splice(index, 1);

        this.app.userData.movies.push(result);

        loadInfo(`Successfully bought ticket for ${movie.title}!`);

        this.redirect(this.params.origin);

    } catch (error) {

        console.log(error);
        loadError(error);
    }
}

export async function details() {

    const token = getToken();

    try {

        if (!token) {

            loadError('You are not authorized!');
            return;
        }

        this.partials = {
            header: await this.load('./templates/common/header.hbs'),
            details: await this.load('./templates/cinema/details.hbs'),
            footer: await this.load('./templates/common/footer.hbs')
        }

        const movieId = this.params.id;

        let movie = this.app.userData.movies.find(movie => movie.objectId == movieId);

        if (movie) {

            loading();
        }

        if (movie === undefined) {

            movie = await data.getMovieById(movieId);
        }

        if (movie.hasOwnProperty('errorData')) {

            const error = new Error();
            Object.assign(error, movie);
            throw error;
        }

        const context = Object.assign({ movie, origin: encodeURIComponent('#/details/' + movieId) }, this.app.userData);

        this.partial('./templates/cinema/detailsPage.hbs', context);

    } catch (error) {

        console.log(error);
        loadError(error);
    }
}

export async function edit() {

    const token = getToken();

    const movieId = this.params.id;

    if (!token) {

        loadError('You are not authorized!');
        return;
    }

    loading();

    this.partials = {

        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')
    }

    let movie;

    movie = this.app.userData.movies.find(movie => movie.objectId == movieId);

    if (movie === undefined) {

        movie = await data.getMovieById(movieId);
    }

    const context = Object.assign(movie, this.app.userData);

    this.partial('./templates/cinema/edit.hbs', context);
}

export async function editPost() {

    const movieId = this.params.id;

    try {

        const title = this.params.title;
        const image = this.params.image;
        const description = this.params.description;
        const genres = this.params.genres;
        const tickets = Number(this.params.tickets);

        if (Object.values(this.params).some(value => value.length == 0)) {

            throw new Error('All fields are required!')
        }

        if (title.length < 6) {

            throw new Error('Title must be at least 6 symbols long!');
        }

        if (description.length < 10) {

            throw new Error('Description must be at least 10 symbols long!');
        }

        if (image.match(`^(https:\/\/)`) == null || image.match(`^(http:\/\/)`)) {

            throw new Error('Image url must starts with \'https://\' or \'http://\'');
        }

        const movie = {
            title: title,
            image: image,
            description: description,
            genres: genres,
            tickets: tickets
        }

        const result = await data.updateMovie(movieId, movie);

        if (result.hasOwnProperty('errorData')) {

            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        loadInfo(`Successfully edited ${movie.title}`);

        this.redirect('#/my_movies');

    } catch (error) {

        console.log(error);
        loadError(error);
    }
}

export async function deleteMovie() {

    const token = getToken();
    const movieId = this.params.id;

    if (!token) {

        loadError('You are not authorized!');
        return;
    }

    loading();

    this.partials = {

        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')
    }

    let movie;

    movie = this.app.userData.movies.find(movie => movie.objectId == movieId);

    if (movie === undefined) {

        movie = await data.getMovieById(movieId);
    }

    const context = Object.assign(movie, this.app.userData);

    this.partial('./templates/cinema/delete.hbs', context);
}

export async function deleteMoviePost() {

    const movieId = this.params.id;

    try {

        const result = await data.apiDelete(movieId);

        if (result.hasOwnProperty('errorData')) {

            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        loadInfo(`Movie removed successfully!`);

        this.redirect('#/home');

    } catch (error) {

        console.log(error);
        loadError(error);
    }
}

function getToken() {

    const token = localStorage.getItem('userToken');

    return token;
}


