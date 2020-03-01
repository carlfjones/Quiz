let questions;
let questionsCount;
let currentQuestion;

let question_title_elem = document.getElementById("title");
let answers_elem = document.getElementById("answers");
let action_btn = document.getElementById("action_btn");

function getQuestions () {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState = 4 && this.status == 200) {
            questions = JSON.parse(this.responseText).questions;
            console.log(questions);
            
        }
    }
}