import get from './utils/getElement.js';
import getUser from './utils/fetchUser.js'

const URL = 'https://randomuser.me/ap/';

const img = get('.user-img');
const title = get('.user-title');
const value = get('.user-value');
const btn = get('.btn');
const btns = [...document.querySelectorAll('.icon')];

const displayUser = (person) =>{

}

const showUser = async () =>{
    //get user from API
    const person = await getUser(URL);
    console.log(person);
    
}

window.addEventListener("DOMContentLoaded", showUser);

btn.addEventListener('click', showUser);

