var box = document.querySelector('.main');
var topDiv = document.querySelector('.top-div');
var bottomDiv = document.querySelector('.bottom-div');
var timer = 80;
var timeLeft = document.querySelector('.quiz-timer');
var clockStart = true;
var clock = 0;
var question = -1;
var thisQuestion = [];

function blankQuiz() {
    question++;
    topDiv.innerHTML = "";
    bottomDiv.innerHTML = "";
};

function startQuiz() {
    question++;
    topDiv.innerHTML = "";
    bottomDiv.innerHTML = "";
    countdown();
}

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
    }, 1000);
}

function makeQuestion(thisQuestion) {
    var paragraphs = document.createElement('p');
    paragraphs.className = 'question-p';
    paragraphs.innerHTML = thisQuestion.paragraph;
    topDiv.appendChild(paragraphs);

    var nextButton = document.createElement('button');
    nextButton.className = 'question-button';
    nextButton.innerHTML = thisQuestion.firstAnswer;
    bottomDiv.appendChild(nextButton);

    var nextButtonTwo = document.createElement('button');
    nextButtonTwo.className = 'question-button';
    nextButtonTwo.innerHTML = thisQuestion.secondAnswer;
    bottomDiv.appendChild(nextButtonTwo);

    var nextButtonThree = document.createElement('button');
    nextButtonThree.className = 'question-button';
    nextButtonThree.innerHTML = thisQuestion.thirdAnswer;
    bottomDiv.appendChild(nextButtonThree);

    var nextButtonFour = document.createElement('button');
    nextButtonFour.className = 'question-button';
    nextButtonFour.innerHTML = thisQuestion.fourthAnswer;
    bottomDiv.appendChild(nextButtonFour);
}

function pickQuestion() {
    var firstQuestion = {
        paragraph: "Commonly used data types DO NOT include: ",
        firstAnswer: "1. Strings",
        secondAnswer: "2. Booleans",
        thirdAnswer: "3. Alerts",
        fourthAnswer: "4. Integers"
    };

    var secondQuestion = {
        paragraph: "Arrays in JavaScript can be used to store ___ ",
        firstAnswer: "1. Numbers and strings",
        secondAnswer: "2. Other arrays",
        thirdAnswer: "3. Booleans",
        fourthAnswer: "4. All of the above"
    };

    var thirdQuestion = {
        paragraph: "How would you write 'Hello World' in an alert box? ",
        firstAnswer: "1. msg('Hello World');",
        secondAnswer: "2. msgBox('Hello World');",
        thirdAnswer: "3. alertBox('Hello World');",
        fourthAnswer: "4. alert('Hello World');"
    };

    var fourthQuestion = {
        paragraph: "A very useful tool used during development and debugging for printing content to the debugger is ___ ",
        firstAnswer: "1. JavaScript",
        secondAnswer: "2. console.log",
        thirdAnswer: "3. terminal/bash",
        fourthAnswer: "4. for loops"
    };

    var fifthQuestion = {
        paragraph: "How do you write an 'if' statement in JavaScript? ",
        firstAnswer: "1. if i==5 then",
        secondAnswer: "2. if i=5 then",
        thirdAnswer: "3. if(i==5) {}",
        fourthAnswer: "4. if i==5 {}{}"
    };

    var sixthQuestion = {
        paragraph: "Strings must be enclosed with ___ when being assigned to variables",
        firstAnswer: "1. commas",
        secondAnswer: "2. parenthesis",
        thirdAnswer: "3. curly brackets",
        fourthAnswer: "4. quotes"
    };
}