import { loadError, loadInfo } from '../notification.js';
import * as data from '../data.js';

export default async function login() {

    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        loginForm: await this.load('./templates/user/loginForm.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
    }

    this.partial('./templates/user/loginPage.hbs', this.app.userData);
}

export async function loginPost() {

    const username = this.params.username;
    const password = this.params.password;

    try {

        if (username == '' || password == '') {

            throw new Error('All fields are required');
        }

        const result = await data.apiLogin(username, password);

        if (result.hasOwnProperty('errorData')) {

            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        this.app.userData.username = result.username;
        this.app.userData.userId = result.objectId;
        this.app.userData.isLoggedIn = true;
        this.app.userData.userToken = result['user-token'];

        localStorage.setItem('userToken', result['user-token']);
        localStorage.setItem('userId', result['objectId']);

        loadInfo('Login successful.');

        this.redirect('#/home');

    } catch (error) {

        console.log(error);
        loadError(error);
    }
}