function getInfo() {

    const stopId = document.getElementById('stopId');
    const stopName = document.getElementById('stopName');
    const buses = document.getElementById('buses');

    const busesIds = ['1287', '1308', '1327', '2334'];

    const url = `https://judgetests.firebaseio.com/businfo/${stopId.value}.json`;

    buses.innerHTML = '';

    fetch(url)
        .then((response) => {

            if (!busesIds.includes(stopId.value) || response.status != 200) {

                stopName.textContent = 'Error';
                stopId.value = '';
                return;
            } else {

                return response.json();
            }
        })
        .then((data) => {
            stopName.textContent = data.name;

            const busesAndTimes = Object.entries(data.buses).map(([bus, time]) => [`Bus ${bus} arrives in ${time} minutes`]);

            busesAndTimes.forEach(busTime => {

                const list = document.createElement('li');
                list.textContent = busTime;

                buses.appendChild(list);
            });

            stopId.value = '';
        });
}