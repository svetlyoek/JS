import * as data from '../data.js';
import { loadError, loadInfo } from '../notification.js';

export default async function register() {

    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        registerForm: await this.load('./templates/user/registerForm.hbs'),
        footer: await this.load('./templates/common/footer.hbs')
    }

    this.partial('./templates/user/registerPage.hbs', this.app.userData);
}

export async function registerPost() {

    const username = this.params.username;
    const password = this.params.password;
    const repeatPassword = this.params.repeatPassword;

    try {

        if (username.length < 3) {

            throw new Error('Username must be at least 3 symbols long!');
        }

        if (password.length < 6) {

            throw new Error('Password must be at least 6 symbols long!');
        }

        if (password !== repeatPassword) {

            throw new Error('Passwords do not match!');
        }

        if (Object.values(this.params).some(value => value.length == 0)) {

            throw new Error('All fields are required!');
        }

        const result = await data.apiRegister(username, password);

        if (result.hasOwnProperty('errorData')) {

            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        loadInfo('User registration successful.');

        this.redirect('#/login');

    } catch (error) {

        console.log(error);
        loadError(error);
    }
}