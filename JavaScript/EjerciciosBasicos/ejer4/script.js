const btnAgregar = document.getElementById('agregar');
const lista = document.getElementById('lista');
const entrada = document.getElementById('tareaInput');

btnAgregar.addEventListener('click', function agregar(){
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = entrada.value;
    lista.appendChild(nuevaTarea);
    entrada.value = "";
});