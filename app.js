const populate = () => {
    if(quiz.isEnded()){
        showScore(); 
    } else {
        // show question
        let element = document.getElementById("question"); 
        element.innerHTML = quiz.getQuestionIndex().text; 

        //show choices
        let choices = quiz.getQuestionIndex().choices; 
        for(let i = 0; i < choices.length; i++){
            let element = document.getElementById("choice" + i)
            element.innerHTML = choices[i]; 
            guess("btn" + i, choices[i])
        }
        //update question
        showProgress(); 
    }
}; 

const guess = (id, guess) => {
    let button = document.getElementById(id); 
    button.onclick = ()=> {
        quiz.guess(guess); 
        populate(); 
    }
}; 

const showProgress = () => {
    let currentQuestionNumber = quiz.questionIndex + 1; 
    let element = document.getElementById("progress")
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length; 
}

const showScore = () => {
    let gameOverHtml = "<h1>Result</h1>"; 
    gameOverHtml += "<h2 id='score'> YOur scores: " + quiz.score +"</h2>"
    let element = document.getElementById("quiz"); 
    element.innerHTML = gameOverHtml; 
}

const questions = [
    new Question("Which is not an object-oriented programming language?", ["Java", "C#", "C++", "C"], "C"), 
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"), 
    new Question ("There are ____ main components of object oriented programming.", ["5", "6", "3", "4"], "4"), 
    new Question ("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"), 
    new Question ("MCV is a _____.", ["Language", "Library", "Protocol", "All"], "Protocol")
]; 

const quiz = new Quiz(questions); 

populate(); 