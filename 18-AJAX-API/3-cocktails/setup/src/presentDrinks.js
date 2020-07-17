import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from './displayDrinks.js'

const showDrink = async(url)=>{
    //fetch drinks
    const data = await fetchDrinks(url);
    console.log(data);
    // display
    const section = await displayDrinks(data);
    // console.log(section);
}

export default showDrink;