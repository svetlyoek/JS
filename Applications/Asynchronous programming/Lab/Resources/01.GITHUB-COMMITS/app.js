async function loadCommits() {

    const username = document.getElementById('username');
    const repo = document.getElementById('repo');
    const commits = document.getElementById('commits');
    const url = `https://api.github.com/repos/${username.value}/${repo.value}/commits`;

    commits.innerHTML = '';

    try {
        const response = await fetch(url);

        if (response.status == 200) {

            const repos = await response.json();

            Object.entries(repos)
                .forEach(([_, repos]) => {

                    const list = document.createElement('li');
                    list.textContent = `${repos.commit.author.name}: ${repos.commit.message}`;
                    commits.appendChild(list);
                });

            username.value = '';
            repo.value = '';

        } else if (!response.ok) {

            throw new Error(JSON.stringify({

                status: response.status,
                statusText: response.statusText
            }));
        }

    } catch (data) {

        const error = JSON.parse(data.message);
        const list = document.createElement('li');
        list.textContent = `Error: ${error.status} (${error.statusText})`;
        commits.appendChild(list);

        username.value = '';
        repo.value = '';
    }
}