// Verificar si los campos del formulario están llenos antes de iniciar la compra
document.getElementById("iniciarCompra").addEventListener("click", function () {
    const nombre = document.getElementById("nombre").value;
    const presupuesto = document.getElementById("presupuesto").value;
    const cantidad = document.getElementById("cantidad").value;
    const direccion = document.getElementById("direccion").value;
  
    // Verificar que todos los campos estén completos
    if (nombre && presupuesto && cantidad && direccion) {
      // Redirigir a la vista de productos
      window.location.href = "productos.html";
    } else {
      alert("Por favor, complete todos los campos del formulario.");
    }
  });