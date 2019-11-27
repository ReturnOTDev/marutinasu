const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
const container = document.querySelector(".carousel-container");
const next = document.getElementById("next");
const previous = document.getElementById("previous");

let size = document.querySelector(".item").clientWidth;
let counter = 0;

next.addEventListener("click", () => {
    console.log(size);
    if (counter < images.length - 1) {
        counter++;
        slider.style.transform = `translateX(-${size * counter}px)`;
    }
});
previous.addEventListener("click", () => {
    if (counter > 0) {
        counter--;
        slider.style.transform = `translateX(-${size * counter}px)`;
    }
});
