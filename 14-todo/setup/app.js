// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');  // where you get input from. 
const submitButton = document.querySelector('.submit-btn');
const groceryContainer = document.querySelector('.grocery-container');
const groceryList = document.querySelector('.grocery-list');
const clearButton = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editId = "";
// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit', addItem);   // callback function.
// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault();
    const value = grocery.value;  // get input.
    const id = new Date().getTime().toString();  // this generates unique value easily.

    if( value && !editFlag){      // this means: if(value !== '' && editFlag === false).  Used to short hand syntax there.
        // this is while adding an item.

        // CREATING AN ITEM DYNAMICALLY.
        const element = document.createElement('article');  // this comes inside the grocery-list
        // add class
        element.classList.add('grocery-item');   
        // create and add id dynamically.
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);  // data-id is the attribute of grocery-item class/part.
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
          <!-- edit btn -->
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
          <!-- delete btn -->
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
        </div>`;
        // so as of now the item is created successfully. Above thing comes under grocery-item.
        // Now appending whatever created inside grocery-list
        groceryList.appendChild(element);

        //display alert
        alertDisplay('Item added successfully', 'success');

        // showing the container of lists and clear items button.
        groceryContainer.classList.add('show-container');
        // adding to local storage.
        addToLocalStorage(id , value);
        //set back to default.
        setBackToDefault();
    }
    else if( value && editFlag){
        // this is while updatig an item.
    }
    else{
        // this is when the item is empty.
        alertDisplay('Please enter a value!', "danger");
    }
}

// display alert function.
function alertDisplay(text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // remove the alert after particular delay
    setTimeout(function(){
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 2000)
}

// set back to default function.
function setBackToDefault(){
    
}

// ****** LOCAL STORAGE **********

function addToLocalStorage(id, value){

}
// ****** SETUP ITEMS **********
