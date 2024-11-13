// Recupera el carrito de localStorage al cargar la página del carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let totalPrecio = 0;

// Función para actualizar el carrito y mostrar los productos en la tabla
function actualizarCarrito() {
    const contenidoCarrito = document.getElementById("contenidoCarrito");
    contenidoCarrito.innerHTML = ""; // Limpiar la tabla antes de llenarla

    let totalPrecio = 0;

    // Recuperar el carrito de localStorage
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Iterar sobre los productos en el carrito
    carrito.forEach((producto) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>$${producto.precio.toLocaleString()}</td>
            <td>${producto.cantidad}</td>
            <td>$${(producto.precio * producto.cantidad).toLocaleString()}</td>
            <td><button onclick="eliminarDelCarrito(${producto.id})">Eliminar</button></td>
        `;
        contenidoCarrito.appendChild(fila);
        totalPrecio += producto.precio * producto.cantidad;
    });

    // Actualizar el total
    document.getElementById("totalPrecio").textContent = totalPrecio.toLocaleString();
    document.getElementById("totalPagar").textContent = (totalPrecio + 15000).toLocaleString(); // Incluye el costo del domicilio
}

// Llamar a actualizarCarrito cuando la página cargue
document.addEventListener("DOMContentLoaded", actualizarCarrito);


// Función para eliminar un producto del carrito
function eliminarDelCarrito(idProducto) {
    carrito = carrito.filter((p) => p.id !== idProducto);

    // Actualiza el carrito en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    
    actualizarCarrito();
}

// Carga el carrito al iniciar
document.addEventListener("DOMContentLoaded", actualizarCarrito);


    // Mostrar el total de la compra
    document.getElementById("totalPrecio").textContent = totalPrecio.toLocaleString();
    document.getElementById("totalPagar").textContent = (totalPrecio + 15000).toLocaleString(); // Costo de domicilio agregado


// Función para eliminar un producto del carrito
function eliminarDelCarrito(idProducto) {
    carrito = carrito.filter((p) => p.id !== idProducto);
    actualizarCarrito();
}

// Función para limpiar los campos del formulario
function limpiarCampos() {
    document.getElementById("formTarjeta").reset();
}

function confirmarCompra() {
    const numeroTarjeta = document.getElementById("numTarjeta").value;
    const expiracion = document.getElementById("expiracion").value;
    const codigo = document.getElementById("codigo").value;
    const nombreTitular = document.getElementById("nombreTitular").value;
    const pais = document.getElementById("pais").value;
    const tipoTarjeta = document.getElementById("tipoTarjeta").value;
    const botonConfirmar = document.querySelector("button[onclick='confirmarCompra()']");

    if (numeroTarjeta && expiracion && codigo && nombreTitular && pais && tipoTarjeta) {
        botonConfirmar.disabled = true;  // Deshabilitar el botón

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
                localStorage.setItem("carrito", JSON.stringify(carrito)); // Actualizar el localStorage
                actualizarCarrito();
                window.location.href = "index.html"; // Redirigir a la página inicial
            })
            .catch((error) => {
                alert(error);
                botonConfirmar.disabled = false; // Habilitar el botón si hay un error
            });

    } else {
        alert("Por favor, complete todos los datos de la tarjeta.");
    }
}
