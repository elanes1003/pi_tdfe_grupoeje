let recuperoUsuario= localStorage.getItem("usuariosEnLocal");
let usuarioRecuperado= JSON.parse(recuperoUsuario);
let saludo= document.querySelector(".saludo");
saludo.innerText=`Bienvenido ${usuarioRecuperado.email}`
saludo.style.display="flex";
let navHorizontal=document.querySelector(".navhorizontal");
navHorizontal.style.display="None";
let logout= document.querySelector(".logout");
logout.style.display="flex";


