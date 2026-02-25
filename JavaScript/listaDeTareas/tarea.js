const buttonAgregar = document.getElementById('agregar');
const buttonBorrar = document.getElementById('borrar');
const tareas = document.getElementById('tareas');
const entrada = document.getElementById('entrada');

//Acciona al clicar la funcion agregar
buttonAgregar.addEventListener('click',agregar);
buttonBorrar.addEventListener('click',borrar);

function agregar() {
    const pTarea = document.createElement('p');
    const node1 = document.createTextNode('- '+entrada.value);
    pTarea.appendChild(node1);
    tareas.appendChild(pTarea);

    const enlace = document.createElement('a');
    const node2 = document.createTextNode(' | Enlace a....');
    enlace.appendChild(node2);
    enlace.setAttribute('href',"https://www.marca.com");
    pTarea.appendChild(enlace);

    const imagen = document.createElement('img');
    tareas.appendChild(imagen);
    imagen.setAttribute('src','https://www.rtve.es/imagenes/casillas-levanta-copa-del-mundo/1278895672746.jpg');
}

function borrar() {
  if (tareas.lastChild) {
        tareas.removeChild(tareas.lastChild);
    }
}