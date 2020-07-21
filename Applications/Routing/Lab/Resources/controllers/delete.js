import * as data from '../data.js';
import * as notification from '../notification.js';

export default async function () {

    const id = this.params.id;

    try {

        const result = await data.deleteFurniture(id);

        if (result.hasOwnProperty('errorData')) {

            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        notification.loadInfo(`Successfully delete ${result.make}`);

        this.redirect('#/furniture/all');

    } catch (err) {

        notification.loadError(err.message);
    }
}