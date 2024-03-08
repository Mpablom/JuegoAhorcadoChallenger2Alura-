
for (let i = 0; i < btn_letras.length; i++) {
    btn_letras[i].addEventListener('click', click_letras);
}

document.addEventListener('keydown', function(event) {
    const keyPressed = event.key.toUpperCase(); 
    for (let i = 0; i < btn_letras.length; i++) {
        const buttonText = btn_letras[i].innerText.toUpperCase(); 
        if (keyPressed === buttonText) {
            click_letras({ target: btn_letras[i] });
        }
    }
});


function click_letras(event){
    const spans = document.querySelectorAll('#palabra_a_adivinar span');
    const button = event.target;
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
}
