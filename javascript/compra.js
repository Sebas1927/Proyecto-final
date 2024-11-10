document.getElementById('iniciarCompra').addEventListener('click', function () {
    const nombre = document.getElementById('nombre').value.trim();
    const presupuesto = document.getElementById('presupuesto').value.trim();
    const cantidad = document.getElementById('cantidad').value.trim();
    const direccion = document.getElementById('direccion').value.trim();
    const tipoEntrega = document.getElementById('tipoEntrega').value;

    let mensajeError = '';

    if (!nombre || nombre.length > 20) {
        mensajeError += 'El nombre es obligatorio y no debe superar 20 caracteres. ';
    }
    if (!presupuesto || isNaN(presupuesto) || Number(presupuesto) < 0) {
        mensajeError += 'El presupuesto debe ser un número positivo. ';
    }
    if (!cantidad || isNaN(cantidad) || Number(cantidad) <= 0 || Number(cantidad) > 20) {
        mensajeError += 'La cantidad debe ser un número positivo y no mayor a 20. ';
    }
    if (!direccion) {
        mensajeError += 'La dirección es obligatoria. ';
    }
    if (!tipoEntrega) {
        mensajeError += 'Debe seleccionar un tipo de entrega. ';
    }

    const mensajeErrorElem = document.getElementById('mensajeError');
    if (mensajeError) {
        mensajeErrorElem.textContent = mensajeError;
    } else {
        mensajeErrorElem.textContent = '';
        window.location.href = 'productos.html'; 
    }
});