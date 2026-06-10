let recuperoUsuario= localStorage.getItem("usuariosEnLocal");
let usuarioRecuperado= JSON.parse(recuperoUsuario);
let saludo= document.querySelector(".saludo");
saludo.innerText=`Bienvenido ${usuarioRecuperado.email}`
saludo.style.display="flex";
let ocultarLogin=document.querySelector(".ocultarLogin");
ocultarLogin.style.display="None";
let logout= document.querySelector(".logout");
logout.style.display="flex";
let barraBusqueda=document.querySelector(".barraBusqueda")
barraBusqueda.style.display="flex"

