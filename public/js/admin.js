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


menu.addEventListener("click", () => {
    bienvenido.classList.add("active");
    usuariosRegistrados.classList.add("active");
    preguntasUsuarios.classList.remove("active");
    enviosPendientes.classList.remove("active");
    paquetesDevueltos.classList.remove("active");
    reclamos.classList.remove("active");
    perfilAdmin.classList.remove("active");
})

menu2.addEventListener("click", () => {
    bienvenido.classList.add("active");
    usuariosRegistrados.classList.remove("active");
    preguntasUsuarios.classList.add("active");
    enviosPendientes.classList.remove("active");
    paquetesDevueltos.classList.remove("active");
    reclamos.classList.remove("active");
    perfilAdmin.classList.remove("active");
})

menu3.addEventListener("click", () => {
    bienvenido.classList.add("active");
    usuariosRegistrados.classList.remove("active");
    preguntasUsuarios.classList.remove("active");
    enviosPendientes.classList.add("active");
    paquetesDevueltos.classList.remove("active");
    reclamos.classList.remove("active");
    perfilAdmin.classList.remove("active");
})

menu4.addEventListener("click", () => {
    bienvenido.classList.add("active");
    usuariosRegistrados.classList.remove("active");
    preguntasUsuarios.classList.remove("active");
    enviosPendientes.classList.remove("active");
    paquetesDevueltos.classList.add("active");
    reclamos.classList.remove("active");
    perfilAdmin.classList.remove("active");
})

menu5.addEventListener("click", () => {
    bienvenido.classList.add("active");
    usuariosRegistrados.classList.remove("active");
    preguntasUsuarios.classList.remove("active");
    enviosPendientes.classList.remove("active");
    paquetesDevueltos.classList.remove("active");
    reclamos.classList.add("active");
    perfilAdmin.classList.remove("active");
})

foto.addEventListener("click", () => {
    bienvenido.classList.add("active");
    usuariosRegistrados.classList.remove("active");
    preguntasUsuarios.classList.remove("active");
    enviosPendientes.classList.remove("active");
    paquetesDevueltos.classList.remove("active");
    reclamos.classList.remove("active");
    perfilAdmin.classList.add("active");
})