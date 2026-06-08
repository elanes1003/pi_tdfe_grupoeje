let qs = location.search;
let qsObj = new URLSearchParams(qs)
let idCategoria = qsObj.get("id")

let titulo = document.querySelector("#tituloCategoria");
let contenedorProductos = document.querySelector("#productosCategoria");

titulo.innerText = `${idCategoria}`

fetch(`https://dummyjson.com/products/category/${idCategoria}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)

        let productos = data.products
        let productosDeCategoria = ""

        for (let i = 0; i < productos.length; i++) {
            const element = productos[i];

            productosDeCategoria += `<article class="producto">
                    <img src="${element.thumbnail}" alt="${element.title}">
                    <h3>${element.title}</h3>
                    <h3>$${element.price}</h3>
                    <p>${element.description}</p>
                    
                    <a href="./product.html?idProd=${element.id}">VER DETALLE</a>
                </article>`
            
        };
        contenedorProductos.innerHTML = productosDeCategoria;
    })

    .catch(function(error) {
        console.log("Error: " + error);
    })
