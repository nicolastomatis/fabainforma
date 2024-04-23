const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-mobile');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');

  if (!menu.classList.contains('active')) {
    setTimeout(() => {
      menu.classList.add('inactive');
    }, 500);
  } else {
    menu.classList.remove('inactive');
  }
});

/* */

// Obtener elementos del DOM
const thumbnails = document.querySelectorAll('.thumbnail');
const popup = document.getElementById('popup');
const close = document.getElementById('close');
const popupImage = document.getElementById('popup-image');

// Función para abrir el popup
function openPopup() {
  popup.style.display = 'block';
  popupImage.src = this.src;
  document.body.classList.add('popup-open'); // Bloquear scroll
}

// Función para cerrar el popup
function closePopup() {
  popup.style.display = 'none';
  document.body.classList.remove('popup-open'); // Desbloquear scroll
}

// Agregar evento clic a las miniaturas
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', openPopup);
});

// Agregar evento clic al botón de cerrar
close.addEventListener('click', closePopup);

/* CARROUSEL DE LOGOS */

// Obtener el contenedor del carrusel y los logos
const carouselTrack = document.getElementById('carouselTrack');
const slides = carouselTrack.querySelectorAll('.carousel-slide');

// Clonar los logos para crear un bucle infinito
slides.forEach(slide => {
  const cloneSlide = slide.cloneNode(true);
  carouselTrack.appendChild(cloneSlide);
});

// Iniciar el carrusel
let position = 0;
const slideWidth = slides[0].offsetWidth + 20; // Ancho de cada logo + margen

function moveCarousel() {
  position -= 2; // Mover 1 pixel a la izquierda
  if (position <= -slideWidth) {
    position += slideWidth; // Reiniciar la posición
    carouselTrack.appendChild(carouselTrack.firstElementChild); // Mover el primer logo al final
  }
  carouselTrack.style.transform = `translateX(${position}px)`;

  requestAnimationFrame(moveCarousel); // Repetir la función para un movimiento continuo
}

moveCarousel(); // Iniciar el movimiento del carrusel
