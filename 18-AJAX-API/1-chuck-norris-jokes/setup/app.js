const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');

const url = "https://api.chucknorris.io/jokes/random";

btn.addEventListener('click', async () => {
    getData(url);
});

function getData(url){
    const xhr =  new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    console.log(xhr);
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState !== 4){
            return;
        }
        if(xhr.status === 200){
            img.classList.add("shake-img");
            const {value : joke } = JSON.parse(xhr.responseText);  // {value } is destructuring the object.
            // console.log(response.value);
            content.textContent = joke;
            const random = Math.random()*1000;
            console.log(random);
            
            setTimeout(()=>{
                img.classList.remove("shake-img");
            }, random)
        }
        else{
            console.log(
             {
                status: xhr.status,
                text: xhr.statusText
            });
        }
    }
}