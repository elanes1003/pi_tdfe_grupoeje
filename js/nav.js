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