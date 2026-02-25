const buttonAgregar = document.getElementById('agregar');
const buttonBorrar = document.getElementById('borrar');
const tareas = document.getElementById('tareas');
const entrada = document.getElementById('entrada');
const cambiarColor = document.getElementById('cambiarColor');

//Acciona al clicar la funcion agregar
buttonAgregar.addEventListener('click',agregar);
buttonBorrar.addEventListener('click',borrar);
cambiarColor.addEventListener('click', colorRojo);

function colorRojo() {
    const lista = document.querySelectorAll('p');
    for (let i=0; i<lista.length; i++){
        lista[i].style.color="red";
    }
}

function agregar() {
    const pTarea = document.createElement('p');
    const node1 = document.createTextNode('- '+entrada.value);
    pTarea.appendChild(node1);
    tareas.appendChild(pTarea);

    const imagen = document.createElement('img');
    tareas.appendChild(imagen);
    imagen.setAttribute('src','https://www.rtve.es/imagenes/casillas-levanta-copa-del-mundo/1278895672746.jpg');
}

function borrar() {
  if (tareas.lastChild) {
        tareas.removeChild(tareas.lastChild);
    }
}