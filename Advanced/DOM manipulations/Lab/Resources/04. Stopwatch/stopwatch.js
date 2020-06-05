function stopwatch() {

    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const output = document.getElementById('time');
    let seconds = 0;
    let minutes = 0;
    var intervalId = 0;

    [...document.querySelectorAll('button')].forEach(btn => btn.addEventListener('click', function (e) {
        e.preventDefault();

        let currentBtn = e.target;

        if (currentBtn.textContent === 'Start') {
            currentBtn.disabled = true;
            stopBtn.disabled = false;

            intervalId = setInterval(() => {
                seconds++;
                if (seconds === 60) {
                    seconds = 0;
                    minutes++;
                }
                let secondsString = seconds.toString();
                let minutesString = minutes.toString();

                if (minutes < 10) {
                    minutesString = `0${minutes}`;
                }
                if (seconds < 10) {
                    secondsString = `0${seconds}`;
                }

                output.textContent = `${minutesString}:${secondsString}`;

            }, 1000);


        } else if (currentBtn.textContent === 'Stop') {

            currentBtn.disabled = true;
            startBtn.disabled = false;
            clearInterval(intervalId);
            minutes = 0;
            seconds = 0;
            output.textContent = '00:00';
        }
    }));

}