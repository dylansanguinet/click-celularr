function comprarCelular(celular) {
    alert("Tu compra se realizo de manera exitosa " + celular + "!");
}

let currentIndex = 0; // Índice actual de la imagen visible
const items = document.querySelectorAll('.carrusel div'); // Selecciona todos los divs dentro del carrusel
const totalItems = items.length; // Total de imágenes en el carrusel
const itemsToShow = 3; // Número de imágenes mostradas a la vez

function actualizarCarrusel() {
    const offset = -currentIndex * (100 / itemsToShow); // Calcula el desplazamiento basado en el índice actual
    document.getElementById('carrusel').style.transform = `translateX(${offset}%)`; // Aplica el desplazamiento
}

function moverDerecha() {
    currentIndex += 1; // Aumenta el índice

    // Si se supera el número de imágenes, regresa al inicio
    if (currentIndex > totalItems - itemsToShow) {
        currentIndex = 0; // Regresa al inicio
    }
    actualizarCarrusel(); // Actualiza la vista del carrusel
}

