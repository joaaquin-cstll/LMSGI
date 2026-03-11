// Seleccionar los elementos
const contenido = document.getElementById('caja');
const boton = document.getElementById('color');

boton.addEventListener('click', function() {
    // Modificar el estilo
    contenido.style.backgroundColor = "blue";
    contenido.style.color = "white";
});