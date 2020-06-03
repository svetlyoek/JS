function solve() {

   const input = document.querySelector('#chat_input').value;
   const parentDiv = document.getElementById('chat_messages');
   const button = document.getElementById('send');

   button.addEventListener('click', function (e) {
      e.defaultPrevented();
   })
   let currentDiv = document.createElement('div');

   if (input !== '') {
      currentDiv.className = 'message my-message';
   }

   currentDiv.textContent = input;
   parentDiv.appendChild(currentDiv);

   document.querySelector('#chat_input').value = '';
}


