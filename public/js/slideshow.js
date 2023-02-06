let carrusel = 0;
cambiarFoto();

function cambiarFoto() {
  let i;
  let fotos = document.getElementsByClassName("home__carrusel-fotos");
  for (i = 0; i < fotos.length; i++) {
    fotos[i].style.display = "none";
  }
  carrusel++;
  if (carrusel > fotos.length) {carrusel = 1}
  fotos[carrusel-1].style.display = "block";
  setTimeout(cambiarFoto, 5000); 
}