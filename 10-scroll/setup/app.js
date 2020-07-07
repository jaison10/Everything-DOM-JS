// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navBartoggle =  document.querySelector(".nav-toggle");
const linksContainer =  document.querySelector(".links-container");
const links =  document.querySelector(".links");

navBartoggle.addEventListener('click', function(){
    // linksContainer.classList.toggle("show-links");    // this is to make the nav visible on clicking on Bar in phone.
    const linksConatinerHeight = linksContainer.getBoundingClientRect().height;  // this stores the height value when navigation bar comes down. Basically the value of links. This would change when it comes down. 
    const linksHeight = links.getBoundingClientRect().height;     // this stores the height of the links. (even if they aren't shown.)
    // console.log(linksHeight);
    // console.log(linksConatinerHeight);

    if(linksConatinerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;   // if the nav bar shows height 0 when nav button clicked, give the linksContainer height of links. 
    }
    else{
        linksContainer.style.height = 0;   // this is how adding adding style values. 
    }
});

const about = document.getElementById('about')
const services = document.getElementById('services')
const tours = document.getElementById('tours')

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
// ********** fixed navbar ************
window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;   // this gives the no. of pixels being scrolled vertically. pageXOffset would give you horizontal scroll value.
    const navHeight = navbar.getBoundingClientRect().height;  // this stores the height of nav bar.
    // console.log(navHeight);
    console.log(scrollHeight);
    if(scrollHeight > navHeight){
        navbar.classList.add("fixed-nav");
    }
    else{
        navbar.classList.remove("fixed-nav");
    }

    if(scrollHeight > 500){
        topLink.classList.add("show-link")
    }
    else{
        topLink.classList.remove("show-link")
    }
    if( scrollHeight > 540 && scrollHeight<1070 ){ // this is my try to make bg color change. 
        about.style.background = '#000000';
    }
    else{
        about.style.background = '#ffffff';
    }
    if( scrollHeight > 1070 && scrollHeight<1580 ){ // this is my try to make bg color change. 
        services.style.background = '#f23f34';
    }
    else{
        services.style.background = '#ffffff';
    }
    if( scrollHeight > 1580 ){ // this is my try to make bg color change. 
        tours.style.background = '#11554f';
    }
    else{
        tours.style.background = '#ffffff';
    }
});
// ********** smooth scroll ************
// select links
