var box = document.querySelector('.main');
var topDiv = document.querySelector('.top-div');
var bottomDiv = document.querySelector('.bottom-div');
var timer = 80;
var timeLeft = document.querySelector('.quiz-timer');
var clockStart = true;
var clock = 0;
var question = -1;
var thisQuestion = [];
var htmlBody = document.querySelector('body');
var option = "";
var score = 0;
var x = 0;

function blankQuiz() {
    question++;
    topDiv.innerHTML = "";
    bottomDiv.innerHTML = "";
    pickQuestion();
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
            pickQuestion();
        }
        else if(timer > 0 & clockStart) {
            timeLeft.innerHTML = 'Time Remaining: ' + timer;
            timer--;
            clock = timer;
        } else {
            timeLeft.innerHTML = 'Time Remaining: ' + timer;
            clearInterval(startClock);
            clock = timer;
            clockStart = false;
            bottomDiv.innerHTML = '';

            return playerScores();
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
        thirdAnswer: "3. if(i == 5) {}",
        fourthAnswer: "4. if i==5 {}{}"
    };

    var sixthQuestion = {
        paragraph: "Strings must be enclosed with ___ when being assigned to variables",
        firstAnswer: "1. commas",
        secondAnswer: "2. parenthesis",
        thirdAnswer: "3. curly brackets",
        fourthAnswer: "4. quotes"
    };

    thisQuestion = [firstQuestion, secondQuestion, thirdQuestion, fourthQuestion, fifthQuestion, sixthQuestion];
    thisQuestion = thisQuestion[question];

    if(thisQuestion) {
        return makeQuestion(thisQuestion);
    } else {
        clockStart = false;
        return countdown();
    }
}

htmlBody.addEventListener('click', function() {
    var element = event.target
    var startButton = document.querySelector('.start-button');

    if(element === startButton) {
        startQuiz();
        element = '';
    }
    else if(element.className === 'submit') {
        var nameInitials = box.querySelector("input[name = 'initials']").value;
        return saveInitials(nameInitials);
    }
    else if(element.className === 'question-button') {
        answerKey(element);
    }
    else if(element.className === 'high-score-span') {
        nameInitials = "empty";
        saveInitials(element);
    } else {
        return;
    }
})

function isItRight() {
    var extraDiv = document.getElementById('extraDivId');
    if(extraDiv) {
        extraDiv.remove();
    }

    var div = document.createElement('div')
    div.className = 'extraDiv';
    div.setAttribute('id', 'extraDivId');
    box.appendChild(div);

    var divTwo = document.createElement('div');
    divTwo.className = 'extraDivTwo';
    div.appendChild(divTwo);

    var divP = document.createElement('p');
    divP.className = 'quiz-p';
    divP.innerHTML = option;
    divTwo.appendChild(divP);
}

function answerKey(element) {
    
    switch(element.innerHTML) {
        case "3. Alerts" :
            option = "Correct!";
            isItRight();
            blankQuiz();
            break;

        case "4. All of the above":
            option = "Correct!";
            isItRight();
            blankQuiz();
            break;

        case "4. alert('Hello World');":
            option = "Correct!";
            isItRight();
            blankQuiz();
            break;

        case "2. console.log" :
            option = "Correct!";
            isItRight();
            blankQuiz();
            break;

        case "3. if(i == 5) {}" :
            option = "Correct!";
            isItRight();
            blankQuiz();
            break;

        case "3. curly brackets" :
            option = "Correct!";
            isItRight();
            blankQuiz();
            break;
            default:
                option = "Wrong!";
                isItRight();
                timer -= 10;
                blankQuiz();
                break;
    }
}

function playerScores() {
    topDiv.innerHTML = "";

    clockStart = false;
    var h1Create = document.createElement('h1');
    h1Create.textContent = 'Finished!'
    topDiv.appendChild(h1Create);

    var pCreate = document.createElement('p');
    pCreate.textContent = 'Your final score is ' + score;

    var formCreate = document.createElement('form');
    formCreate.setAttribute('method', 'post');
    formCreate.setAttribute('action', 'submit');
    formCreate.innerHTML = "<div class='divThree'><label= for='initials'>Enter initials: </label><div class='divFour'><input type='text' name='initials' placeholder='Initials go here'</input>"

    topDiv.appendChild(formCreate);
}

function saveInitials(nameInitials) {
    var scoreArray = ["1) ", "2) ", "3) ", "4) ", "5) "];
    var current = localStorage.getItem(scoreArray[0]);

    var yourScore = {
        name: nameInitials,
        playerScore: score
    };
    timeLeft.innerHTML = 'Time Remaining: ' + score;

    if(current && yourScore.name) {
        while ( x <scoreArray.length) {

            var playerVar = JSON.parse(current);

            if(playerVar) {
                var playerScore = playerVar.playerScore;

                if(playerScore < score) {

                    localStorage.setItem(scoreArray[x], JSON.stringify(yourScore));
                    return highScores(scoreArray);
                } else {
                    x ++; return saveInitials(nameInitials);
                }
            } else {
                localStorage.setItem(scoreArray[x], JSON.stringify(yourScore));
                return highScores(scoreArray);
            }
        }
    } else if (yourScore.name) {
        localStorage.setItem(scoreArray[x], JSON.stringify(yourScore));
        return highScores(scoreArray);
    } else {
        divTwo.innerHTML = '';
        return highScores(scoreArray);
    }
}

function highScores(scoreArray) {
    divOne.innerHTML = "<h1 class='highscore'>High Scores:</h1>";
    var oL = document.createElement('ol');
    divOne.appendChild(oL);
    var divFour = document.getElementsByClassName('divFour');
    
    if(divFour.length > 0) {
        divFour = divFour[0];
        divFour.remove();
    }

    for (var i = 0; i < scoreArray.length; i++) {
        var current = localStorage.getItem(scoreArray[i]);
        var playerObj = JSON.parse(current);

        if(playerObj) {
            var playerName = playerObj.name;
            var playerScore = playerObj.playerScore;
            var lI = document.createElement('li');
            lI.textContent = playerName + " - " + playerScore;
            oL.appendChild(lI)
        } else {
            return;
        }
    }
}