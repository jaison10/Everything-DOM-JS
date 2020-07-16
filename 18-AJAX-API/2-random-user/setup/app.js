import get from './utils/getElement.js';
import getUser from './utils/fetchUser.js';
import displayUser from './utils/displayUser.js';

const URL = 'https://randomuser.me/api/';
const btn = get('.btn');

const showUser = async () =>{
    //get user from API
    const person = await getUser(URL);
    console.log(person);
    // displaying user data.
    displayUser(person);    
}

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener('click', showUser);

