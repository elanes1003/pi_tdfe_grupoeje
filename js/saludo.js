let recuperoUsuario= localStorage.getItem("usuariosEnLocal");
let usuarioRecuperado= JSON.parse(recuperoUsuario);
if(recuperoUsuario !== null){
let saludoPersonalizado= document.querySelector(".saludoPersonalizado")
saludoPersonalizado.style.display="flex"
let saludo= document.querySelector(".saludo")
saludo.innerText=`Bienvenido ${usuarioRecuperado.email}`
saludo.style.display="flex";
let ocultarLogin=document.querySelector(".ocultarLogin");
ocultarLogin.style.display="None";
let logout= document.querySelector(".logout");
logout.style.display="inline";
let barraBusqueda=document.querySelector(".barraBusqueda")
barraBusqueda.style.display="flex"
}




