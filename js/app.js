// Variaveis globais
var breja = "";
var carne = "";
var tiragosto = "";
let button = document.getElementById('finalizar');
button.disabled = true;

function prod(id, classe) {
    let comida = document.getElementsByClassName(classe).length;

    for (i = 0; i < comida; i++) {
        document.getElementsByClassName(classe)[i].style.borderColor = "white";
    }
    document.getElementById(id).style.borderColor = "green";

    if (classe == "carne") {
        carne = id;      
    }
    if (classe == "breja") {
        breja = id;
    }
    if (classe == "tiragosto") {
        tiragosto = id;
    }

    if (tiragosto != "" & breja != "" & carne != "") {
        button.disabled = false;
    }
}

function FinalizarPedido() {
    let mensagem = ("Olá, gostaria de pedir uma "
    + breja 
    + " com " 
    + tiragosto 
    + " de tiragosto, e churrasco de " 
    + carne 
    + "! Vlw, catioro!");
    window.open("https://api.whatsapp.com/send?phone=5511987813007&text=" + mensagem )
}