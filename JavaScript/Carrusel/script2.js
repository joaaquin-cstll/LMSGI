let fotoactual = 0;
const carrusel = document.getElementsByClassName("imagen");

mostrarcarrusel();

function mostrarcarrusel(){
    for (i = 0; i < carrusel.length; i++) {
        carrusel[i].style.display ="none";
    }
    carrusel[fotoactual].style.display ="block";
    fotoactual++;

    if (fotoactual >= carrusel.length){
        fotoactual = 0;
    }
    setTimeout(mostrarcarrusel, 2000);
}