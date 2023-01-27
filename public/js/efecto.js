let barra = document.querySelector(".barra")
let linea1 = document.querySelector(".linea1");
let linea2 = document.querySelector(".linea2");
let linea3 = document.querySelector(".linea3");
let link = document.querySelector(".prueba");
let menu = document.querySelector(".menu")


barra.addEventListener("click", () => {
    linea1.classList.toggle("activelinea1");
    linea2.classList.toggle("activelinea2");
    linea3.classList.toggle("activelinea3");
    link.classList.toggle("active")
    menu.classList.toggle("active")
});


