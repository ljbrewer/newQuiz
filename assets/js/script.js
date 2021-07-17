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

  //  console.log("shuffledQuestions", shuffledQuestions)

    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
 
   console.log("in startGame setnextquestion is next")

    setNextQuestion()
}

function setNextQuestion(){
    startTimer()
console.log("in setNextQuestion")
    console.log("going to resetState")
    resetState()
    console.log("back from resetState going to showQuestion")
    showQuestion(shuffledQuestions[currentQuestionIndex])
    console.log("back from showQuestion")
   // console.log(showQuestion, " is the next question")
}

function showQuestion(question){

console.log("in showQuestion")
 
    questionElement.textContent = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){

       console.log("in showQuesiton If")

            button.dataset.correct=answer.correct

         //   console.log("button.dataset.correct " + button.dataset.correct)
            

        }
        console.log("going to selectAnswer")
        button.addEventListener('click', selectAnswer)
        console.log("back from selectAnswer")
        answerButtonsElement.appendChild(button)
       
    })
}

function selectAnswer(e){ 

console.log("In selectAnswer")

    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
 
    console.log("going to  setStatusClass")
    setStatusClass(document.body, correct)
    console.log("back to selectAnswer from setStatusClass")
    console.log(correct + " is the selectAnswer func")
    console.log("going to  setStatusClass")
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
        console.log("back from setStatusClass")
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){

      //  console.log(shuffledQuestions.length, "is the length of array", currentQuestionIndex)

        nextButton.classList.remove('hide')
    } else {

        console.log("in selectAnswer else")
        startButton.innerText= "Restart"
        currentQuestionIndex = 0
        startButton.classList.remove('hide')
    }
    if (correct){
        score++
        console.log("score is " + score)
    } else {
        timerCount = timerCount - 5;
    }
}

function setStatusClass(element, correct){
 console.log("In setStatusClass")
    console.log("go to clearStatusClass")
    clearStatusClass(element)
    console.log("back from clearStatusClass")
    

    if (correct) {
        element.classList.add('correct')
        console.log("correct in setStatusClass if " + correct)
      
       
        console.log("in setStatusClass if")
        
    } else {

        console.log("in else of setStatusClass")
    
        
        element.classList.add('wrong')
        
        console.log( "in setStatusClass else the answer wrong")
       
    }
    console.log("end of  setStatusClass")
}

function clearStatusClass(element){

console.log("In clearStatusClass")

    element.classList.remove('correct')
    element.classList.remove('wrong')
}


function resetState(){

    console.log("In resetState")
    console.log("going to clearStatusClass")
    clearStatusClass(document.body)
    console.log("back from clearStatusClass")
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
    console.log("leaving resetState ")
    
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