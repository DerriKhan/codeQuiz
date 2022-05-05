var boxBox = document.getElementById('boxBox');
var question = document.getElementById('question');
var answer = document.getElementById('answer');
var timer = document.getElementById('timer');
var response = document.querySelector('button');
var displayResponse = document.getElementById('response');
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

timer.addEventListener('click', countDown);
function countDown() {
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
                // displayResponse.textContent = "Correct";
                // fade();
            } else {
                timeLeft = timeLeft - 10;
                //  displayResponse.textContent = "Incorrect";
                //  fade();
            };
            
            nextQuestion();
        }));
    });
};

// fade(function() {
//     displayResponse.textContent = "";
// }, 1000);

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
    console.log(timer.textContent);
    question.textContent = "";
    answer.textContent = "";
    recordScore();
}
function recordScore() {
    question.textContent = "Complete! You scored a " + timer.textContent + "!";
    answer.textContent = 'Enter your initials to record your score!';
    // var name = document.getElementsByTagName('input').value;
    // console.log(name)
}