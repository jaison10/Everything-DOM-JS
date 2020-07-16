const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');

const url = "https://api.chucknorris.io/jokes/random";

btn.addEventListener('click',()=> {
    fetch(url)
    .then((data) => data.json())
    .then(response => displayData(response)) // the second 'then' because .json() returns promise.
    .catch(err=> console.log(err));  
});

function displayData(response){
    img.classList.add("shake-img");
    const {value : joke } = response;  // {value } is destructuring the object.
    // console.log(response.value);
    content.textContent = joke;
    const random = Math.random()*1000;
    console.log(random);
    
    setTimeout(()=>{
        img.classList.remove("shake-img");
    }, random)
}