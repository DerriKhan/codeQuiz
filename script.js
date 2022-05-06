var boxBox = document.getElementById('boxBox');
var question = document.getElementById('question');
var answer = document.getElementById('answer');
var timer = document.getElementById('timer');
var response = document.querySelector('button');
var scoreForm = document.getElementById('scoreForm');
var submitButton = document.getElementById('submit');
var initials = document.createElement('input');
initials.type= "text";
var submit = document.createElement('button');
submit.type = 'submit';
submit.textContent = 'Submit';
// var initialsScore = document.createElement("button");

var startingIndex = 0;
var timeLeft = 59;
var moreQuestion
var questionsAndAnswers = [
    {   question: 'What is the primary purpose of JavaScript?',
        answers: [
        "Generating styled elements for a webpage.",
		"Applying attributes to text elements.",
		"Providing interactivity for webpages.",
		"Creating bald developers."
    ],
    correctAnswer: "Providing interactivity for webpages."
},
{   question: 'Which of the following is NOT a primitive data type in JavaScript?',
answers: [
    'Array',
    'Null',
    'Boolean',
    'Number'
],
correctAnswer: 'Array'
},
{   question: 'The “===“ operator checks for what?',
answers: [
    'Equal data',
    'Equal data & type',
    'Equal type',
    'If you want to supersize for only $0.25'
],
correctAnswer: 'Equal data & type'
},
{   question: 'DOM is an acronym for what?',
answers: [
    'Deliberate Obscure Method',
    'Descriptive Object Mention',
	'Downsize Obtuse Monoliths',
	'Document Object Model'
    ],
    correctAnswer: 'Document Object Model'
},
{   question: 'Where is an external javaScript file usually linked in HTML?',
answers: [
    'Inside the affected element tag',
    'Inside the <head> tag',
    'Within the <DOCTYPE> tag',
    'Javascript files are linked automatically'
],
correctAnswer: 'Inside the <head> tag'
},
]

question.textContent = "Click Start Quiz To Begin";
answer.textContent= "Answer Carefully, Incorrect Responses Deduct 10 points!"

timer.addEventListener('click', countDown);
function countDown() {
    question.textContent = "";
    answer.textContent = "";
    initials.innerHTML = "";
    askQuestion()
    timeLeft
    scoreClock = setInterval(function() {
        if(timeLeft > 0) {
            timer.textContent = timeLeft;
            timeLeft--;
        } else {
            timer.textContent = "Time is up!";
            boxBox.textContent = "You ran out of time";
        }
    }, 1000);
};

function askQuestion() {
    question.append(questionsAndAnswers[startingIndex].question);
    questionsAndAnswers[startingIndex].answers.forEach(function(answers) {
        var button = document.createElement('button')
        button.textContent = answers;
        answer.append(button)
        button.addEventListener('click', (function() {
            var choice = button.textContent;
            if (choice === questionsAndAnswers[startingIndex].correctAnswer) {
            } else {
                timeLeft = timeLeft - 10;
            };
            nextQuestion();
        }));
    });
};

function nextQuestion() {
    startingIndex++
    if(startingIndex < questionsAndAnswers.length) {
        question.textContent = "";
        answer.textContent = "";
        askQuestion();
    } else {
        end();
    }
}

function end() {
    clearInterval(scoreClock);
    question.textContent = "";
    answer.textContent = "";
    recordScore();
}
function recordScore() {
    document.createElement
    question.textContent = "Complete! You scored a " + timer.textContent + "!";
    answer.textContent = 'Enter your initials to record your score!';
    scoreForm.appendChild(initials);
    submitButton.appendChild(submit);
}

window.localStorage.clear();
submit.addEventListener('click', captureScore)

function captureScore() {
    localStorage.setItem('player', document.querySelector("input").value);
    localStorage.setItem('score', timer.textContent);
    question.textContent = "";
    answer.textContent = "";
    scoreForm.innerHTML = "";
    submitButton.innerHTML = "";
    displayScores();
}

function displayScores () {
    question.textContent = "High Scores:"
    answer.append(localStorage.getItem('player '), localStorage.getItem(' score'));
}