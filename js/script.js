//Burger button animation and property
document.querySelector(".burger").addEventListener('click', function() {
    this.classList.toggle('active');
});

//miniMap
function init () {
    let map = new ymaps.Map('map', {
        center: [45.043499, 41.962087],
        zoom: 18
    });
  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
//   map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}
ymaps.ready(init);

//Slider
const images = [
    "images/slide@1.jpg",
    "images/slide@2.jpg",
    "images/slide@3.jpg",
    "images/slide@4.jpg",
    "images/slide@5.jpg",
];

const slide = document.querySelector(".slide");
const prevBtn = document.querySelector(".bx-arrow-back");
const nextBtn = document.querySelector(".bx-flip-horizontal");

const setupSlides = () => {
    images.forEach((imageLink) => {
        const img = document.createElement("img");
        img.src = imageLink;
        img.classList.add('image');
        slide.appendChild(img);
    });
};
setupSlides();
setupSlides();
setupSlides();
setupSlides();


const parentDotsList = document.querySelector(".btnList");
let childrensDots = parentDotsList.children;
let childrensDotsArray = Object.values(childrensDots);
childrensDotsArray[0].classList.add("styleDotButton");

let currentIndex = 0;

function updateActiveButton(currentIndex) {
    const dotIndex = (currentIndex % 5 + 5) % 5;
    childrensDotsArray.forEach((dot, i) => {
        dot.classList.toggle('styleDotButton', i === dotIndex);
    });
}

function nextSlide () {
    currentIndex++;
    updateActiveButton(currentIndex);
    if (window.matchMedia("(max-width: 430px)").matches){
        slide.scrollBy({
            left: 260,
    });
    }else {
        slide.scrollBy({
            left: 130,
    })
    };
    if (slide.scrollLeft >= slide.scrollWidth / 2) {
        setTimeout(() => {
            const slides = document.querySelectorAll('.slide img');
            slide.style.scrollBehavior = 'auto';
            slide.scrollLeft = slides[1].offsetLeft;
            slide.style.scrollBehavior = 'smooth';
        }, 300)};
};

function prevSlide () {
    currentIndex--;
    updateActiveButton(currentIndex);
    if (window.matchMedia("(max-width: 430px)").matches){
        slide.scrollBy({
            left: -260,
    });
    }else {
        slide.scrollBy({
            left: -130,
    })
    };
    if (slide.scrollLeft <= 390) {
        setTimeout(() => {
            const slides = document.querySelectorAll('.slide img');
            slide.style.scrollBehavior = 'auto';
            slide.scrollLeft = slides[14].offsetLeft;
            slide.style.scrollBehavior = 'smooth';
        }, 350)};
};

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

function autoScroll() {
    nextSlide();
    setTimeout(autoScroll, 3000);
};
autoScroll();

childrensDotsArray.forEach((currentDot, index) => {
    currentDot.addEventListener("click", () => {
        if (index === currentIndex) return;
        const diff = index - currentIndex;
        const slides = document.querySelectorAll('.slide img');
        slide.scrollTo({
            left: slides[index].offsetLeft,
            behavior: 'smooth'
        });
        updateActiveButton(index);
        currentIndex = index;
    });
});

