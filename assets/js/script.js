const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')

const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

let score = 0;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    console.log("in nextButton")
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log("in startGame")
startButton.classList.add('hide')
shuffledQuestions=questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion(){
    console.log("in setNextQuestion")
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    console.log("in showQuestion")
 
    questionElement.textContent = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct=answer.correct
            score++
            console.log("score is " + score)

        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
function selectAnswer(e){ 
    console.log("In selectAnswer")
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex +1){
    nextButton.classList.remove('hide')
    } else {
        startButton.innerText= "Restart"
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct){
    console.log("In setStatusClass")
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){

    console.log("In clearStatusClass")
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


function resetState(){
    console.log("In resetState")
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
const questions = [
    {
        question: "Question 1",
        answers: [
            {text:'4', correct: true},
            {text:'22',correct: false},
            { text: "Answer 3", correct: false },
            { text: "Answer 4", correct: false }
        ]

    } ,
    {
        questiontext: "This is question 2",
        answers: [
            {text:"Answer 1", correct: true},
            {text:"Answer 2", correct: false},
            {text:"Answer 3", correct: false},
            {text:"Answer 4", correct: false}
        ],

    },
    {
        questiontext: "This is question 3",
        answers: [
            { text: "Answer 1", correct: true },
            { text: "Answer 2", correct: false },
            { text: "Answer 3", correct: false },
            { text: "Answer 4", correct: false }
        ],


    },
    {
        questiontext: "This is question 4",
        answers: [
            { text: "Answer 1", correct: true },
            { text: "Answer 2", correct: false },
            { text: "Answer 3", correct: false },
            { text: "Answer 4", correct: false }
        ],

    },
    {
        questiontext: "This is question 5",
        answers: [
            { text: "Answer 1", correct: true },
            { text: "Answer 2", correct: false },
            { text: "Answer 3", correct: false },
            { text: "Answer 4", correct: false }
        ],


    },

]