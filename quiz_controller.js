
class Quiz {
    constructor(questions){
        this.questions = questions; 
        this.score = 0; 
        this.questionIndex = 0; 
    }

    getQuestionIndex(){
        return this.questions[this.questionIndex]; 
    }
    isEnded(){
        return this.questions.length >= this.questionIndex; 
    }
    guess(answer){
        this.questionIndex++; 

        if(this.getQuestionIndex().correctAnswer(answer)){
            this.score++
        }
    }
}

