function loadRepos() {

   /* const div = document.getElementById('res');
   let url = 'https://api.github.com/users/testnakov/repos';

   const request = new XMLHttpRequest();

   request.addEventListener('readystatechange', function () {
      if (request.readyState == 4 && request.status == 200) {
         div.textContent = request.responseText;
      }
   });

   request.open('GET', url);
   request.send();
 */

   let url = 'https://api.github.com/users/testnakov/repos';
   const div = document.getElementById('res');

   fetch(url)
      .then((response) => {
         if (response.status === 200) {
            return response.json();
         }
      })
      .then((data) => {
         if (!data) {
            return;
         }
         div.textContent = JSON.stringify(data);
      });
}



