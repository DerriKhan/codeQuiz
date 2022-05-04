var question = document.getElementById('question');
var answer = document.getElementById('answer');
var timer = document.getElementById('timer');
var response = document.querySelector('button');
var startingIndex = 0;
var timeLeft = 60;
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

timer.addEventListener('click', countDown);
function countDown() {
    askQuestion()
    timeLeft
    setInterval(function() {
        if(timeLeft > 0) {
            timer.textContent = timeLeft;
            timeLeft--;
        } else {
            timer.textContent = "Time is up!";
        }
    }, 1000);
};

askQuestion();

function askQuestion() {
    question.append(questionsAndAnswers[startingIndex].question);
    questionsAndAnswers[startingIndex].answers.forEach(function(answers) {
        var button = document.createElement('button')
        button.textContent = answers;
        answer.append(button)
        button.addEventListener('click', (function() {
            var choice = button.textContent;
            if (choice === questionsAndAnswers[startingIndex].correctAnswer) {
                console.log("correct");
            } else {
                timeLeft = timeLeft - 10;
                 console.log("incorrect")
            }
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
        score();
    }
}

function score(timeLeft) {
    clearInterval(timeLeft);
    console.log(timeLeft);
    
}
