const sliderContainer = document.querySelector('.container');
const slides = document.querySelector (".slides")
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const interval = 3000

let sliders = document.querySelectorAll('.slider');
let index = 1;
let slideId;

const firstClone = sliders[0].cloneNode(true);
const lastClone = sliders[sliders.length - 1].cloneNode(true);

firstClone.id = "first-clone";
lastClone.id = "last-clone";

slides.append(firstClone);
slides.prepend(lastClone);

const slideWidth = sliders[index].clientWidth;


slides.style.transform = `translateX(${-slideWidth * index}px)`;



const startSlide = ()=> {
    slideId = setInterval(() => {
        moveToNextSlide()
}, interval);
}

slides.addEventListener('transitionend', () => {
    sliders = document.querySelectorAll('.slider');
    if (sliders[index].id === firstClone.id){
    slides.style.transition = "none"
    index = 1;
    slides.style.transform = `translateX(${-slideWidth * index}px)`;
}
if (sliders[index].id === lastClone.id){
    slides.style.transition = "none"
    index = sliders.length - 2;
    slides.style.transform = `translateX(${-slideWidth * index}px)`;
}
});

const moveToNextSlide = () => {
    if(index >= sliders.length - 1) return false;
    index++;
    slides.style.transform = `translateX(${-slideWidth * index}px)`;
    slides.style.transition = "0.7s"};

const moveToPrevSlide = () => {
    if(index <= 0) return false;
    index--;
    slides.style.transform = `translateX(${-slideWidth * index}px)`;
    slides.style.transition = "0.7s"};


sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(slideId);
})

sliderContainer.addEventListener('mouseleave', startSlide);

nextBtn.addEventListener('click',moveToNextSlide)
prevBtn.addEventListener('click',moveToPrevSlide)


startSlide();