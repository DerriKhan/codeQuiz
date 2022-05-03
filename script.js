var question = document.getElementById('question');
var answer = document.getElementById('answer');
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

var questionsAndAnswers = [
    {   question: 'What is the primary purpose of JavaScript?',
        answers: {
        a: 'Generating styled elements for a webpage.',
		b: 'Applying attributes to text elements.',
		c: 'Providing interactivity for webpages.',
		d: 'Creating bald developers.'
        },
        correctAnswer: 'c'
    },
    {   question: 'Which of the following is NOT a primitive data type in JavaScript?',
        answers: {
        a: 'Array',
		B: 'Null',
		c: 'Boolean',
		d: 'Number'
        },
        correctAnswer: 'a'
    },
    {   question: 'The “===“ operator checks for what?',
        answers: {
        a: 'Equal data',
		b: 'Equal data & type',
		c: 'Equal type',
		d: 'If you want to supersize for only $0.25'
        },
        correctAnswer: 'b'
    },
    {   question: 'DOM is an acronym for what?',
        answers: {
        a: 'Deliberate Obscure Method',
		b: 'Descriptive Object Mention',
		c: 'Downsize Obtuse Monoliths',
		d: 'Document Object Model'
        },
        correctAnswer: 'd'
    },
    {   question: 'Where is an external javaScript file usually linked in HTML?',
        answers: {
        a: 'Inside the affected element tag',
        b: 'Inside the <head> tag',
        c: 'Within the <DOCTYPE> tag',
        d: 'Javascript files are linked automatically'
        },
        correctAnswer: 'b'
    },
]

question.append(questionsAndAnswers[1].question)
answer.append(questionsAndAnswers[1].answers)




console.log(questionsAndAnswers);
console.log('linked!');