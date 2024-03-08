// Obtener año actual.
const actualYear = new Date().getFullYear();
// Asignar año actual al footer.
document.getElementById("year").innerHTML = actualYear;
/* Array*/
var palabras = Array("GORDO", "PILOTO", "DECAER", "AVION", "MUCHOS", "CARAMELO", "MIELADA", "AZUCAR", "HIJO", "ECLOSION", "GATITO", "GERENTE", "BANQUETE", "ALARMA", "PALIDO", "CAMAS", "COMPLEJO");

let palabraOc;
let errores = 0;
let aciertos = 0;
const play = id('startGame');
const imagen = id('imagen');
const btn_letras = document.querySelectorAll('.lett');

//Botón iniciar juego
function game(){
    document.getElementById("startGame").style.display = 'none';
    document.getElementById("addWord").style.display = 'none';
    document.getElementById("resultBox").style.display = 'none';
    document.getElementById("game").style.display = 'flex';
    iniciar();
}

function addWords(){
    document.getElementById("startGame").style.display = 'none';
    document.getElementById("addWord").style.display = 'none';
    document.getElementById("resultBox").style.display = 'flex';
     
}

function saveAndPlay(){
    document.getElementById("startGame").style.display = 'none';
    document.getElementById("addWord").style.display = 'none';
    document.getElementById("resultBox").style.display = 'none';
    document.getElementById("game").style.display = 'block';
}

function cancelAdd(){
   document.getElementById("resultBox").style.display = 'none';
   document.getElementById("addWord").style.display = 'block';
   document.getElementById("startGame").style.display = 'block';
}

function playAgain(){

}
//Botón desistir
function returnInicio(){
   document.getElementById("startGame").style.display = 'block';
   document.getElementById("addWord").style.display = 'block';
   document.getElementById("resultBox").style.display = 'none';
   document.getElementById("game").style.display ='none';
}
function id(str){
    return document.getElementById(str);
}


function iniciar(event){
    id('erroneas').innerHTML='';
    imagen.src = 'img/img0.png';
    errores = 0;
    aciertos = 0;

    const parrafo =id('palabra_a_adivinar');
    parrafo.innerHTML = '';

    palabraOc=palabras[Math.floor(Math.random()*palabras.length)];
    const cant_letras = palabraOc.length;
    const cant_palabras = palabras.length;
    
    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[i].disabled = false;
    }

    for( let i = 0; i < cant_letras; i++ ){
        const span = document.createElement( 'span' );
        parrafo.appendChild(span);
    }
 

}


