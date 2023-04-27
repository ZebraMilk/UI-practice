const characterImages = document.querySelectorAll(".character-image");
const pictureContainers = document.querySelectorAll(".image-container");
const pictureFrame = document.querySelectorAll(".slide-frame");
const carouselContainer = document.querySelectorAll(".carousel-wrapper");

// hide all images except 01
pictureContainers.forEach((picture) => {
  picture.classList.add("hidden");
});

pictureContainers[0].classList.remove("hidden");

console.table(pictureContainers);
