let carrito = JSON.parse(localStorage.getItem("carrito")) || []; 

// Función para mostrar los productos en la tabla
function mostrarCarrito() {
    const contenidoCarrito = document.getElementById("contenidoCarrito");
    contenidoCarrito.innerHTML = "";

    carrito.forEach((item, index) => {
        const fila = document.createElement("tr");
        const totalProducto = item.precio * item.cantidad;

        fila.innerHTML = `
            <td>${item.nombre}</td>
            <td>$${item.precio.toLocaleString("es-CO")}</td>
            <td>${item.cantidad}</td> 
            <td>$${totalProducto.toLocaleString("es-CO")}</td>
            <td><button onclick="eliminarDelCarrito(${index})">Eliminar</button></td>
        `;
        contenidoCarrito.appendChild(fila);
    });

// Actualiza el resumen de la compra
    actualizarResumen(); 
}


function actualizarResumen() {
    let totalPrecio = 0;

    carrito.forEach(item => {
        totalPrecio += item.precio * item.cantidad;
    });

    document.getElementById("totalPrecio").textContent = totalPrecio.toLocaleString("es-CO");
    const totalPagar = totalPrecio + 15000; 
    document.getElementById("totalPagar").textContent = totalPagar.toLocaleString("es-CO");
}

// Llamar a la función para mostrar los productos cuando la página cargue
document.addEventListener("DOMContentLoaded", mostrarCarrito);

function eliminarDelCarrito(index) {
    carrito.splice(index, 1); // Eliminar el producto en el índice dado

    // Actualizar el carrito en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Actualizar la vista del carrito
    mostrarCarrito();
}


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
        botonConfirmar.disabled = true; // Deshabilitar el botón

        const promesaCompra = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (carrito.length > 20) {
                    reject("No puedes comprar más de 20 productos.");
                } else if (totalPrecio > 1000000) { 
                    reject("El presupuesto máximo ha sido sobrepasado.");
                } else {
                    resolve("Compra confirmada. ¡Gracias por su compra!");
                }
            }, Math.random() * (3000 - 2000) + 2000); 
        });

        promesaCompra
            .then((mensaje) => {
                alert(mensaje);
                carrito = []; // Vaciar el carrito después de la compra
                localStorage.setItem("carrito", JSON.stringify(carrito)); // Actualizar el localStorage
                mostrarCarrito(); // Actualizar la vista del carrito
                window.location.href = "index.html"; 
            })
            .catch((error) => {
                alert(error);
                botonConfirmar.disabled = false; 
            });
    } else {
        alert("Por favor, complete todos los datos de la tarjeta.");
    }
}
