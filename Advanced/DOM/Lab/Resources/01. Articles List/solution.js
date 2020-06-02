function createArticle() {

	let titleContent = document.getElementById('createTitle');
	let content = document.getElementById('createContent');
	let articles = document.getElementById('articles');

	let article = document.createElement('article');
	let heading = document.createElement('h3');
	let paragraph = document.createElement('p');

	if (titleContent.value !== '' && content.value !== '') {

		heading.innerText = titleContent.value;
		article.appendChild(heading);

		paragraph.innerText = content.value;
		article.appendChild(paragraph);

		articles.appendChild(article);
	}
	document.getElementById('createTitle').value = '';
	document.getElementById('createContent').value = '';
}