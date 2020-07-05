function solve() {

    const infoDiv = document.querySelector('#info > span');
    let url = `https://judgetests.firebaseio.com/schedule/depot.json`;

    function depart() {

        fetch(url)
            .then((response) => {

                if (response.status != 200) {

                    validate();

                } else {

                    return response.json();
                }
            })
            .then((data) => {

                let currentStopName = data.name;

                infoDiv.textContent = `Next stop ${currentStopName}`;
                document.getElementById('depart').disabled = true;
                document.getElementById('arrive').disabled = false;
            });
    }

    function arrive() {

        fetch(url)
            .then((response) => {

                if (response.status != 200) {

                    validate();

                } else {

                    return response.json();
                }
            })
            .then((data) => {

                let nextStopId = data.next;
                let currentStopName = data.name;

                infoDiv.textContent = `Arriving at ${currentStopName}`;
                document.getElementById('depart').disabled = false;
                document.getElementById('arrive').disabled = true;

                url = `https://judgetests.firebaseio.com/schedule/${nextStopId}.json`;
            });
    }

    function validate() {

        infoDiv.textContent = 'Error';
        document.getElementById('depart').disabled = true;
        document.getElementById('arrive').disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();