function solve() {

    const styleBtn = document.getElementById('dropdown');
    const box = document.getElementById('box');
    const list = document.getElementById('dropdown-ul');
    const colors = document.querySelectorAll('#dropdown-ul > li');

    styleBtn.addEventListener('click', function (e) {
        e.preventDefault();

        if (list.style.display !== 'block' && box.style.backgroundColor === '') {

            list.style.display = 'block';

            colors.forEach(l => l.addEventListener('click', function (e) {
                e.preventDefault();

                let color = e.target.textContent;
               
                box.style.backgroundColor = color;
            }));
        } else if (box.style.backgroundColor !== '') {

            list.style.display = 'none';

            box.style.backgroundColor = '';
        }
    });
}