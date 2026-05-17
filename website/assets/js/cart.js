// 1. Recuperamos el número del carrito guardado en la memoria del navegador
let cantidadArticulos = parseInt(localStorage.getItem("carritoGuardado"), 10);

// Si es la primera vez que el usuario entra (no hay un número válido), empezamos en 0
if (isNaN(cantidadArticulos)) {
  cantidadArticulos = 0;
}

// 2. Esta función sirve únicamente para actualizar el número visual que sale en el icono de arriba
function actualizarContador(valor) {
  const contador = document.getElementById("numero-articulos-carrito");
  // Solo lo actualiza si realmente encuentra el icono en la página actual
  if (contador !== null) {
    contador.textContent = valor;
  }
}

// 3. Inicializamos el contador una sola vez cuando carga la página
function inicializarCarrito() {
  actualizarContador(cantidadArticulos);
}

// 4. Usamos delegación de eventos para capturar clics en el botón aunque se agregue después
document.addEventListener("click", function (event) {
  const botonAgregar = event.target.closest("#boton-agregar-al-carrito");
  if (!botonAgregar) {
    return;
  }

  event.preventDefault();
  cantidadArticulos++; // Suma 1 al carrito
  localStorage.setItem("carritoGuardado", cantidadArticulos); // Lo guarda en la memoria
  actualizarContador(cantidadArticulos); // Actualiza el número visual
});

// 5. Arrancamos el contador cuando termina la carga de la página
window.addEventListener("load", inicializarCarrito);