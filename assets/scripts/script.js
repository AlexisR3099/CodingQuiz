var box = document.querySelector('.main');
var topDiv = document.querySelector('.top-div');
var bottomDiv = document.querySelector('.bottom-div');
var timer = 80;
var timeLeft = document.querySelector('.quiz-timer');
var clockStart = true;
var clock = 0;

function countdown() {
    var startClock = setInterval(function() {
        if(timer === 80 & clockStart) {
            timeLeft.innerHTML = 'Time Remaining: ' + timer;
            timer--;
            clock = timer;
        }
        else if(timer > 0 & clockStart) {
            timeLeft.innerHTML = 'Time Remaining: ' + timer;
            timer;
            clock = timer;
        } else {
            timeLeft.innerHTML = 'Time Remaining: ' + timer;
            clearInterval(startClock);
            clock = timer;
            clockStart = false;
            bottomDiv.innerHTML = '';
        }
    })
}