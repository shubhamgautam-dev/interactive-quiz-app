
const questionElement = document.getElementById("quiz-question");
const answerButtons = document.getElementsByClassName("answer-btn");
const nextButton = document.querySelector(".next-btn");

const questions = [
    {
        question: "What is HTML?",
        options: [
            "Hyper Text Markup Language",
            "Hyper Text Marking Language",
            "Hyper Transfer Markup Language",
            "High Text Markup Language"
        ],
        correct: 0
    },
    {
        question: "Which car holds the Guinness World Record for fastest speed in reverse?",
        options: [
            "Koenigsegg Jesko Attack",
            "Bugatti Centodieci",
            "Lamborghini Egoista",
            "Rimac Nevera"
        ],
        correct: 3
    },
    {
        question: "How many drivers compete in a standard F1 season?",
        options: [
            "10",
            "15",
            "20",
            "25"
        ],
        correct: 2
    },
    {
    question: "Which is the largest planet in our solar system?",
        options: [
         "Earth",
         "Jupiter",
         "Saturn",
         "Neptune"
        ],
        correct: 1
    }
];

let currentQuestion = 0;
let answered = false;

function loadQuestion() {
    const current = questions[currentQuestion];

    questionElement.textContent = current.question;

    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].textContent = current.options[i];
        answerButtons[i].disabled = false;
    }

    answered = false;
}

function checkAnswer(index) {
    if (answered) return;

    const correctAnswer = questions[currentQuestion].correct;

    if (index === correctAnswer) {
        alert("Correct answer!");
    } else {
        alert("Wrong answer! Please try again.");
    }

    answered = true;
}

for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", function() {
        checkAnswer(i);
    });
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz completed!");
    }
}

nextButton.addEventListener("click", nextQuestion);

loadQuestion();
