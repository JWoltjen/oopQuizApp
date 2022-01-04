const questions = [
    new Question("Which is not an object-oriented programming language?", ["Java", "C#", "C++", "C"], "C"), 
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"), 
    new Question ("There are ____ main components of object oriented programming.", ["5", "6", "3", "4"], "4"), 
    new Question ("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"), 
    new Question ("MCV is a _____.", ["Language", "Library", "Protocol", "All"], "Protocol")
]; 

const quiz = new Quiz(questions)