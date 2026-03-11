//Referencias del html
const displayNumero = document.getElementById('numero');
const botonSumar = document.getElementById('btnSumar');
const botonRestar = document.getElementById('btnRestar');
const botonReset = document.getElementById('btnReset');


//Variable que guarda el valor actual
let contador = 0;

// Botón de Sumar
botonSumar.addEventListener('click', function() {
    contador = contador + 1;           // sumar valor
    displayNumero.textContent = contador; // Actualizar en html
});

// Botón de Restar
botonRestar.addEventListener('click', function() {
    contador = contador - 1;           // restar valor
    displayNumero.textContent = contador; // Actualizamor en html
});

// Botón de Reset
botonReset.addEventListener('click', function() {
    contador = 0;           // Reset
    displayNumero.textContent = contador; // Actualizar en html
});