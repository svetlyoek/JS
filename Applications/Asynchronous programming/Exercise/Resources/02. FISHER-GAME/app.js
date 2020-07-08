import * as data from './data.js';

const loadBtn = document.querySelector('button.load');
const addBtn = document.querySelector('button.add');
const catchesDiv = document.getElementById('catches');

loadBtn.addEventListener('click', async function loadCatches() {

    let allCatchesData = '';

    try {
        catchesDiv.innerHTML = '';

        allCatchesData = await data.getAllCatches();

        for (let key of Object.keys(allCatchesData)) {

            const catchDiv = document.createElement('div');
            catchDiv.classList.add('catch');
            catchDiv.setAttribute('data-id', key);

            const anglerLabel = document.createElement('label');
            const weightLabel = document.createElement('label');
            const speciesLabel = document.createElement('label');
            const locationLabel = document.createElement('label');
            const baitLabel = document.createElement('label');
            const captureTimeLabel = document.createElement('label');

            anglerLabel.textContent = 'Angler';
            weightLabel.textContent = 'Weight';
            speciesLabel.textContent = 'Species';
            locationLabel.textContent = 'Location';
            baitLabel.textContent = 'Bait';
            captureTimeLabel.textContent = 'Capture Time';

            const anglerInput = document.createElement('input');
            const weightInput = document.createElement('input');
            const speciesInput = document.createElement('input');
            const locationInput = document.createElement('input');
            const baitInput = document.createElement('input');
            const captureTimeInput = document.createElement('input');

            anglerInput.type = 'text';
            weightInput.type = 'number';
            speciesInput.type = 'text';
            locationInput.type = 'text';
            baitInput.type = 'text';
            captureTimeInput.type = 'number';

            anglerInput.classList.add('angler');
            weightInput.classList.add('weight');
            speciesInput.classList.add('species');
            locationInput.classList.add('location');
            baitInput.classList.add('bait');
            captureTimeInput.classList.add('captureTime');

            anglerInput.value = allCatchesData[key].angler;
            weightInput.value = allCatchesData[key].weight;
            speciesInput.value = allCatchesData[key].species;
            locationInput.value = allCatchesData[key].location;
            baitInput.value = allCatchesData[key].bait;
            captureTimeInput.value = allCatchesData[key].captureTime;

            const updateBtn = document.createElement('button');
            updateBtn.textContent = 'Update';
            updateBtn.classList.add('update');

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete');

            const firstHr = document.createElement('hr');
            const secondHr = document.createElement('hr');
            const thirdHr = document.createElement('hr');
            const fourthHr = document.createElement('hr');
            const fifthHr = document.createElement('hr');
            const sixthHr = document.createElement('hr');

            firstHr.setAttribute('width', '265px');
            secondHr.setAttribute('width', '265px');
            thirdHr.setAttribute('width', '265px');
            fourthHr.setAttribute('width', '265px');
            fifthHr.setAttribute('width', '265px');
            sixthHr.setAttribute('width', '265px');

            catchDiv.appendChild(anglerLabel);
            catchDiv.appendChild(anglerInput);
            catchDiv.appendChild(firstHr);

            catchDiv.appendChild(weightLabel);
            catchDiv.appendChild(weightInput);
            catchDiv.appendChild(secondHr);

            catchDiv.appendChild(speciesLabel);
            catchDiv.appendChild(speciesInput);
            catchDiv.appendChild(thirdHr);

            catchDiv.appendChild(locationLabel);
            catchDiv.appendChild(locationInput);
            catchDiv.appendChild(fourthHr);

            catchDiv.appendChild(baitLabel);
            catchDiv.appendChild(baitInput);
            catchDiv.appendChild(fifthHr);

            catchDiv.appendChild(captureTimeLabel);
            catchDiv.appendChild(captureTimeInput);
            catchDiv.appendChild(sixthHr);

            catchDiv.appendChild(updateBtn);
            catchDiv.appendChild(deleteBtn);

            deleteBtn.addEventListener('click', async function (e) {

                await data.deleteCatch(key);

                loadCatches();
            });

            updateBtn.addEventListener('click', async function (e) {

                const newCatch = {
                    angler: anglerInput.value,
                    weight: weightInput.value,
                    species: speciesInput.value,
                    location: locationInput.value,
                    bait: baitInput.value,
                    captureTime: captureTimeInput.value
                };

                await data.updateCatch(key, newCatch);
                loadCatches();
            });

            catchesDiv.appendChild(catchDiv);
        }

        addBtn.addEventListener('click', async function (e) {

            const anglerInput = document.querySelector('#addForm input.angler');
            const weightInput = document.querySelector('#addForm input.weight');
            const speciesInput = document.querySelector('#addForm input.species');
            const locationInput = document.querySelector('#addForm input.location');
            const baitInput = document.querySelector('#addForm input.bait');
            const captureTimeInput = document.querySelector('#addForm input.captureTime');

            const newCatch = {
                angler: anglerInput.value,
                weight: weightInput.value,
                species: speciesInput.value,
                location: locationInput.value,
                bait: baitInput.value,
                captureTime: captureTimeInput.value
            };

            await data.createCatch(newCatch);

            loadCatches();

            anglerInput.value = '';
            weightInput.value = '';
            speciesInput.value = '';
            locationInput.value = '';
            baitInput.value = '';
            captureTimeInput.value = '';
        });

    } catch (error) {

        console.log('Error');
    }
});




