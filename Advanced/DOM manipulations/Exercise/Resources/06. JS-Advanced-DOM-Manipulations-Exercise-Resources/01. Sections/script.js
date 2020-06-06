function create(words) {

   const contentDiv = document.getElementById('content');

   for (let i = 0; i < words.length; i++) {
      let title = words[i].split(', ');

      const div = document.createElement('div');
      const paragraph = document.createElement('p');
      paragraph.style.display = "none";
      paragraph.textContent = title;
      div.appendChild(paragraph);
      contentDiv.appendChild(div);
   }

   [...document.querySelectorAll('div')].forEach(div => div.addEventListener('click', function (e) {
      e.preventDefault();

      div.firstElementChild.style.display = "block";
   }))
}