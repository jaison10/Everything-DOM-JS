import presentDrink  from './src/presentDrinks.js';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=b';

window.addEventListener("DOMContentLoaded", ()=>{
    presentDrink(URL);
});