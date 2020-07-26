import { loading } from './notification.js';

const appKey = '536360A5-3506-7B54-FFD1-D5E48D87CC00';
const restApiKey = 'B8B4C276-ABA7-4CE4-8A61-6898290776ED';

function host(endpoint) {

    return `https://api.backendless.com/${appKey}/${restApiKey}/${endpoint}`;
}
const endPoints = {

    userRegister: `users/register`,
    userLogin: `users/login`,
    userLogout: `users/logout`,
    movies: `data/movies`,
};

export async function apiRegister(username, password) {

    loading();

    const result = await (await fetch(host(endPoints.userRegister), {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },
        body: JSON.stringify({

            username: username,
            password: password
        })
    }))
        .json();

    return result;
}

export async function apiLogin(username, password) {

    loading();

    const result = (await fetch(host(endPoints.userLogin), {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },
        body: JSON.stringify({

            login: username,
            password: password
        })
    }))
        .json();

    return result;
}

export async function apiLogout() {

    const token = getToken();

    loading();

    localStorage.removeItem('userToken');

    const result = await (await fetch(host(endPoints.userLogout), {
        headers: {

            'user-token': token
        }
    }));

    return result;
}

export async function apiGetMovies(search) {

    const token = getToken();

    let result;

    loading();

    if (!search) {

        result = await (await fetch(host(endPoints.movies), {
            headers: {
                'user-token': token
            }
        })).json();

    } else {

        result = await (await fetch(host(endPoints.movies + `?where=${escape(`genres LIKE '%${search}%'`)}`), {
            headers: {
                'user-token': token
            }
        })).json();
    }

    return result;
}

export async function createMovie(movie) {

    const token = getToken();

    loading();

    const result = await (await fetch(host(endPoints.movies), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'user-token': token
        },
        body: JSON.stringify(movie)
    }))
        .json();

    return result;
}

export async function getMovieById(movieId) {

    const token = getToken();

    loading();

    return await (await fetch(host(endPoints.movies + `/${movieId}`), {

        headers: {
            'user-token': token
        }

    })).json();
}

export async function updateMovie(movieId, newTickets) {

    const token = getToken();

    loading();

    return await (await fetch(host(endPoints.movies + `/${movieId}`), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'user-token': token
        },
        body: JSON.stringify(newTickets)
    }))
        .json();
}

export async function apiBuyTicket(movie) {

    loading();

    const newTickets = movie.tickets - 1;
    const movieId = movie.objectId;

    return await updateMovie(movieId, { tickets: newTickets });
}

export async function getMoviesByOwner() {

    const token = getToken();
    const ownerId = localStorage.getItem('userId');

    loading();

    return await (await fetch(host(endPoints.movies + `?where=ownerId%3D%27${ownerId}%27`), {
        headers: {
            'user-token': token
        }
    })).json();
}

export async function apiDelete(movieId) {

    const token = getToken();

    loading();

    return await (await fetch(host(endPoints.movies + `/${movieId}`), {
        method: 'DELETE',
        headers: {
            'user-token': token
        }
    })).json()
}

function getToken() {

    const token = localStorage.getItem('userToken');

    return token;
}

