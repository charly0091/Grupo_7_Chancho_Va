// USUARIOS REGISTRADOS
let foto2 = document.querySelector(".foto2")
let usuarioGrande = document.querySelector(".usuarioGrande")
let targetaUsuario = document.querySelector(".targetaUsuario")

foto2.addEventListener("click", () => {
    usuarioGrande.classList.add("active")
    targetaUsuario.classList.add("active")
})