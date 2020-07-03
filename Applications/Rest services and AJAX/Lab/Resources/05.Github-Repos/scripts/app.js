function loadRepos() {

	const username = document.getElementById('username');
	const reposList = document.getElementById('repos');
	reposList.innerHTML = '';

	const url = `https://api.github.com/users/${username.value}/repos`;

	fetch(url)
		.then((response) => {

			if (response.status == 404) {

				let list = document.createElement('li');
				list.textContent = 'Not found';
				reposList.appendChild(list);

			} else {

				return response.json();
			}
		})
		.then((data) => {

			data.forEach(user => {

				let list = document.createElement('li');
				let anchor = document.createElement('a');

				anchor.href = user.html_url;
				anchor.textContent = user.full_name;
				list.appendChild(anchor);

				reposList.appendChild(list);
			});

		});
}