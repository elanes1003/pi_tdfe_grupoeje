let campoEmail= document.querySelector("#email");
let campoContrasennia= document.querySelector("#contrasennia");
let campoContrasenniaRepetida= document.querySelector("#contrasenniaRepetida");


let login= document.querySelector(".registerForm");
login.addEventListener ("submit",function(event){
    event.preventDefault()
    if (campoEmail.value==""){
        alert("El campo de email no puede estar vacio")
    }
    else if (campoContrasennia.value==""){
        alert("El campo de contraseña no puede estar vacio")
    }

    else if(campoContrasennia.value.length<6){
             alert("La contraseña debe tener al menos 6 caracteres")       
        }
    else if(campoContrasennia.value !== campoContrasenniaRepetida.value){
        alert("Las contraseñas no coinciden")
    }    
    else{

        this.submit();
    }

})
