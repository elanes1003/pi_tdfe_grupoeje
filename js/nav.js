let listaCategorias = document.querySelector("#menuCategorias")

fetch('https://dummyjson.com/products/category-list')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        let categoriasNombres = ""
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            
            categoriasNombres += `<li><a href="category.html?id=${element}">${element}</a></li>`
        }
        listaCategorias.innerHTML = categoriasNombres
    })
    .catch(function(error) {
        console.log("El error es: " + error);
    })

let barra = document.querySelector(".barraBusqueda");
let busqueda = document.querySelector("#busqueda")
barra.addEventListener("submit", function (e) {
    e.preventDefault()
    if (busqueda.value == "") {
        alert("El campo de busqueda no puede estar vacio")
    }
    else if (busqueda.value.length < 3) {
        alert("El termino buscado debe tener al menos 3 caracteres")

    }
    else {
        barra.submit();
    }
})