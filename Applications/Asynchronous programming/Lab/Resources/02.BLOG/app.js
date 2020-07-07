function attachEvents() {

    const baseUrl = `https://blog-apps-c12bf.firebaseio.com/posts`;

    const loadBtn = document.getElementById('btnLoadPosts');
    const postBtn = document.getElementById('btnViewPost');
    const posts = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');

    loadBtn.addEventListener('click', async function (e) {

        const response = await fetch(`${baseUrl}.json`);
        const data = await response.json();

        Object.entries(data).forEach(([key, post]) => {

            const option = document.createElement('option');
            option.value = key;
            option.textContent = post.title;

            posts.appendChild(option);
        });
    });

    postBtn.addEventListener('click', async function (e) {

        postComments.innerHTML = '';

        const response = await fetch(`${baseUrl}/${posts.value}.json`);
        const data = await response.json();

        postTitle.textContent = data.title;
        postBody.textContent = data.body;

        Object.entries(data.comments).forEach(([_, comment]) => {

            const list = document.createElement('li');
            list.textContent = comment.text;
            postComments.appendChild(list);
        });
    });
}

attachEvents();