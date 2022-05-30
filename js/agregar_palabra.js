//agregar palabra
const resultBox = document.querySelector("#resultBox");
const botonGuardar = document.querySelector("#save");
const textAreaNuevaPalabra = document.querySelector("#textBox");
    
botonGuardar.addEventListener('click', ()  => {
    if(/^[A-ZÑ]+$/i.test(textAreaNuevaPalabra.value) === false){
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
 
 
 
/*botonGuardar.addEventListener("click", () => {    
    resultBox.textContent = "";
    setTimeout(() => {
        if(textAreaNuevaPalabra.value != ""){
            if(textAreaNuevaPalabra.value.length <= 8){
                palabras.push((textAreaNuevaPalabra.value).toUpperCase())
                resultBox.textContent = `Agregaste correctamente la palabra: ${(textAreaNuevaPalabra.value).toUpperCase()}`
                textAreaNuevaPalabra.value = "";
            } else {
                resultBox.textContent = `La palabra supera los 8 caracteres permitidos`;
                textAreaNuevaPalabra.value = "";
            }
        }
    }, game());
})*/
