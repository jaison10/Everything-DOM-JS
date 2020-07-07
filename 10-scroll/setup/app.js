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
    const linksConatinerHeight = linksContainer.getBoundingClientRect().height;  // this stores the height value when navigation bar comes down. Basically the value of only links(logo part not included). This would change when it comes down. Or else it wud be 0.
    const linksHeight = links.getBoundingClientRect().height;     // this stores the height of the links. (even if they aren't shown.) This is logo part + height of link. 
    console.log(linksHeight);
    console.log(linksConatinerHeight);

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
    // console.log(scrollHeight);
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

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        // preventing default action including moving to other section too.
        e.preventDefault();
        // navigate to specific spot.
        const id = e.currentTarget.getAttribute('href').slice(1);
        const elementSection = document.getElementById(id);   

        // calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;  // this is the nav bar height. How it is in pc mode. Single line. Like height of logo actually.
        const linkscontinerHeight = linksContainer.getBoundingClientRect().height;   // This is links container height which means only links' height. (logo part wont be there.)
        const fixedNav = navbar.classList.contains("fixed-nav");  //checks if tht class exists. 
        let position = elementSection.offsetTop;         // gives the pixel value where the element that the button pointing to is located. 
        console.log(position);

        // now solving the problem of making the element visible properly on reaching there by clicking on a button.
        // or else some part of the container will be covered by nav. (it will be under nav bar)
        let absolutePosition = position-navHeight;  // deducting the height of nav bar(without button shown time) from the position of container.
        console.log(absolutePosition); 
        // there is another problem we face. that is the position pixel value changes where nav is in normal mode and nav is in fixed more.(white & fixed)
        // like.. position of a container on scrolling from very top and on scrolling from bottom(after going down and coming up) will be different.
        // BECAUSE first time it goes to the position it calculated the position based on initial nav position. But next time it calculates based on fixed nav.
        if(!fixedNav){      // if the fixed nav doesnt exists, it needs to scroll more in the sense the top part shud come more up.
            absolutePosition = absolutePosition - navHeight;  // thats why reducing more.
        }
        // PHONE NAV PROBLEM
        // Problem still remains. In phone the container would be a bit down because it leaves the total height of nav bar(when links displayed) and 
        // after that much gap, it displays the heading of conatiner. (thats where it starts.)
        if(navHeight > 82 ){ // which means i have already opened the navbar. 82 is the pixel value of nav when its in normal way.(not opened)
                             // which also says that we are in phone mode bcz in pc mode it can never cross 82.
            absolutePosition = absolutePosition + linkscontinerHeight;      // on adding, the gap on top will be coverd. The pointer add more pixels & points more down. 
                                                // adding linkscontinerHeight bcz, it would have height of only links. The logo part wont be included. (logo and nav icon.)
                                                // if you add navHeight which contains the total height of that part, some part of the container wud go under image part of the nav.
        }
        window.scrollTo({
            left: 0,
            top: absolutePosition
        });
        linksContainer.style.height = 0;  // after clicking, closing the nav bar. (in phone mode.)
    });
});