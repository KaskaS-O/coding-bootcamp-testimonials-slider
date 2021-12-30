const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");

const photos = [...document.querySelectorAll(".photo__img")];
const testimonials = [...document.querySelectorAll(".testimonial")];

let slideIndex = 0;
let type = "";

const handleSlideIndex = (type) => {
  switch (type) {
    case "-":
      --slideIndex;
      if (slideIndex < 0) {
        slideIndex = photos.length - 1;
      }
      handleSlideChange(slideIndex);
      break;
    case "+":
      ++slideIndex;
      if (slideIndex > photos.length - 1) {
        slideIndex = 0;
      }
      handleSlideChange(slideIndex);
      break;
  }
};

const handleSlideChange = (slideIndex) => {
  const activePhoto = photos[slideIndex];
  const activeTestimonial = testimonials[slideIndex];
  activePhoto.classList.remove("hidden");
  activeTestimonial.classList.remove("hidden");
  photos.forEach((photo) => {
    if (photo !== activePhoto) {
      photo.classList.add("hidden");
    }
  });
  testimonials.forEach((item) => {
    if (item !== activeTestimonial) {
      item.classList.add("hidden");
    }
  });
};

const handleClick = (event) => {
  switch (event.target.id) {
    case "arrow-left":
      type = "-";
      handleSlideIndex(type);
      break;
    case "arrow-right":
      type = "+";
      handleSlideIndex(type);
      break;
  }
};

const handleKeyDown = (event) => {
  switch (event.keyCode) {
    case 37:
      type = "-";
      handleSlideIndex(type);
      break;
    case 39:
      type = "+";
      handleSlideIndex(type);
      break;
  }
};

arrowLeft.addEventListener("click", handleClick);
arrowRight.addEventListener("click", handleClick);
document.addEventListener("keydown", handleKeyDown);
