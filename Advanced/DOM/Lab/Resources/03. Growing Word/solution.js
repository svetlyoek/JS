function growingWord() {

  let paragraph = document.querySelector('#exercise > p');

  if (paragraph.style.color === '' && paragraph.style.fontSize === '') {
    paragraph.style.color = 'blue';
    paragraph.style.fontSize = '2px';
  } else if (paragraph.style.color === 'red') {
    paragraph.style.color = 'blue';
    paragraph.style.fontSize = parseInt(paragraph.style.fontSize) * 2 + 'px';
  } else if (paragraph.style.color === 'blue') {
    paragraph.style.color = 'green';
    paragraph.style.fontSize = parseInt(paragraph.style.fontSize) * 2 + 'px';
  } else if (paragraph.style.color === 'green') {
    paragraph.style.color = 'red';
    paragraph.style.fontSize = parseInt(paragraph.style.fontSize) * 2 + 'px';
  }

}