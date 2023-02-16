let botonEnvio = document.querySelector(".botonEnvio")
let contenedorMediosEnvios = document.querySelector(".contenedorMediosEnvios")
let enviarPaquete = document.querySelector(".enviarPaquete")
let enviarPaquete2 = document.querySelector(".enviarPaquete2")
let enviarPaquete3 = document.querySelector(".enviarPaquete3")
let envioCorrecto = document.querySelector(".envioCorrecto")
let ventanaEnvio = document.querySelector(".ventanaEnvio")

botonEnvio.addEventListener("click", () => {
    contenedorMediosEnvios.classList.toggle("active")
})

enviarPaquete.addEventListener("click", () => {
    envioCorrecto.classList.add("active")
    ventanaEnvio.classList.add("active")
})

enviarPaquete2.addEventListener("click", () => {
    envioCorrecto.classList.add("active")
    ventanaEnvio.classList.add("active")
})

enviarPaquete3.addEventListener("click", () => {
    envioCorrecto.classList.add("active")
    ventanaEnvio.classList.add("active")
})