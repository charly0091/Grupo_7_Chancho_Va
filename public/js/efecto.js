let barra = document.querySelector(".barra")
let linea1 = document.querySelector(".linea1");
let linea2 = document.querySelector(".linea2");
let linea3 = document.querySelector(".linea3");
let link = document.querySelector(".contenedorOculto");
let menus = document.querySelector(".palabra")
let producto = document.querySelector(".categoriaProductos")
let iconoBuscardor = document.querySelector(".iconoBuscador")
let barraBuscadora = document.querySelector(".barraBuscadora")
let categorias2 = document.querySelector(".categorias2")
let categoriaProductos2 = document.querySelector(".categoriaProductos2");
let menuUser = document.querySelector(".menuUser")
let flecha = document.querySelector(".sesionIniciada")
let flechaCat = document.querySelector(".flecha")


barra.addEventListener("click", () => {
    linea1.classList.toggle("activelinea1");
    linea2.classList.toggle("activelinea2");
    linea3.classList.toggle("activelinea3");
    link.classList.toggle("active")
});

menus.addEventListener("click",() => {
    producto.classList.toggle("active")
})

iconoBuscardor.addEventListener("click",() => {
    barraBuscadora.classList.toggle("active")
})

categorias2.addEventListener("click", () => {
    categoriaProductos2.classList.toggle("active")
})

flechaCat.addEventListener("click", () => {
    producto.classList.toggle("active")
})

/* flecha.addEventListener("click", () => {
    menuUser.classList.toggle("active")
}) */