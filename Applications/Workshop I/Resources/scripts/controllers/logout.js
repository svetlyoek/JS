import * as data from '../data.js';
import { loadError, loadInfo } from '../notification.js';

export default async function logout() {

    const token = localStorage.getItem('userToken');

    if (!token) {

        loadError('You are not authorized!');
        return;
    }

    try {

        const result = await data.apiLogout();

        if (result.hasOwnProperty('errorData')) {

            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        loadInfo('Logout successful.');

        this.app.userData.isLoggedIn = false;
        this.app.userData.username = '';
        this.app.userData.userId = '';
        this.app.userData.userToken = '';

        this.redirect('#/home');

    } catch (error) {

        console.log(error);
        loadError(error);
    }
}