let carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(idProducto) {
  const producto = productos.find((p) => p.id === idProducto);
  const productoEnCarrito = carrito.find((p) => p.id === idProducto);

  if (productoEnCarrito) {
    productoEnCarrito.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  actualizarCarrito();
}

// Función para actualizar el carrito
function actualizarCarrito() {
  const contenidoCarrito = document.getElementById("contenidoCarrito");
  contenidoCarrito.innerHTML = "";

  carrito.forEach((producto) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td>$${producto.precio * producto.cantidad}</td>
            <td><button onclick="eliminarDelCarrito(${
              producto.id
            })">X</button></td>
        `;
    contenidoCarrito.appendChild(fila);
  });
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(idProducto) {
  carrito = carrito.filter((p) => p.id !== idProducto);
  actualizarCarrito();
}

// Función para confirmar la compra
function confirmarCompra() {
  const numeroTarjeta = document.getElementById("numTarjeta").value;
  const expiracion = document.getElementById("expiracion").value;
  const codigo = document.getElementById("codigo").value;
  const nombreTitular = document.getElementById("nombreTitular").value;
  const pais = document.getElementById("pais").value;

  if (numeroTarjeta && expiracion && codigo && nombreTitular && pais) {
    alert("Compra confirmada. ¡Gracias por su compra!");
    carrito = []; // Vaciar el carrito después de la compra
    actualizarCarrito();
  } else {
    alert("Por favor, complete todos los datos de la tarjeta.");
  }
}