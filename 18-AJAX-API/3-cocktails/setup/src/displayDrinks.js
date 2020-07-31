import get from './getElement.js';
import {hideLoading} from './toggleLoading.js';

const displayDrinks = ({drinks})=>{   // destructuring the object and drinks is an array.
    const section = get('.section-center');
    const title = get('.title');
    if(!drinks) {
        //hide loading
        hideLoading();

        title.textContent = 'Sorry, the drink you searched for is not available!';
        section.innerHTML = null;
        return;
    }
    const newDrinks = drinks.map((drink)=>{
        // console.log(drink);
        const {idDrink: id, strDrink: name, strDrinkThumb: image} = drink;
        return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`;
    }).join('');
    //hide loading gif
    hideLoading();

    title.textContent = '';
    section.innerHTML = newDrinks;
    return  section;  // we are returning data as well.
}

export default displayDrinks;