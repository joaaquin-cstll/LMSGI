const elTitulo = document.getElementById('titulo');
const elBoton = document.getElementById('btnCambiar');

elBoton.addEventListener('click', function() {
    elTitulo.textContent = "Texto cambiado con JavaScript";    
});