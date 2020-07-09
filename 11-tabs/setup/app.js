const allButtons = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
const about = document.querySelector(".about");

about.addEventListener('click', function(e){
    const id = e.target.dataset.id;  // gives where exactly you're clicking. 
    if(id){
        allButtons.forEach(function(btn){
            // remove active from other buttons. Than the one clicked.
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        // hide all other articles 
        articles.forEach(function(article){
            article.classList.remove("active");
        });
        const element = document.getElementById(id); //each article has an id as that of button's data-id. 
        element.classList.add("active");
    }
});