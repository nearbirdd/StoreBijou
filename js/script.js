//Burger button animation and create burger menu
document.querySelector(".burger").addEventListener('click', function() {
    this.classList.toggle('active');
    const header = document.querySelector("header");
    const headerStore = document.querySelector(".headerStore");
    const copyHeaderStore = headerStore.cloneNode(true);
    copyHeaderStore.querySelector('img').src = "images/Group17.svg";
    const wrapperBurgerMenu = document.createElement("div");
    wrapperBurgerMenu.classList.add("burgerMenu");
    wrapperBurgerMenu.appendChild(copyHeaderStore);
    header.prepend(wrapperBurgerMenu);
    setTimeout(() => {
        wrapperBurgerMenu.style.transform = "translateY(0)";
        wrapperBurgerMenu.style.opacity = "1";
    }, 700);
    const burgerInMenu = wrapperBurgerMenu.querySelector(".burger");
    burgerInMenu.addEventListener('click', () => {
        wrapperBurgerMenu.style.transform = "translateY(-100%)";
        wrapperBurgerMenu.style.opacity = "0";
        wrapperBurgerMenu.remove();
        document.querySelector(".burger").classList.remove("active");
    });
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
};
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
            left: 390,
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
            left: -390,
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

