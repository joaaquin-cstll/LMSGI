const boton1 = document.getElementById("b1");
const boton2 = document.getElementById("b2");
const boton3 = document.getElementById("b3");
const carrusel = document.getElementsByClassName("imagen");




boton1.addEventListener('click', function(){fboton(0)});
boton2.addEventListener('click', function(){fboton(1)});
boton3.addEventListener('click', function(){fboton(2)});

function fboton(index) {
    for (i = 0; i < carrusel.length; i++) {
        carrusel[i].style.display ="none";
    }
    carrusel[index].style.display ="block";

}



/*  CON 3 FUNCIONES
boton1.addEventListener('click', mostrar1);
boton2.addEventListener('click', mostrar2);
boton3.addEventListener('click', mostrar3);


function mostrar1(){

    for (i = 0; i < carrusel.length; i++) {
    carrusel[i].style.display ="none";
    }
    carrusel[0].style.display ="block";
   
}

function mostrar2(){

    for (i = 0; i < carrusel.length; i++) {
    carrusel[i].style.display ="none";
    }
    carrusel[1].style.display ="block";
   
}
function mostrar3(){

    for (i = 0; i < carrusel.length; i++) {
    carrusel[i].style.display ="none";
    }
    carrusel[2].style.display ="block";
   
} */