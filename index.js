const characterImages = document.querySelectorAll(".character-image");
const pictureContainers = document.querySelectorAll(".image-container");
const pictureFrame = document.querySelector(".slide-frame");
const carouselContainer = document.querySelector(".carousel-wrapper");

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

// hide all images except 01
pictureContainers.forEach((picture) => {
  picture.classList.add("hidden");
});

pictureContainers[0].classList.remove("hidden");

console.table(pictureContainers);

// make the imageContainers a nodelist so I can do more stuff
const pictureContainersArray = [...pictureContainers];

// toggle main-focus on the next element in images when right arrow is clicked
function toggleMainFocus(picture) {
  picture.classList.toggle("main-focus");
}

// toggle main focus on previous image when left arrow is clicked

// toggle right-focus on next image when main-focus changes
function toggleRightFocus(picture) {
  picture.classList.toggle("right-focus");
}
// toggle left-focus on previous image when main-focus changes

// default pageload things, hide all images, but apply main- right- and left-focus
function pageLoad() {
  toggleMainFocus(pictureContainersArray[0]);
  to;
}

// logic for "rolling over" once the end of array is met
if ((index = array.length)) {
  index = 0;
}
