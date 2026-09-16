const contenedor = document.getElementById('contenedor');
const sobre = document.getElementById('sobre');
const carta = document.getElementById('carta');
const textoClic = document.getElementById('texto-clic');

contenedor.addEventListener('click', () => {
    sobre.src = 'sobre-abierto.png';
    textoClic.style.display = 'none';
    carta.style.display = 'block';
}, { once: true });