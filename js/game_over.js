//fin del juego
function game_over(){
    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[i].disabled = true;
        
    }
}
game_over();