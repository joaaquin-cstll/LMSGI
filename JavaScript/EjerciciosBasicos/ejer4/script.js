const btnAgregar = document.getElementById('agregar');
const lista = document.getElementById('lista');

btnAgregar.addEventListener('click', function agregar(){
    const pTarea = document.createElement('p');
    const node1 = document.createTextNode('- '+entrada.value);
    pTarea.appendChild(node1);
    lista.appendChild(pTarea);
});