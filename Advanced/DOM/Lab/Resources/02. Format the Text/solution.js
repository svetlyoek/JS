function solve() {
  const inputParagraph = document.querySelector('#exercise > p');
  const paragraphContent = inputParagraph.textContent;

  const output = document.querySelector('#output');

  let paragraph = document.createElement('p');
  const sentences = Array.from(paragraphContent.split('.'));
  let counter = 0;
  for (let i = 0; i < sentences.length; i++) {
    counter++;
    if (i !== sentences.length - 1) {
      paragraph.innerText += sentences[i] + '.';
    } else {
      paragraph.innerText += sentences[i]
    }

    if (counter === 3) {

      output.appendChild(paragraph);

      paragraph = document.createElement('p');
      counter = 0;
    }
    if (counter !== 0) {
      output.appendChild(paragraph);
    }
  }
}
