let botonPregunta = document.querySelector(".botonPregunta")
let contenedorRespuesta = document.querySelector(".contenedorRespuesta")

botonPregunta.addEventListener("click", () => {
    contenedorRespuesta.classList.toggle("active")
})