// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modelButton = document.querySelector(".modal-btn");
const closeButton = document.querySelector(".close-btn");
const modelOverlay = document.querySelector(".modal-overlay")

modelButton.addEventListener('click', function(){
    modelOverlay.classList.add("open-modal")
})
closeButton.addEventListener('click', function(){
    modelOverlay.classList.remove("open-modal")
})

