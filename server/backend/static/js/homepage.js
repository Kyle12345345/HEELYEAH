let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    document.querySelector('.slides').style.transform = `translateX(${-currentIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function currentSlide(index) {
    showSlide(index);
}

setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);

const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const imgWidth = images[0].clientWidth + 15;
let index = 0;

slider.innerHTML += slider.innerHTML; 

function moveSlide() {
    index++;
    slider.style.transition = "transform 0.5s linear";
    slider.style.transform = `translateX(${-index * imgWidth}px)`;

    setTimeout(() => {
        if (index >= images.length) {
            index = 0;
            slider.style.transition = "none";
            slider.style.transform = `translateX(0)`;
        }
    }, 500);
}

setInterval(moveSlide, 1200);

document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    dropdown.addEventListener("mouseenter", () => {
        dropdownMenu.style.display = "block";
        setTimeout(() => {
            dropdownMenu.style.opacity = "1";
            dropdownMenu.style.transform = "translateY(0)";
        }, 10);
    });

    dropdown.addEventListener("mouseleave", () => {
        dropdownMenu.style.opacity = "0";
        dropdownMenu.style.transform = "translateY(10px)";
        setTimeout(() => {
            dropdownMenu.style.display = "none";
        }, 300);
    });
});