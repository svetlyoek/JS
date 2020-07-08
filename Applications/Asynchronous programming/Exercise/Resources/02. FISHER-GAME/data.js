const endPoints = {

    get: `https://fisher-game.firebaseio.com/catches.json`,
    post: `https://fisher-game.firebaseio.com/catches.json`,
    put: `https://fisher-game.firebaseio.com/catches/`,
    delete: `https://fisher-game.firebaseio.com/catches/`
}

export async function getAllCatches() {

    const data = await (await fetch(endPoints.get)).json();

    return data;
}

export async function updateCatch(catchId, object) {

    await (await fetch(endPoints.put + catchId + '.json', {
        method: 'PUT',
        body: JSON.stringify(object)
    }))
}

export async function deleteCatch(catchId) {

    await (await fetch(endPoints.delete + catchId + `.json`, {

        method: 'DELETE'
    }));
}

export async function createCatch(newCatch) {

    await (await fetch(endPoints.post, {

        method: 'POST',
        body: JSON.stringify({
            "angler": newCatch.angler,
            "bait": newCatch.bait,
            "captureTime": newCatch.captureTime,
            "location": newCatch.location,
            "species": newCatch.species,
            "weight": newCatch.weight
        })
    }))

}