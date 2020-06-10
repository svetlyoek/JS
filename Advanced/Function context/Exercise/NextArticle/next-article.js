function getArticleGenerator(articles) {

    const resultDiv = document.getElementById('content');

    function showNext() {

        if (articles.length > 0) {

            let firstElement = articles.shift();
            const article = document.createElement('article');
            article.textContent += firstElement;
            resultDiv.appendChild(article);
        }
    };

    return showNext;
}