const apiKey = `59CFC15F-8417-4506-BA1A-65A215C86C2F`;
const appId = `BD8D30E6-598F-D08F-FF83-014AADA39E00`;

const baseUrl = `https://api.backendless.com/${appId}/${apiKey}/data/Books`;

export async function getBooks() {

    const response = await (fetch(baseUrl));
    const data = await response.json();
    return data;
}

export async function createBook(newBook) {

    const response = await fetch(baseUrl, {

        method: 'POST',
        body: JSON.stringify(newBook)
    });

    return response;
}

export async function updateBook(newBook, bookId) {

    const response = await fetch(baseUrl + `/${bookId}`, {
        method: 'PUT',
        body: JSON.stringify(newBook)
    });

    return response;
}

export async function deleteBook(bookId) {

   await fetch(baseUrl + `/${bookId}`, {
        
        method: 'DELETE'
    });
}