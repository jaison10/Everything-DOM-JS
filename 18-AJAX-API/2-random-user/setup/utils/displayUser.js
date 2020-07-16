import get from './getElement.js';

const img = get('.user-img');
const title = get('.user-title');
const value = get('.user-value');
const btns = [...document.querySelectorAll('.icon')];  // expanding/spreading and storing in an array. 

const displayUser = (person) =>{
    img.src = person.image;
    value.textContent = person.name;
    removeActivesOfAllButtons(btns);      // removing blur from all the buttons becs previously used one's color would remain.
    title.textContent = `My name is`;
    btns[0].classList.add('active');      // this shows the blue color for first button initially.
    btns.forEach((btn)=>{
        const label = btn.dataset.label;  // this time used dataset name as 'label' not id. 
        btn.addEventListener('click', ()=>{
            title.textContent = `My ${label} is `;
            value.textContent = person[label];
            removeActivesOfAllButtons(btns);  // remvng blue color from all other buttons.
            btn.classList.add('active');
        });
    });
}

function removeActivesOfAllButtons(buttons){
    buttons.forEach((btn)=>{
        btn.classList.remove('active');
    });
}

export default displayUser;