var counter = 0;
var timer = 75;
var body = document.body;
var countdown = document.getElementById("countdown");
var deductBoolean = false;
//Start Page
var h1El = document.createElement("h1");
var pEl = document.createElement("p");
var buttonStart = document.createElement("button");
//Question Pages
var questionList = document.createElement("ul");
var answerOne = document.createElement("li");
var answerTwo = document.createElement("li");
var answerThree = document.createElement("li");
var answerFour = document.createElement("li");
//Checked Answer Messege
var pageDivider = document.createElement("hr");
var displayMsg = document.createElement("h2");
//Final Scores Page
var pScore = document.createElement("p");
var initialsForm = document.createElement("form");
var pForm = document.createElement("p");
var labelForm = document.createElement("label");
var inputForm = document.createElement("input");
var buttonForm = document.createElement("button");
//High Scores Page
var scoreList = document.createElement("ol");
var scoreOne = document.createElement("li");
var scoreTwo = document.createElement("li");
var scoreThree = document.createElement("li");
var scoreFour = document.createElement("li");
var scoreFive = document.createElement("li");

var quizQuestions = [
    ["Which of the following is not a commonly used data type?", "1. Numbers", "2. Strings", "3. Integers", "4. Boolean"],
    ["Conditional statements (if-else, for, while) are enclosed within ______.", "1. Parentheses", "2. Curly Brackets", "3. Square Brackets", "4. Quotes"],
    ["Arrays in Javascript can be used to store ______.", "1. Strings", "2. Arrays", "3. Numbers", "4. All of the above"],
    ["String variables are always set to a value enclosed in ______.", "1. Parentheses", "2. Curly Brackets", "3. Single Quotes", "4. Double Quotes"],
    ["What should you utilize if you're trying to display all contents of an array?", "1. for loop", "2. if-else statement", "3. switch statement", "4. All of the above"],
];

function setTimer() {
    var timerInterval = setInterval(function() {
        timer--;
        if(deductBoolean === true) {
            timer -= 10;
            deductBoolean = false;
        }

        countdown.textContent = "Timer: " + timer;
        
        if(counter === 5) {
            clearInterval(timerInterval);
            finalScore(timer);
        }
        if(timer === 0 || timer < 0) {
            clearInterval(timerInterval);
            timer = 0;
            countdown.textContent = "Timer: 0";
            finalScore(timer);
        }
    }, 1000);
}

function quizStart() {
    h1El.textContent = "Coding Quiz Challenge";
    pEl.textContent = "Try and answer the following Javascript related questions before the timer runs out. Keep in mind that incorrect answers deduct 10 seconds off the timer.";
    buttonStart.textContent = "Start Quiz";

    body.appendChild(h1El);
    body.appendChild(pEl);
    body.appendChild(buttonStart);

    
    h1El.setAttribute("style", "width:50%; text-align:center; margin:2% auto;");
    pEl.setAttribute("style", "width:50%; text-align:center; margin:1% auto;");
    buttonStart.setAttribute("style", "width:10%; text-align:center; margin:1% 45%; background-color:#AA36B5; color:#FFFFFF; border-radius:5px;");
    
}

function initializeQuiz() {
    pEl.remove();
    buttonStart.remove();
    body.appendChild(questionList);
    questionList.appendChild(answerOne);
    questionList.appendChild(answerTwo);
    questionList.appendChild(answerThree);
    questionList.appendChild(answerFour);

    h1El.textContent = quizQuestions[counter][0];
    answerOne.textContent = quizQuestions[counter][1];
    answerTwo.textContent = quizQuestions[counter][2];
    answerThree.textContent = quizQuestions[counter][3];
    answerFour.textContent = quizQuestions[counter][4];
    
    answerOne.setAttribute("style", "width:fit-content; text-align:left; margin:1% 25%; background-color:#AA36B5; color:#FFFFFF; border:1px solid #000; border-radius:5px; padding:2px 7px;");
    answerTwo.setAttribute("style", "width:fit-content; text-align:left; margin:1% 25%; background-color:#AA36B5; color:#FFFFFF; border:1px solid #000; border-radius:5px; padding:2px 7px;");
    answerThree.setAttribute("style", "width:fit-content; text-align:left; margin:1% 25%; background-color:#AA36B5; color:#FFFFFF; border:1px solid #000; border-radius:5px; padding:2px 7px;");
    answerFour.setAttribute("style", "width:fit-content; text-align:left; margin:1% 25%; background-color:#AA36B5; color:#FFFFFF; border:1px solid #000; border-radius:5px; padding:2px 7px;");

}

function quizQuestion(event) {
    
    checkQuestion(event);
    counter++;
    if(counter === 5) {
        return;
    }
    
    h1El.textContent = quizQuestions[counter][0];
    answerOne.textContent = quizQuestions[counter][1];
    answerTwo.textContent = quizQuestions[counter][2];
    answerThree.textContent = quizQuestions[counter][3];
    answerFour.textContent = quizQuestions[counter][4]; 
}

function checkQuestion(event) {
    if(event.target.textContent == "Start Quiz") {
        return 0;
    } if((event.target.textContent == quizQuestions[0][3]) || (event.target.textContent == quizQuestions[1][2]) || (event.target.textContent == quizQuestions[2][4]) || (event.target.textContent == quizQuestions[3][4]) || (event.target.textContent == quizQuestions[4][1])) {
        displayMsg.textContent = "Correct";
        body.appendChild(pageDivider);
        body.appendChild(displayMsg);
        setTimeout(function(){
            pageDivider.remove();
            displayMsg.textContent = "";
        }, 3000);
    } else {
        deductBoolean = true;
        displayMsg.textContent = "Wrong";
        body.appendChild(pageDivider);
        body.appendChild(displayMsg);
        setTimeout(function(){
            pageDivider.remove();
            displayMsg.textContent = "";
        }, 3000);
    }
}

function finalScore(timer) {
    h1El.textContent = "Game Over!!!";
    questionList.remove();
    displayMsg.remove();
    body.appendChild(pScore);
    body.appendChild(initialsForm);
    initialsForm.appendChild(pForm);
    pForm.appendChild(labelForm);
    pForm.appendChild(inputForm);
    pForm.appendChild(buttonForm);

    pScore.textContent = "Your final score is: " + timer;
    labelForm.textContent = "Enter initials: ";
    buttonForm.textContent = "Submit";
    

    initialsForm.setAttribute("style", "width:50%; text-align:left; margin:2% 25%;");
    pScore.setAttribute("style", "color:#000000; margin:1% 25%; text-align:left;");
    labelForm.setAttribute("style", "color:#000000; text-align:left;")
    buttonForm.setAttribute("style", "width:fit-content; text-align:left; background-color:#AA36B5; color:#FFFFFF; margin-left:7px; border-radius:5px; padding:2px 7px;");

}

function highScores() {
    h1El.textContent = "HighScores";
    initialsForm.remove();
    pScore.remove();
    body.appendChild(scoreList);
    scoreList.appendChild(scoreOne);
    scoreList.appendChild(scoreTwo);
    scoreList.appendChild(scoreThree);
    scoreList.appendChild(scoreFour);
    scoreList.appendChild(scoreFive);

    scoreOne.textContent = inputForm.value + " - " + timer;
}


quizStart();
buttonStart.addEventListener("click", initializeQuiz);
buttonStart.addEventListener("click", setTimer);
answerOne.addEventListener("click", quizQuestion);
answerTwo.addEventListener("click", quizQuestion);
answerThree.addEventListener("click", quizQuestion);
answerFour.addEventListener("click", quizQuestion);
buttonForm.addEventListener("click", highScores);





//highscores page
