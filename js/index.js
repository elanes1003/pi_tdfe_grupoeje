let nuestrosProductos = document.querySelector("#nuestrosProd")
let productosDestacados = document.querySelector("#prodDestacados")

fetch('https://dummyjson.com/products/category/mobile-accessories')
.then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)

        let productos = data.products
        let productosIndex = ""

        for (let i = 0; i < productos.length; i++) {
            const element = productos[i];

            productosIndex += `<article class="producto">
                    <img src="${element.thumbnail}" alt="${element.title}">
                    <h3>${element.title}</h3>
                    <h3>$${element.price}</h3>
                    <p>${element.description}</p>
                    
                    <a href="./product.html?idProd=${element.id}">VER DETALLE</a>
                </article>`
            
        };
        nuestrosProductos.innerHTML = productosIndex;
    })

    .catch(function(error) {
        console.log("Error: " + error);
    })

    fetch('https://dummyjson.com/products/category/smartphones')
.then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)

        let productos = data.products
        let productosIndex = ""

        for (let i = 0; i < productos.length; i++) {
            const element = productos[i];

            productosIndex += `<article class="producto">
                    <img src="${element.thumbnail}" alt="${element.title}">
                    <h3>${element.title}</h3>
                    <h3>$${element.price}</h3>
                    <p>${element.description}</p>
                    
                    <a href="./product.html?idProd=${element.id}">VER DETALLE</a>
                </article>`
            
        };
        productosDestacados.innerHTML = productosIndex;

    })

    .catch(function(error) {
        console.log("Error: " + error);
    })

