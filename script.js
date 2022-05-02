var timerEl = document.getElementById('timer');
timerEl.addEventListener('click', timer);

function timer() {
    var timeLeft = 5;
    var timeInterval = setInterval(function() {
        if(timeLeft > 0) {
        timerEl.textContent = timeLeft;
        timeLeft--;
        } else {
        timerEl.textContent = "Time is up!";
        clearInterval(timeInterval);
        }
    }, 1000);
};

var questions = [
    "What is the primary purpose of JavaScript?",
    "Which of the following is NOT a primitive data type in JavaScript?",
    'The “===“ operator checks for what?',
]

var answers = [
        '1. Generating styled elements for a webpage.\n2. Applying attributes to text elements.\n3. Providing interactivity for webpages.\n4. Creating bald developers.'
]
var question = document.getElementById('question');

question.append(questions);
question.append(answers);

console.log('linked!');