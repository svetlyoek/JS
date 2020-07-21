import * as data from '../data.js';
import * as notification from '../notification.js';

export default async function () {

    this.partials = {
        header: await this.load('./templates/header.hbs')
    }

    this.partial('./templates/create.hbs');
}

export async function createFurniture() {

    const inputValues = this.params;
    delete inputValues.material;

    try {

        if (Object.values(inputValues).some(v => v.length == 0)) {

            throw new Error('All fields are required!');
        }
    
        if (this.params.make.length < 4 || this.params.model.length < 4) {
    
            throw new Error('Make or model must be at least 4 symbols long!');
        }
    
        if (this.params.year < 1950 || this.params.year > 2050) {
    
            throw new Error('Year must be between 1950 and 2050!');
        }
    
        if (this.params.description.length <= 10) {
    
            throw new Error('Description must be more than 10 symbols long!');
        }
    
        if (this.params.price < 0) {
    
            throw new Error('Price must be a positive number!');
        }

        const newObject = {
            make: this.params.make,
            model: this.params.model,
            year: Number(this.params.year),
            description: this.params.description,
            price: Number(this.params.price),
            imageUrl: this.params.imageUrl,
            material: this.params.material
        }

        newObject.inFavourites = true;

        const result = await data.create(newObject);

        if (result.hasOwnProperty('errorData')) {

            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        notification.loadInfo('Successfully created furniture');

        this.redirect('#/furniture/all');

    } catch (err) {

        notification.loadError(err.message);
    }
}