const appKey = `BD8D30E6-598F-D08F-FF83-014AADA39E00`;
const restApiKey = `59CFC15F-8417-4506-BA1A-65A215C86C2F`;
import * as notification from './notification.js';

function host(endPoint) {

    if (endPoint === undefined) {

        return `https://api.backendless.com/${appKey}/${restApiKey}/data/furniture`;

    } else {

        return `https://api.backendless.com/${appKey}/${restApiKey}/data/furniture/${endPoint}`;
    }
};

export async function getAll() {

    const furniture = await (await fetch(host())).json();

    return furniture;
};

export async function create(newObject) {

    return await (await fetch(host(), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newObject)
    })).json();
};

export async function getFurniture(id) {

    notification.loading();

    const searchUrl = `?where=objectId%3D%27${id}%27`;

    return await (await fetch(host() + searchUrl)).json();
}

export async function deleteFurniture(id) {

    return await (await fetch(host(id), {
        method: 'DELETE'
    }))
        .json();
}
