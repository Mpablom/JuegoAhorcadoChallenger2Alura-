
// Obtener año actual.
const actualYear = new Date().getFullYear();
// Asignar año actual al footer.
document.getElementById("year").innerHTML = actualYear;


const play = document.getElementById('startGame');
const imagen = id('imagen');
const btn_letras = document.querySelectorAll("#letras button");
//palabra oculta
let palabraOc = "";
let errores = 0;
let aciertos = 0;
//Botón iniciar juego
function game(){
    document.getElementById("startGame").style.display = 'none';
    document.getElementById("addWord").style.display = 'none';
    document.getElementById("resultBox").style.display = 'none';
    document.getElementById("game").style.display = 'block';
    iniciar();
}
//Botón agregar palabra
function addWords(){
    document.getElementById("startGame").style.display = 'none';
    document.getElementById("addWord").style.display = 'none';
    document.getElementById("resultBox").style.display = 'block';
     
}
//Botón guardar y empezar
function saveAndPlay(){
    document.getElementById("startGame").style.display = 'none';
    document.getElementById("addWord").style.display = 'none';
    document.getElementById("resultBox").style.display = 'none';
    document.getElementById("game").style.display = 'block';
}
//Botón cancelar
function cancelAdd(){
   document.getElementById("resultBox").style.display = 'none';
   document.getElementById("addWord").style.display = 'block';
   document.getElementById("startGame").style.display = 'block';
}
//Botón nuevo juego 
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

var palabras = Array("GORDO", "PILOTO", "DECAER", "AVION", "MUCHOS", "CARAMELO", "MIELADA", "AZUCAR", "HIJO", "ECLOSION", "GATITO", "GERENTE", "BANQUETE", "ALARMA", "PALIDO", "CAMAS", "COMPLEJO");


function iniciar(event){
    imagen.src = 'img/img0.png';
    errores = 0;
    aciertos = 0;

    const parrafo =id('palabra_a_adivinar');
    parrafo.innerHTML = '';

    palabraOc=palabras[Math.floor(Math.random()*palabras.length)];
    console.log(palabraOc);
    const cant_letras = palabraOc.length;
    
    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[i].disabled = false;   
    }

    for( let i = 0; i < cant_letras; i++ ){
        const span = document.createElement( 'span' );
        parrafo.appendChild(span);
    }


}


