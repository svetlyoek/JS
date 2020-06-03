function solve() {

  const anchors = document.querySelectorAll('a');
  const paragraphs = document.querySelectorAll('p');

  for (let i = 0; i < anchors.length; i++) {
    visitsCounts(anchors[i], paragraphs[i]);
  }

  function visitsCounts(anchor, paragraph) {
    anchor.addEventListener('click', function (event) {
      event.preventDefault();

      let count = parseInt(paragraph.innerHTML.replace(/^\D+/g, ''));
      paragraph.innerHTML = `visited ${++count} times`;
    })
  }

}