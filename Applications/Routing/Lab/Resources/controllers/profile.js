import * as data from '../data.js';

export default async function () {

    this.partials = {
        header: await this.load('./templates/header.hbs'),
        furniture: await this.load('./templates/furniture.hbs')
    }

    const items = await data.getAll();
    const context = { items };

    this.partial('./templates/profile.hbs', context);
}