function solve() {

   const tableRows = Array.from(document.querySelectorAll('tbody > tr'));

   tableRows.forEach(r => {
      r.addEventListener('click', function (e) {
         e.preventDefault();

         let clickedRow = e.target.parentNode;

         if (clickedRow.style.backgroundColor !== '') {
            clickedRow.style.backgroundColor = '';
         } else {
            tableRows.forEach(r => r.style.backgroundColor = '');
            clickedRow.style.backgroundColor = '#413f5e';
         }
      });
   })
}
