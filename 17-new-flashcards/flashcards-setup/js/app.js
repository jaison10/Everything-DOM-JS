
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
            const question = new Question(id, questoinValue, answerValue);
            data.push(question);
            id++;
            ui.addQuestion(questionList, question);
            ui.clearFields(questionInput, answerInput);
            ui.hideQuestion(questionCard);
        }
    });

    // working with a question. The question which is created and deployed.
    questionList.addEventListener('click', function(e){ // listening to all the buttons inside the box.
        e.preventDefault();
        console.log(e.target); // this gives the class div of the button being pressed.
        if(e.target.classList.contains('delete-flashcard')){  // since we are listening to entire question box, checking where exactly the user is clicking.
            questionList.removeChild(e.target.parentElement.parentElement.parentElement); // this points to the div created dynamically when question is created with the class "col-md-4".
            // console.log(e.target.parentElement.parentElement.parentElement); // that div makes one question. So deleting from there entirely.
            let id = e.target.dataset.id;
            // rest of the items
            const tempData = data.filter(function(item){
                return item.id !== parseInt(id);
            });
            console.log("Before deleting ", data);
            // editing the array
            data = tempData;
            console.log("After deleting ", data)
        }

        else if(e.target.classList.contains('edit-flashcard')){
            // get id
            let id = e.target.dataset.id;
            // delete from the DOM.
            questionList.removeChild(e.target.parentElement.parentElement.parentElement);
            ui.showQuestion(questionCard);
            // add the values to the form and display.
            const tempQuestion = data.filter(function(item){
                return item.id === parseInt(id);
            });
            
            // rest of the data.
            const tempData = data.filter(function(item){
                return item.id !== parseInt(id);
            });
            console.log("Before editing ", data);
            data = tempData;  // the array has to be updated without the value which is being edited.
            console.log("After editing ", data);
            // inserting the values to be edited into the form
            questionInput.value = tempQuestion[0].title;
            answerInput.value = tempQuestion[0].answer;
        }   
        else if (event.target.classList.contains("show-answer")){
            e.target.nextElementSibling.classList.toggle('showItem'); // nextElementSibling points to the element in the same line which is h5 here. That has class showItem hidden which has CSS property. Adding that class shows the item and removing hides.
        }
    })
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

// add question
UI.prototype.addQuestion = function(element, question){  // element is where we shud add question.
    const div = document.createElement("div");
    div.classList.add("col-md-4");
    div.innerHTML = `
    <div class="card card-body flashcard my-3">
        <h4 class="text-capitalize">${question.title}?</h4>
        <a href="#" class="text-capitalize my-3 show-answer">show/hide answer</a>
         <h5 class="answer mb-3">${question.answer}</h5>
        <div class="flashcard-btn d-flex justify-content-between">
     
        <a href="#" id="edit-flashcard" class=" btn my-1 edit-flashcard text-uppercase" data-id="
        ${question.id}">edit</a>
        <a href="#" id="delete-flashcard" class=" btn my-1 delete-flashcard text-uppercase" data-id="
        ${question.id}">delete</a>
        </div>
    </div>
    `;
    // above data-id is added dynamically to the edit button which we use while editing the question.
    element.appendChild(div);
};
// clear fields
UI.prototype.clearFields = function(question, answer){
    question.value = '';
    answer.value = '';
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