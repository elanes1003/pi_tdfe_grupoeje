let campoEmail= document.querySelector("#email");
let campoContrasennia= document.querySelector("#contrasennia");

let login= document.querySelector(".login");
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
    else{
    this.submit();
    }








})