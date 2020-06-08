function solve() {

   const button = document.getElementById('searchBtn');
   const input = document.getElementById('searchField');
   const tableText = Array.from(document.querySelectorAll('table tbody tr > td'));


   button.addEventListener('click', function (e) {
      e.preventDefault();

      tableText.forEach(row => row.parentNode.classList.remove('select'));
      let inputText = input.value;

      for (let text of tableText) {
         if (text.textContent.toLocaleUpperCase().includes(inputText.toLocaleUpperCase())) {
            text.parentNode.classList.add('select');
         }
      }

      document.getElementById('searchField').value = '';

   })

}