//agregar palabra
const botonGuardar = document.getElementById('save');
const textAreaNuevaPalabra = document.getElementById('textBox');

botonGuardar.addEventListener('click', ()  => {
    if(/^([0-9!¡()´¨:;,.""#$%&''*+/=?^_``{|}~-])*$/.test(textAreaNuevaPalabra.value) === true){
        Swal.fire({
            title: '¡Error!',
            text: '¡Solo se admiten letras!',
            icon: 'error',
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
    }else if(textAreaNuevaPalabra.value.length == 0){
        Swal.fire({
            title: '¡Error!',
            text: '¡Debe ingresar una palabra!',
            icon: 'error',
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
    }else if(textAreaNuevaPalabra.value.length >8){
        Swal.fire({
            title: '¡Error!',
            text: 'Solo están permitidas palabras de hasta 8 letras',
            icon: 'error',
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
    }else{
        palabras.push(textAreaNuevaPalabra.value.trim().toUpperCase());
        //alert('La palabra se agregó con éxito');
        Swal.fire({
            title: '¡Buen trabajo!',
            text: 'Has agregado tu palabra correctamente',
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
        
        game();


    }
});

