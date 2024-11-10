let carrito = [];
let totalPrecio = 0;

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

    let totalPrecio = 0;

    carrito.slice(0, 20).forEach((producto) => { // Solo mostrar los primeros 20 productos
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>$${producto.precio.toLocaleString()}</td>
            <td>${producto.cantidad}</td>
            <td>$${(producto.precio * producto.cantidad).toLocaleString()}</td>
            <td><button onclick="eliminarDelCarrito(${producto.id})">X</button></td>
        `;
        contenidoCarrito.appendChild(fila);
        totalPrecio += producto.precio * producto.cantidad;
    });

    // Mostrar el total de la compra
    document.getElementById("totalPrecio").textContent = totalPrecio.toLocaleString();
    document.getElementById("totalPagar").textContent = (totalPrecio + 15000).toLocaleString(); // Costo de domicilio agregado
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(idProducto) {
    carrito = carrito.filter((p) => p.id !== idProducto);
    actualizarCarrito();
}

// Función para limpiar los campos del formulario
function limpiarCampos() {
    document.getElementById("formTarjeta").reset();
}

// Función para confirmar la compra
function confirmarCompra() {
    const numeroTarjeta = document.getElementById("numTarjeta").value;
    const expiracion = document.getElementById("expiracion").value;
    const codigo = document.getElementById("codigo").value;
    const nombreTitular = document.getElementById("nombreTitular").value;
    const pais = document.getElementById("pais").value;
    const tipoTarjeta = document.getElementById("tipoTarjeta").value;

    // Validar si los campos están completos
    if (numeroTarjeta && expiracion && codigo && nombreTitular && pais && tipoTarjeta) {
        // Crear la promesa para la compra
        const promesaCompra = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (carrito.length > 20) {
                    reject("No puedes comprar más de 20 productos.");
                } else if (totalPrecio > 1000000) { 
                    reject("El presupuesto máximo ha sido sobrepasado.");
                } else {
                    resolve("Compra confirmada. ¡Gracias por su compra!");
                }
            }, Math.random() * (3000 - 2000) + 2000); // Tiempo random entre 2 y 3 segundos
        });

        promesaCompra
            .then((mensaje) => {
                alert(mensaje);
                carrito = []; // Vaciar el carrito después de la compra
                actualizarCarrito();
                window.location.href = "index.html"; // Redirigir a la página inicial
            })
            .catch((error) => {
                alert(error);
            });

        document.querySelector("button[onclick='confirmarCompra()']").disabled = true; // Deshabilitar el botón
    } else {
        alert("Por favor, complete todos los datos de la tarjeta.");
    }
}
