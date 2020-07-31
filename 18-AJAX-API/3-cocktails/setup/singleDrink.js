import fetchDrinks from './src/fetchDrinks.js';
import displaySingleDrink  from './src/displaySingleDrink.js';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const presentDrinks = async () =>{
    const id = localStorage.getItem('drink');
    if(!id){ // checking if id exists in localstorage becz id wont be there if go to the URL directly.(not by clicking on item).
        window.location.replace('index.html');  // redirecting back to index.html
    }   
    else{
        const drink = await fetchDrinks(`${baseURL}${id}`);
        console.log(drink);
        
        displaySingleDrink(drink);
    }
};

window.addEventListener("DOMContentLoaded", presentDrinks);
