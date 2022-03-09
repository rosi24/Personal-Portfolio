const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = {}

let questions = [
    {
        question: What is 2 + 2 ?,
        choice1: '2',
        choice2: '3',
        choice3: '4',
        choice4: '5',
        answer: 2,
    },
    {
        question: What is 5 + 7 ?,
        choice1: '12',
        choice2: '8',
        choice3: '1',
        choice4: '27',
        answer: 1,
    },
    {
        question: What is 9 + 1 ?,
        choice1: '24',
        choice2: '31',
        choice3: '10',
        choice4: '15',
        answer: 3,
    },
    {
        question: What is 3 + 7 ?,
        choice1: '10',
        choice2: '14',
        choice3: '41',
        choice4: '51',
        answer: 1,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {    
    localStorage.setItem('mostRecentScore', score)

    return window.location.assign('/end.html')
}

    questionCounter++
    progressText.innerText = 'Question ${quetionCounter} of ${MAX_QUESTIONS}'
    progressBarFull.style.width = '${(questionCounter/MAX_QUESTIONS) * 100}%

    
}