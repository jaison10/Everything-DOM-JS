import presentDrink  from './src/presentDrinks.js';
import './src/searchForm.js';         // importing the file itself. Whatever is there in the file will execute directly.

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=b';

window.addEventListener("DOMContentLoaded", ()=>{
    presentDrink(URL);
});