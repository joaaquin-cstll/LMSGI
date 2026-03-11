const mensaje = document.getElementById('mensaje');
const boton = document.getElementById('toggle');

boton.addEventListener('click', function(){
    if (mensaje.style.display === "none") {
        mensaje.style.display = "block";
    } else {
        mensaje.style.display = "none";
    }
});
