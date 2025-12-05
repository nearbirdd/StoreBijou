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
]

const slide = document.querySelector("slide");
const prevBtn = document.querySelector("bx-arrow-back");
const nextBtn = document.querySelector("bx-flip-horizontal");

const setupSlides = () => {
    images.forEach((imageLink, index) => {
        const img = document.createElement("img");
        img.src = imageLink;
        img.dataset.index = index;

        slide.appendChild(img);
    })
}

setupSlides();