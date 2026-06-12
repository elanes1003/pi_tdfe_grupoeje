let botonLogout = document.querySelector(".logout")

botonLogout.addEventListener("click", function(e){
    e.preventDefault()
    localStorage.removeItem("usuariosEnLocal")

let saludoPersonalizado= document.querySelector(".saludoPersonalizado")
saludoPersonalizado.style.display = "none"

let ocultarLogin=document.querySelector(".ocultarLogin");
ocultarLogin.style.display="flex";

let ocultarLogout = document.querySelector(".logout");
ocultarLogout.style.display = "none"

})