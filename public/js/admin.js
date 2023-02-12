let bienvenido = document.querySelector (".bienvenido")
let menu = document.querySelector(".nombreMenu")
let menu2 = document.querySelector(".nombreMenu2")
let menu3 = document.querySelector(".nombreMenu3")
let menu4 = document.querySelector(".nombreMenu4")
let menu5 = document.querySelector(".nombreMenu5")
let foto = document.querySelector(".foto")
let usuariosRegistrados = document.querySelector(".usuariosRegistrados")
let preguntasUsuarios = document.querySelector(".preguntasUsuarios")
let enviosPendientes = document.querySelector(".enviosPendientes")
let paquetesDevueltos = document.querySelector(".paquetesDevueltos")
let reclamos = document.querySelector(".reclamos")
let perfilAdmin = document.querySelector(".perfilAdmin")
let cajaImagen = document.querySelector(".foto2")
let targetaUsuarioGrande = document.querySelector(".usuarioGrande")
let targetaUsuario = document.querySelector(".targetaUsuario")
let botonPregunta = document.querySelector(".botonPregunta")
let contenedorRespuesta = document.querySelector(".contenedorRespuesta")
let botonEnvio = document.querySelector(".botonEnvio")
let contenedorMediosEnvios = document.querySelector(".contenedorMediosEnvios")
let enviarPaquete = document.querySelector(".enviarPaquete")
let enviarPaquete2 = document.querySelector(".enviarPaquete2")
let enviarPaquete3 = document.querySelector(".enviarPaquete3")
let ventanaEnvio = document.querySelector(".ventanaEnvio")
let envioCorrecto = document.querySelector(".envioCorrecto")
let nombreUsuarioReclamo = document.querySelector(".nombreUsuarioReclamo")
let ventanaReclamo = document.querySelector(".ventanaReclamo")

menu.addEventListener("click", () => {
    bienvenido.classList.add("active");
    usuariosRegistrados.classList.add("active");
    targetaUsuario.classList.remove("active")
    preguntasUsuarios.classList.remove("active");
    enviosPendientes.classList.remove("active");
    paquetesDevueltos.classList.remove("active");
    reclamos.classList.remove("active");
    perfilAdmin.classList.remove("active");
    targetaUsuarioGrande.classList.remove("active");
})

menu2.addEventListener("click", () => {
    bienvenido.classList.add("active");
    usuariosRegistrados.classList.remove("active");
    preguntasUsuarios.classList.add("active");
    enviosPendientes.classList.remove("active");
    paquetesDevueltos.classList.remove("active");
    reclamos.classList.remove("active");
    perfilAdmin.classList.remove("active");
    targetaUsuarioGrande.classList.remove("active");
})

menu3.addEventListener("click", () => {
    bienvenido.classList.add("active");
    usuariosRegistrados.classList.remove("active");
    preguntasUsuarios.classList.remove("active");
    enviosPendientes.classList.add("active");
    paquetesDevueltos.classList.remove("active");
    reclamos.classList.remove("active");
    perfilAdmin.classList.remove("active");
    targetaUsuarioGrande.classList.remove("active");
})

menu4.addEventListener("click", () => {
    bienvenido.classList.add("active");
    usuariosRegistrados.classList.remove("active");
    preguntasUsuarios.classList.remove("active");
    enviosPendientes.classList.remove("active");
    paquetesDevueltos.classList.add("active");
    reclamos.classList.remove("active");
    perfilAdmin.classList.remove("active");
    targetaUsuarioGrande.classList.remove("active");
})

menu5.addEventListener("click", () => {
    bienvenido.classList.add("active");
    usuariosRegistrados.classList.remove("active");
    preguntasUsuarios.classList.remove("active");
    enviosPendientes.classList.remove("active");
    paquetesDevueltos.classList.remove("active");
    reclamos.classList.add("active");
    perfilAdmin.classList.remove("active");
    targetaUsuarioGrande.classList.remove("active");
})

foto.addEventListener("click", () => {
    bienvenido.classList.add("active");
    usuariosRegistrados.classList.remove("active");
    preguntasUsuarios.classList.remove("active");
    enviosPendientes.classList.remove("active");
    paquetesDevueltos.classList.remove("active");
    reclamos.classList.remove("active");
    perfilAdmin.classList.add("active");
    targetaUsuarioGrande.classList.remove("active");
})

cajaImagen.addEventListener("click", () => {
    targetaUsuarioGrande.classList.add("active");
    targetaUsuario.classList.add("active")
})

botonPregunta.addEventListener("click", () => {
    contenedorRespuesta.classList.toggle("active")
})

botonEnvio.addEventListener("click", () => {
    contenedorMediosEnvios.classList.toggle("active")
})

enviarPaquete.addEventListener("click", () => {
    ventanaEnvio.classList.add("active");
    envioCorrecto.classList.add("active")
})

enviarPaquete2.addEventListener("click", () => {
    ventanaEnvio.classList.add("active");
    envioCorrecto.classList.add("active")
})

enviarPaquete3.addEventListener("click", () => {
    ventanaEnvio.classList.add("active");
    envioCorrecto.classList.add("active")
})

nombreUsuarioReclamo.addEventListener("click", () => {
    ventanaReclamo.classList.toggle("active")
})