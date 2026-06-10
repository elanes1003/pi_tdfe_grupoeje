let qs=location.search;
let qsObj= new URLSearchParams(qs)
let idProduct= qsObj.get("idProd")
let infoProduct= document.querySelector(".infoProduct")
let productImg=document.querySelector(".productImg")
let productReview= document.querySelector(".productReview")
fetch (`https://dummyjson.com/products/${idProduct}`)
.then (function(response){
    return response.json();

})
.then (function(data){
    const product=data;
    console.log(data)
    let tags=" "
    for (let i = 0; i < product.tags.length; i++) {
            tags+=`<li>${product.tags[i]}</li>`
    }       
    productImg.innerHTML=
    `<img src=${product.thumbnail}>`
    infoProduct.innerHTML=`
     <h1 >${product.title}</h1>
<p class="marca">Marca: ${product.brand} </p>
<p class="precio">Precio: $${product.price}</p>
<p class="categoria">Categoría: ${product. category} </p>
<p class="descripcion"><Descripción: ${product.description}</p>
<p class="stock">Stock: ${product.stock}</p>
<ul class="tags">
${tags}
</ul>`
let reviews=""
 for (let i = 0; i<3; i++) {
            reviews+=`
            <ul>
                    <li>rating: ${product.reviews[i].rating}</li>
                    <li>comment: ${product.reviews[i].comment}</li>
                    <li>fecha: ${product.reviews[i].date}</li>
                    <li>nombre del usuario: ${product.reviews[i].reviewerName}</li>
                
            </ul>`


    }  

    productReview.innerHTML=`${reviews}`   
})
.catch(function(error){
    console.log(` El error es:`+ error)
})