const btnAgregar = document.getElementById('agregar');
const lista = document.getElementById('lista');
const entrada = document.getElementById('tareaInput');
//const btnBorrar = document.getElementById('borrar');

btnAgregar.addEventListener('click', function agregar(){
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = entrada.value;
    lista.appendChild(nuevaTarea);
    const btnBorrar = document.createElement('button');
    btnBorrar.textContent = 'X';
    nuevaTarea.appendChild(btnBorrar);
    btnBorrar.addEventListener('click', function(){
        borrar(nuevaTarea);
    });
});

function borrar(nuevaTarea){
    nuevaTarea.remove();
}