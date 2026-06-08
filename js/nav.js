let listaCategorias = document.querySelector("#menuCategorias")

fetch('https://dummyjson.com/products/category-list')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        let categoriasNombres = ""
        for (let i = 0; i < data.length; i++) {
            const categoria = data[i];
            
            categoriasNombres += `<li><a hrefa href="category.html?id=${categoria}">${categoria}</a></li>`
        }
        listaCategorias.innerHTML = categoriasNombres
    })
    .catch(function(error) {
        console.log("El error es: " + error);
    })