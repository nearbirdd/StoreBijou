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
const btnList = document.querySelector(".btnList");

const setupSlides = () => {
    images.forEach((imageLink) => {
        const img = document.createElement("img");
        img.src = imageLink;
        img.classList.add('image');
        slide.appendChild(img);
    })

    // const firstClone = slide.firstElementChild.cloneNode(true);
    // const lastClone = slide.firstElementChild.cloneNode(true);
    // slide.appendChild(firstClone);
    // slide.insertBefore(lastClone, slide.firstChild);
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

function nextActiveButton() {
    childrensDotsArray[currentIndex].classList.remove("styleDotButton");
    currentIndex++;
    if(currentIndex >= childrensDotsArray.length) {
        currentIndex = 0;
    };
    childrensDotsArray[currentIndex].classList.add("styleDotButton");
}

function prevActiveButton() {
    childrensDotsArray[currentIndex].classList.remove("styleDotButton");
    currentIndex--;
    if(currentIndex < 0) {
        currentIndex = childrensDotsArray.length - 1;
    };
    childrensDotsArray[currentIndex].classList.add("styleDotButton");
};

function nextSlide () {
    nextActiveButton();
    slide.scrollBy({
        left: 130,
    });
    if (slide.scrollLeft >= slide.scrollWidth / 2) {
        setTimeout(() => {
            const slides = document.querySelectorAll('.slide img');
            slide.style.scrollBehavior = 'auto';
            slide.scrollLeft = slides[1].offsetLeft;
            slide.style.scrollBehavior = 'smooth';
        }, 300)};
};

function prevSlide () {
    prevActiveButton();
    slide.scrollBy({
        left: -130,
    });
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

window.addEventListener('load', () => {
    const slides = document.querySelectorAll('.slide img');
    if (slides.length >= 3) {
        slide.scrollLeft = slides[10].offsetLeft;
    }
});

function autoScroll() {
    nextSlide();
    setTimeout(autoScroll, 3000);
}
autoScroll();