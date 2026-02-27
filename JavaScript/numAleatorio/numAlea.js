const numeroSecreto = Math.floor(Math.random() * 10) + 1;
const botonAdivinar = document.getElementById('adivina');
const dato = document.getElementById('entrada');

botonAdivinar.addEventListener('click', adivinar);

function adivinar(){
    const num = Number(dato.value); //Pasar entrada a número

    if (num == numeroSecreto) {
        document.getElementById('salida').textContent = "Felicidades has acertado el número!!! Era el "+numeroSecreto
    } else if(num < numeroSecreto){
        document.getElementById('salida').textContent = "El número que buscas es más alto."
    } else {
        document.getElementById('salida').textContent = "El número que buscas es más bajo."
    }
}