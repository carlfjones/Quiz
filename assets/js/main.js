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

            questionsCount = questions.length;
            
            currentQuestion = 0;
            
        }
    }
    request.open("GET", "/questions.json",  false);
    request.send();
}

function displayQuestion (question) {
    question_title_elem.innerHTML = "";
    answers_elem.innerHTML = "";

    let question_title = document.createTextNode(question.title);
    question_title_elem.appendChild(question_title);

    question.answers.forEach(answer => {
        let label = document.createElement("label");

        let answer_input = document.createElement("input");
        answer_input.setAttribute("type", "radio");
        answer_input.setAttribute("name", "answer");
        answer_input.setAttribute("value", "answer.id");
        answer_input.classList.add("answer");

        let answer_title = document.createTextNode(answer.answer);
        label.appendChild(answer_input);
        label.appendChild(answer_title);

        answers_elem.appendChild(label);
        
    });
}

// Initialisation
getQuestions();
displayQuestion(questions[currentQuestion]);
