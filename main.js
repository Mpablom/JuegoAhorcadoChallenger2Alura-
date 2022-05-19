// Obtener año actual.
const actualYear = new Date().getFullYear();
// Asignar año actual al footer.
document.getElementById("year").innerHTML = actualYear;

//let resultBox = document.getElementById("resultBox");
//let startGame = document.getElementById("startGame");
//let addWord = document.getElementById("addWord");
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

const palabras = Array("Gordo", "Piloto", "Decaer", "Avion", "Muchos", "Caramelo", "Mielada", "Azucar", "Psicopata", "Hijo", "Eclosionar", "Boligrafo", "Gatito", "Gerente", "Banquete", "Cumpleaños", "Alarma", "Palido", "Camas", "Complejo");



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
//click de adivinar letra
for( let i = 0; i < btn_letras.length ; i++ ){
    btn_letras[i].addEventListener( 'click', click_letras );
}
function click_letras(event){
    const spans = document.querySelectorAll('#palabra_a_adivinar span')
    const button = event.target; //cuál de las letras, llamó a la función.
    button.disabled = true;
    const letra = button.innerHTML.toLowerCase();
    const palabra = palabraOc.toLowerCase();

    let acerto = false;
    for(let i = 0; i < palabra.length; i++){
        if( letra == palabra[i]){
            spans[i].innerHTML = letra;
            aciertos++;
            acerto = true;
        }
    }
    if(acerto == false){
        errores++;
        const source =`img/img${errores}.png`;
        const imagen = id('imagen');
        imagen.src = source;

    }
    if(errores == 7){
        id('resultado').innerHTML = "Perdiste, la palabra correcta era: " + palabraOc;
        game_over();
    }else if(aciertos == palabraOc.length){
        id('resultado').innerHTML = "FELICIDADES!!, GANASTE!!";
        game_over();
    }
    console.log("la letra " + letra + " en la palabra " + palabra + "existe? " + acerto);
}
//fin del juego
function game_over(){
    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[i].disabled = true;
        
    }
}