const setDrink = (section)=>{
    section.addEventListener('click', (e)=>{
        // e.preventDefault();
        const id = e.target.parentElement.dataset.id; // we can click on img and title as well. But parent of both of them same. So going to parent and fetching the id
        console.log(id);
        localStorage.setItem('drink', id);
    });    
}

export default setDrink;