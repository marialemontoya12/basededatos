document.addEventListener("DOMContentLoaded", function () { 
    // Espera a que el DOM esté completamente cargado antes de ejecutar la función.
    
    const cotizacionDatos = JSON.parse(localStorage.getItem("cotizacionDatos"));
    // Recupera y convierte los datos almacenados en localStorage bajo la clave "cotizacionDatos" desde formato JSON a un objeto JavaScript.
    
    console.log("Datos recuperados de localStorage:", cotizacionDatos);
    // Imprime los datos recuperados en la consola para verificar que se obtuvieron correctamente.

    const valoresUnitarios = {
        "Asesorias": 10.00,
        "Domicilios": 15.00,
        "Kit Aspiradora y Fregadora": 8.50,
        "Kit Paños, Esponjas y Guantes": 20.00,
        "Otros": 12.75,
    };
    // Define un objeto que asocia productos con sus valores unitarios.

    const datosPersonalesTbody = document.getElementById("datos-personales");
    // Selecciona el elemento con el id "datos-personales" (presumiblemente un <tbody> en una tabla).

    const row = document.createElement("tr");
    // Crea un nuevo elemento de fila (<tr>) que se añadirá a la tabla.

    row.innerHTML = `
        <td>${cotizacionDatos.nombres}</td>  <!-- Inserta el valor "nombres" de cotizacionDatos en la primera celda. -->
        <td>${cotizacionDatos.ciudad}</td>   <!-- Inserta el valor "ciudad" de cotizacionDatos en la segunda celda. -->
        <td>${cotizacionDatos.direccion}</td> <!-- Inserta el valor "direccion" de cotizacionDatos en la tercera celda. -->
        <td>${cotizacionDatos.telefono}</td>  <!-- Inserta el valor "telefono" de cotizacionDatos en la cuarta celda. -->
    `;
    datosPersonalesTbody.appendChild(row);
    // Añade la fila creada al <tbody> seleccionado previamente (datos-personales).

    const productosSeleccionadosTbody = document.getElementById("productos-seleccionados");
    // Selecciona el elemento con el id "productos-seleccionados" (presumiblemente un <tbody> en una tabla para los productos seleccionados).

    cotizacionDatos.productos.forEach((producto) => {
        // Itera sobre cada producto en la lista de productos recuperada de cotizacionDatos.

        const valorUnitario = valoresUnitarios[producto.producto];
        // Obtiene el valor unitario del producto usando su nombre como clave en el objeto valoresUnitarios.

        const total = valorUnitario * producto.cantidad;
        // Calcula el total multiplicando el valor unitario por la cantidad de producto seleccionado.

        const productoRow = document.createElement("tr");
        // Crea una nueva fila (<tr>) para representar cada producto.

        productoRow.innerHTML = `
            <td>${producto.producto}</td>              <!-- Muestra el nombre del producto. -->
            <td>$${valorUnitario.toFixed(2)}</td>      <!-- Muestra el valor unitario del producto con dos decimales. -->
            <td>${producto.cantidad}</td>              <!-- Muestra la cantidad del producto seleccionada. -->
            <td>$${total.toFixed(2)}</td>              <!-- Muestra el total calculado (valor unitario * cantidad) con dos decimales. -->
        `;
        productosSeleccionadosTbody.appendChild(productoRow);
        // Añade la fila del producto al <tbody> correspondiente (productos-seleccionados).
    });
});