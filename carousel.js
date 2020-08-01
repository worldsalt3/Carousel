// Get element node
let image = document.querySelector('.images');
let rightArrow = document.querySelector('#right-arrow');
let leftArrow = document.querySelector('#left-arrow');


//Array of images
let images = [
    "images/Screenshot_3.png",
    "images/Screenshot_7.png",
    "images/Screenshot_8.png",
    "images/Screenshot_9.png",
    "images/Screenshot_10.png",
    "images/Screenshot_11.png",
    "images/Screenshot_12.png"
  ];

  let currentIndex = 0;
  
  //Function to increment
  let incrementIndex = function() {
    for (let i = 1; i < images.length; i++) {
      currentIndex++;
      if (currentIndex == images.length -1) {currentIndex = 0; return images[currentIndex]}
      else{ return images[currentIndex]};
    }
  }

   //Function to decrement
   let decrementIndex = function() {
    for (let i = 1; i < images.length; i++) {
      currentIndex--;
      if (currentIndex == images.length -1) {currentIndex = 0; console.log(images[currentIndex])}
      else{ return images[currentIndex]};
    }
  }

  //Event listener on the rigth-arrow
  rightArrow.onclick = function() {
   image.setAttribute('src' , incrementIndex()); 
  }

  //Event listener on the left-arrow
  leftArrow.onclick = function() {
    image.setAttribute('src' , decrementIndex()); 
   }