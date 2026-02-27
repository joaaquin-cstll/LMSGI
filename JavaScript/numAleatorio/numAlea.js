const numeroSecreto = Math.floor(Math.random() * 10) + 1;
const botonAdivinar = document.getElementById('adivina');
const dato = document.getElementById('entrada');

botonAdivinar.addEventListener('click', adivinar);

let intentos = 0;
function adivinar(){
    const num = Number(dato.value); //Pasar entrada a número

    if (intentos == 5) {
        document.getElementById('intentos').textContent = "Has llegado al límite de intentos."
        return
    }
    if (num == numeroSecreto) {
        document.getElementById('salida').textContent = "Felicidades has acertado el número!!! Era el "+numeroSecreto
    } else if(num < numeroSecreto){
        document.getElementById('salida').textContent = "El número que buscas es más alto."
        intentos++;
        document.getElementById('intentos').textContent = "Llevas "+intentos+" intentos."
    } else if(num > numeroSecreto){
        document.getElementById('salida').textContent = "El número que buscas es más bajo."
        intentos++;
        document.getElementById('intentos').textContent = "Llevas "+intentos+" intentos."
    }
}