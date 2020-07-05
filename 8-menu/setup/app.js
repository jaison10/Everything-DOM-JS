const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Newly added- Biriyani",
    category: "dinner",
    price: 30.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  }
];

const sectionCenter = document.querySelector(".section-center");
const filterButtonsAll =  document.querySelectorAll(".filter-btn")

//load items 
window.addEventListener("DOMContentLoaded", function(){
  displayMenuItem(menu);

  // here we're collecting unique categories available. 
  const categories = menu.reduce(function(values, item){     // values is the array we gonna form. And item refers to each item. 
    if(!values.includes(item.category)){                     // comparing if its already there in list. (shud find  unique ones right)
      values.push(item.category);
    }
    return values;
  }, ["all"])  // all is default and initial value because we have all button as well.  And its not there in menu. 

  console.log(categories);

  const categoryButton = categories.map(function(eachCategory){

  })

});

// filter items. 

filterButtonsAll.forEach(function(button){
  button.addEventListener('click', function(e){
    const category = e.currentTarget.dataset.id;         //dataset can be used since we have added "data-" in html. 'id' is the name. can be anything. 
    
    const categoryMenu = menu.filter(function(menuItem){
      if(menuItem.category === category){       // comparing the category of the button with the items. Matching ones stored in categoryMenu.
        return menuItem; 
      }
    });
    if(category === 'all'){
      displayMenuItem(menu);    // if its all, pass the original menu.
    }
    else{
      displayMenuItem(categoryMenu);   // if not pass the filtered menu array. 
    }
  })
})

function displayMenuItem(menuItems){
  let displayMenu = menuItems.map(function(item){   // map each item. 
    // console.log(item);
    return `<article class="menu-item">
    <img src=${item.img} alt=${item.title} class="photo" />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`
  })
  displayMenu = displayMenu.join("") // adding this "" will remove the comma after every article and make on DOM. 
  // console.log(displayMenu)
  sectionCenter.innerHTML = displayMenu;    // adding all the items to the web. 
}