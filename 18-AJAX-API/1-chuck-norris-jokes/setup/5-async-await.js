const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');

const url = "https://api.chucknorris.io/jokes/random";

btn.addEventListener('click', async()=> {
    try{
        const data = await fetch(url);
        const response = await data.json();
        displayData(response);
    }
    catch(error){
        console.log(error);
    }
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