
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
    });
    // hide form
    closeBtn.addEventListener('click', function(){
        ui.hideQuestion(questionCard);
    });
    // add quesion- form submission
    form.addEventListener('submit', function(e){
        e.preventDefault();
        
        const questoinValue = questionInput.value;
        const answerValue = answerInput.value;

        if(questoinValue === '' ||answerValue === ''){
            feedback.classList.add('showItem', 'alert-danger');  //feedback is shows only if its empty.
            feedback.textContent = 'Cannot add empty values!';

            setTimeout(function(){
                feedback.classList.remove('showItem', 'alert-danger');
            }, 2000)
        }
        else{
            const question = new Question(id, title, answer);
            data.push(question);
            id++;
            ui.clearFields();
        }
    });
}

// UI constructor
function UI(){}

// show question from
UI.prototype.showQuestion = function(questionCard){
    questionCard.classList.add('showItem');          // this shows the question-anwer form.
}

// hide question card

UI.prototype.hideQuestion = function(questionCard){
    questionCard.classList.remove('showItem');          // this shows the question-anwer form.
}


// question constructor
function Question(id, title, answer){
    this.id = id;
    this.answer = answer;
    this.title = title;
}


// dom event listener
document.addEventListener("DOMContentLoaded", function(){
    eventListeners();
})