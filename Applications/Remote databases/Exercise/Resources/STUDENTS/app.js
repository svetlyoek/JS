import * as data from './data.js';

const tableBody = document.querySelector('table > tbody');

window.onload = async (e) => {

    let students = await data.getStudents();

    students
        .sort((a, b) => a.ID - b.ID)
        .forEach(s => {

            const currentRow = document.createElement('tr');
            const idData = document.createElement('td');
            const firstNameData = document.createElement('td');
            const lastNameData = document.createElement('td');
            const facultyNumData = document.createElement('td');
            const gradeData = document.createElement('td');

            idData.textContent = s.ID;
            firstNameData.textContent = s.FirstName;
            lastNameData.textContent = s.LastName;
            facultyNumData.textContent = s.FacultyNumber;
            gradeData.textContent = s.Grade.toFixed(2);

            currentRow.appendChild(idData);
            currentRow.appendChild(firstNameData);
            currentRow.appendChild(lastNameData);
            currentRow.appendChild(facultyNumData);
            currentRow.appendChild(gradeData);

            tableBody.appendChild(currentRow);
        });
};
