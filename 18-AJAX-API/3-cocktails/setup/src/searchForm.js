import get from './getElement.js';
import presentDrinks from './presentDrinks.js';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = get('.search-form');
const input = get("[name= drink]"); // name is an attribute on input.

form.addEventListener('keyup', (e)=>{  // this is when the key is released. becs there is no button.
    e.preventDefault();
    const value = input.value;
    if(!value) return;
    presentDrinks(`${baseURL}${value}`); // combining thre URL with searched item.
});