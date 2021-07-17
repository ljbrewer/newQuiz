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

function startTimer() {
    var timeleft = 10;
    var downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Finished";
        } else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        }
        timeleft -= 1;
    }, 1000);
}
function startGame() {
   
console.log("in startGame")
    
    startButton.classList.add('hide')
    shuffledQuestions=questions.sort(() => Math.random() - .5)

    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')


    setNextQuestion()
}

function setNextQuestion(){
    startTimer()

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
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
       
    })
}

function selectAnswer(e){ 

    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
 
    setStatusClass(document.body, correct)

    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })

    if (shuffledQuestions.length > currentQuestionIndex + 1){

        nextButton.classList.remove('hide')
    } else {

        startButton.innerText= "Restart"
        currentQuestionIndex = 0
        startButton.classList.remove('hide')
    }

    if (correct){
        score++
        document.getElementById('win').innerHTML = "Score: " + score
       
    } else {
        timerCount = timerCount - 5;
    }
}

function setStatusClass(element, correct){

    clearStatusClass(element)
 
    if (correct) {
        element.classList.add('correct')

    } else {       
        element.classList.add('wrong')    
    }
  
}

function clearStatusClass(element){



    element.classList.remove('correct')
    element.classList.remove('wrong')
}


function resetState(){


    clearStatusClass(document.body)
  
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
 
    
}
// Questions with their answers
const questions = [
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        answers: [
            {text:"JavaScript", correct: false},
            { text: "console.log", correct: true },
            {text:"terminal/bash",correct: false},
            { text: "Html", correct: false }
        ]

    } ,
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            {text:"strings", correct: false},
            {text:"booleans", correct: false},
            {text:"alerts", correct: true},
            {text:"numbers", correct:false}
        ],

    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        answers: [
            { text: "numbers and strings", correct: false },
            { text: "other arrays", correct: false },
            { text: "booleans", correct: false },
            { text: "all of the above", correct: true }
        ],


    },
    {
        question: "The condition in an if/else statement is enclosed within _____.",
        answers: [
            { text: "parentheses", correct: true },
            { text: "quotes", correct: false },
            { text: "curly braces", correct: false},
            { text: "square brackets", correct: false }
        ],

    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables",
        answers: [
            { text: "commas", correct: false },
            { text: "curley braces", correct: false },
            { text: "quotes", correct: true },
            { text: "parentheses", correct: false}
        ],


    },

]