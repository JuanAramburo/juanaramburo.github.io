const backToTopButton = document.getElementById("backToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const carrusel = document.querySelector('.imagenes-habilidades');
const flechaIzq = document.querySelector('.flecha.izquierda');
const flechaDer = document.querySelector('.flecha.derecha');

flechaIzq.addEventListener('click', () => {
  carrusel.scrollBy({ left: -100, behavior: 'smooth' });
});

flechaDer.addEventListener('click', () => {
  carrusel.scrollBy({ left: 100, behavior: 'smooth' });
});

