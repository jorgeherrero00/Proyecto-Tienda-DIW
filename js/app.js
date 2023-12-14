/*=========================================
    MENU
==========================================*/

const menu=document.querySelector('.icon-menu');
const menuClose=document.querySelector('.cerrar-menu');

menu.addEventListener('click',()=>{
    document.querySelector('.header-menu-movil').classList.add('active');
})

menuClose.addEventListener('click',()=>{
    document.querySelector('.header-menu-movil').classList.remove('active');
})

let currentIndex = 0;
const intervalTime = 3000; // Intervalo de cambio automático en milisegundos (3 segundos)

function showSlide(index) {
    const container = document.getElementById("carousel-container");
    const slides = container.getElementsByTagName("img");

    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    const newTransformValue = -currentIndex * 100 + "%";
    container.style.transform = "translateX(" + newTransformValue + ")";
}

function changeSlide(direction) {
    currentIndex += direction;
    showSlide(currentIndex);
}

function startCarousel() {
    setInterval(function () {
        changeSlide(1);
    }, intervalTime);
}

// Mostrar la primera imagen al cargar la página
showSlide(currentIndex);

// Iniciar el carrusel automático
startCarousel();