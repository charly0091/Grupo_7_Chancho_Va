let cantidadProductos = 1;

const botonDecrementar = document.getElementById("decrementar");
botonDecrementar.addEventListener("click", () => {
  if (cantidadProductos > 1) {
    cantidadProductos--;
    document.getElementById("cantidad").textContent = cantidadProductos;
  }
});

const botonIncrementar = document.getElementById("incrementar");
botonIncrementar.addEventListener("click", () => {
  cantidadProductos++;
  document.getElementById("cantidad").textContent = cantidadProductos;
});

//agrega +1 o -1 a los productos alojados en el carrito. Actualmente solo funciona para un solo producto. Tengo que arregarlo.