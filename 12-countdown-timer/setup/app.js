const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveAwayHeading = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline")
const allFormats = document.querySelectorAll(".deadline-format h4");


let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();  // this is date actually.

// let futureDate = new Date(2020, 6, 10, 15, 45, 0);  // month 7 is August not July. Starts from 0 index. 11.30 is the time in 24 hrs format. 
let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 15, 26, 0);  // this would make it easier to add if based on todays date.
                                                                          // both the ways we can do. 
console.log(futureDate);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()]; // getMonth will return month no. For January the no. will be 0. So passing to months array to get actual month.
const weekDay = weekdays[futureDate.getDay()]; // same as above. For Sunday the no. will be 0.
const date = futureDate.getDate();
const hour = futureDate.getHours();
const minutes = futureDate.getMinutes();
const seconds = futureDate.getSeconds();
let value = 'am';

if(hour > 12){
  value = 'pm'
}
giveAwayHeading.textContent = `Give away ends on ${weekDay}, ${date} ${month} ${year} ${hour}:${minutes}${value}.`;

// future time in ms.
const futureTime = futureDate.getTime();  // this is in ms.
// console.log(futureTime);  

function getRemainingTime(){
  const today = new Date().getTime();  // todays time in ms.
  // console.log(today);

  // remaining time in ms. 
  const remaining = futureTime - today;   // subtract todays time from future. Remaining time in ms.
  // console.log(remaining);
  
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr

  // constant values in ms.
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;
  const oneSecond = 1000;

  const daysLeft = Math.floor(remaining / oneDay);   // remaining days.
  // console.log(daysLeft + " day(s)");
  const hoursLeft = Math.floor((remaining % oneDay) / oneHour);
  // console.log(hoursLeft + " hour(s)");
  const minutesLeft = Math.floor((remaining % oneHour) / oneMinute);
  // console.log(minutesLeft + " minute(s)");
  const secondsLeft = Math.floor((remaining % oneMinute ) / oneSecond);
  // console.log(secondsLeft + " second(s)");

  // set values array with remaining time
  const valuesArray = [daysLeft, hoursLeft, minutesLeft, secondsLeft];

  function format(item){  // this function is to give proper format. If value is < 10, it shud be written as 09, 08, 05, 06 etc ryt.
    if(item < 10){
      return `0${item}`
    }
    return item
  }

  allFormats.forEach(function(item, index){  // index will be from 0 default. 
    item.innerHTML= format(valuesArray[index]);
  });

  // this part is when the time you set for is passed. on subtracting the value will be less than 0.
  if(remaining < 0){
    clearInterval(countdown);  // this stops the setInterval thing from working.
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired!</h4>`;
  }
}



// making countdown automatic
let countdown = setInterval(getRemainingTime, 1000);  // the function u want to call and the time interval u want to call with.

getRemainingTime();   // calling this function must be after the above setInterval thing. 
                      // if its before, inside function you won't variable 'countdown'. And displaying expired message won't work.

