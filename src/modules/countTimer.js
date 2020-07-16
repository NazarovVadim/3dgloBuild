function countTimer(deadline){
    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');


        function getTimeRemaining(){
            let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60); //% 24 если необходимо количество дней!
            //day = Math.floor(timeRemaining / 60 / 60 / 24);

            if(timeRemaining <= 0){
                seconds = 0;
                minutes = 0;
                hours = 0;
            }
            return {timeRemaining, hours ,minutes, seconds};
        }

        function update(){
            let timer = getTimeRemaining();
            timerHours.textContent = (timer.hours < 10) ? `0${timer.hours}` : timer.hours;
            timerMinutes.textContent = (timer.minutes < 10) ? `0${timer.minutes}` : timer.minutes;
            timerSeconds.textContent = (timer.seconds < 10) ? `0${timer.seconds}` : timer.seconds;
            return (timer > 0) ? true : false;
        }

        update();
        if(update){
            let interval = setInterval(update, 1000);
        } else{
            clearInterval(interval);
        }
}

export default countTimer;