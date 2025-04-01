// Obtener elementos del DOM
const verDetallesButton = document.getElementById('verDetalles');
const volverButton = document.getElementById('volver');
const tarjeta = document.querySelector('.tarjeta');

verDetallesButton.addEventListener('click', () => {
    tarjeta.classList.add('volteada');
});

volverButton.addEventListener('click', () => {
    tarjeta.classList.remove('volteada');
});
