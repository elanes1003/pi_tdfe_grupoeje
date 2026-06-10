let qs = location.search
let qsObj = new URLSearchParams(qs)
let idBusqueda = qsObj.get("busqueda")

let titulo = document.querySelector("#tituloBusqueda")
let mensaje = document.querySelector("#avisoNoHay")
let contenedorProductos = document.querySelector(".contenedorProductos")

titulo.innerText = `Resultados de busqueda para: ${idBusqueda}`

fetch(`https://dummyjson.com/products/search?q=${idBusqueda}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)

        let productos = data.products
        let productosBuscados = ""

        if (productos.length === 0) {
            mensaje.style.display = "block"
            titulo.style.display = "none"
            mensaje.innerText = `No hay resultados para el termino: ${idBusqueda}`

        } else {
            for (let i = 0; i < productos.length; i++) {
            const element = productos[i];

            productosBuscados += `<article class="producto">
                    <img src="${element.thumbnail}" alt="${element.title}">
                    <h3>${element.title}</h3>
                    <h3>$${element.price}</h3>
                    <p>${element.description}</p>
                    
                    <a href="./product.html?idProd=${element.id}">VER DETALLE</a>
                </article>`
            
            };
            contenedorProductos.innerHTML = productosBuscados;
        }
  
    })
    .catch(function(error) {
        console.log("Error: " + error);

    })