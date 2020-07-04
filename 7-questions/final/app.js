//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {              // this forEach is for closing other question's details. 
      if (item !== question) {                       // checking if the question am inside which, is not the question selected in this forEach loop. This is used to open only one question and close others.
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");     // showing details of the one selected. 
  });
});

// traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;      // going to parent elements.

//     question.classList.toggle("show-text");
//   });
// });
