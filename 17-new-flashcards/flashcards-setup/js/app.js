
// event listeners
function eventListeners(){
    const showBtn = document.getElementById("show-btn");
    const questionCard = document.querySelector(".question-card");
    const closeBtn = document.querySelector(".close-btn");
    const form = document.getElementById("question-form");
    const feedback = document.querySelector(".feedback");
    const questionInput = document.getElementById("question-input");
    const answerInput = document.getElementById("answer-input");
    const questionList = document.getElementById("questions-list");
    let data = [];
    let id = 1;

    // create UI instance.
    const ui = new UI();

    // show question form
    showBtn.addEventListener("click", function(){
        ui.showQuestion(questionCard);
    })
}

// UI constructor
function UI(){}

UI.prototype.showQuestion = function(questionCard){
    questionCard.classList.add('showItem');          // this shows the question-anwer form.
}

// hide question card

UI.prototype.hideQuestion = function(questionCard){
    questionCard.classList.remove('showItem');          // this shows the question-anwer form.
}


// question constructor
function Question(){

}


// dom event listener
document.addEventListener("DOMContentLoaded", function(){
    eventListeners();
})