
//click de adivinar letra
for( let i = 0; i < btn_letras.length ; i++ ){
    btn_letras[i].addEventListener( 'click', click_letras );
    
}

function click_letras(event){
    const spans = document.querySelectorAll('#palabra_a_adivinar span');
    const button = event.target; //cuál de las letras, llamó a la función.
    button.disabled = true;

    const letra = button.innerHTML.toUpperCase();
    const palabra = palabraOc.toUpperCase();
    
    let acerto = false;

    for(let i = 0; i < palabra.length; i++){
     if( letra == palabra[i]){
            spans[i].innerHTML = letra;
            aciertos++;
            acerto = true;
        }
      }
      if( acerto == false){
        errores++;
        const source =`img/img${errores}.png`;
        const imagen = id('imagen');
        imagen.src = source;
      }

    if(errores == 7){
        Swal.fire({
            title: '¡Perdiste!',
            text: 'La palabra correcta era: '+palabraOc,
            icon:'error',
            backdrop: true,
            allowOutsideClick: true,
            confirmButtonColor:'#0A3871',
            showCloseButton: true,
            showClass:{
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
            
          })
        game_over();
    }else if(aciertos == palabraOc.length){
        Swal.fire({
            title: '¡Felicidades!',
            text: '¡Has adivinado la palabra oculta!',
            icon: 'success',
            backdrop: true,
            allowOutsideClick: true,
            confirmButtonColor:'#0A3871',
            showCloseButton: true,
            showClass:{
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
            
          })
        game_over();
    }
    console.log("la letra " + letra + " en la palabra " + palabra + "existe? " + acerto);

}
