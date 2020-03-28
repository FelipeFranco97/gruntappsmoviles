var secciones = [];

window.onload = function(){
    inicializarReferencias();
}

function inicializarReferencias(){
    secciones[1] = document.getElementById("seccion0");
    secciones[2] = document.getElementById("ejercicio1");
    secciones[3] = document.getElementById("ejercicio2");
    secciones[4] = document.getElementById("ejercicio3");
    secciones[5] = document.getElementById("ejercicio4");
    secciones[6] = document.getElementById("ejercicio5");
    secciones[7] = document.getElementById("ejercicio6");
    secciones[8] = document.getElementById("ejercicio7");
    secciones[9] = document.getElementById("ejercicio8");
    secciones[10] = document.getElementById("ejercicio9");
    secciones[11] = document.getElementById("ejercicio10");
}

function cambiarSeccion(id_seccion){
    for (var i in secciones) {
        secciones[i].classList.add("oculto");
    }
    secciones[id_seccion].classList.remove("oculto");
    secciones[1].className = "mostrar";
}