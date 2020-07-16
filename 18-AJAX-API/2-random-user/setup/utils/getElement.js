const getElement = (selection)=>{
    const element = document.querySelector(selection);
    if(element)return element;
    throw new Error ('Element not found!');
}

export default getElement;