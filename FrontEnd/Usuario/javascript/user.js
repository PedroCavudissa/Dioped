const images = document.querySelectorAll('.carousel img');
const captions = [
    'Aqui você encontra os melhores cursos da área de TI',
    'Oportunidades de Estágio',
    
];
const captionElement = document.querySelector('.caption');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
    captionElement.textContent = captions[currentIndex];
}


setInterval(showNextImage, 5000); // Alterna a cada 5 segundos
function toggleMenu() {
const menu = document.getElementById('menu');
if (menu.style.display === 'block') {
menu.style.display = 'none';
} else {
menu.style.display = 'block';
}
}