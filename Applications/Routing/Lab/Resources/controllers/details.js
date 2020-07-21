import * as data from '../data.js';

export default async function () {

    const item = await data.getFurniture(this.params.id);
    const currentItem = item[0];

    this.partials = {
        header: await this.load('./templates/header.hbs')
    }
    
    this.partial('./templates/details.hbs', currentItem);
}