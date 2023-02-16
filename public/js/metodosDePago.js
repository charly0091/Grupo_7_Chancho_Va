let icono = document.querySelector(".icono")
let datoMetodoDePago = document.querySelector(".datoMetodoDePago")
let icono2 = document.querySelector(".icono2")
let datoMetodoDePago2 = document.querySelector(".datoMetodoDePago2")
let icono3 = document.querySelector(".icono3")
let datoMetodoDePago3 = document.querySelector(".datoMetodoDePago3")

icono.addEventListener("click",() => {
    datoMetodoDePago.classList.toggle("active")
    datoMetodoDePago2.classList.remove("active")
    datoMetodoDePago3.classList.remove("active")
})

icono2.addEventListener("click",() => {
    datoMetodoDePago2.classList.toggle("active")
    datoMetodoDePago.classList.remove("active")
    datoMetodoDePago3.classList.remove("active")
})

icono3.addEventListener("click",() => {
    datoMetodoDePago3.classList.toggle("active")
    datoMetodoDePago2.classList.remove("active")
    datoMetodoDePago.classList.remove("active")
})