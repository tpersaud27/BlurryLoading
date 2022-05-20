const loadText = document.querySelector('.loading-text')
const background = document.querySelector('.bg')

let load = 0;

// This will increment the time every 30 ms by calling the blurring function
let timeInterval = setInterval(blurring,30)

function blurring(){
  // Increment the load value
  load++

  // If load is more than 99 we will cancel the repeated calling 
  if(load > 99){
    clearInterval(timeInterval);
  }

  // We will set the html element to the load number
  loadText.innerText = `${load}%`
  // We want to opacity of the text to start off at 1 and go down to 0 when the load reached more than 99
  // We can do this by scaling the load variable to map to 0 to 1 instead of 0 to 100
  loadText.style.opacity = scale(load,0,100,1,0)
  // Adjusting the blurring
  background.style.filter = `blur(${scale(load,0,100,30,0)}px`
  
}

// This function will scale a number to fit between a range
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}