document.addEventListener("DOMContentLoaded", function () {
    // Se asegura de que el código se ejecute una vez que todo el contenido del DOM esté completamente cargado.

    const form = document.getElementById("cotizacion-form");
    // Selecciona el formulario con el id "cotizacion-form" para añadirle un evento de envío.

    const cancelarBtn = document.getElementById("cancelar-btn");
    // Selecciona el botón con el id "cancelar-btn" para añadirle un evento de cancelación.

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // Previene que el formulario se envíe de forma predeterminada, lo que evita el refresco de la página.

        const nombres = document.getElementById("nombres").value; // Cambiado a "nombres"
        // Obtiene el valor del campo de entrada con id "nombres".

        const ciudad = document.getElementById("ciudad").value;
        // Obtiene el valor del campo de entrada con id "ciudad".

        const direccion = document.getElementById("direccion").value;
        // Obtiene el valor del campo de entrada con id "direccion".

        const telefono = document.getElementById("telefono").value;
        // Obtiene el valor del campo de entrada con id "telefono".

        const productos = [];
        // Inicializa un array vacío para almacenar los productos seleccionados.

        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        // Selecciona todos los checkboxes que están marcados (checked) en el formulario.

        checkboxes.forEach((checkbox) => {
            // Itera sobre los checkboxes seleccionados.

            const producto = checkbox.nextSibling.textContent.trim();
            // Obtiene el texto del producto que está justo después del checkbox (su etiqueta) y elimina espacios en blanco con trim().

            const cantidad = document.querySelector(`input[name="cantidad${checkbox.name.slice(-1)}"]`).value;
            // Selecciona el campo de entrada correspondiente a la cantidad del producto basado en el nombre del checkbox, que tiene un sufijo numérico.
            
            productos.push({ producto, cantidad });
            // Añade un objeto con el producto y la cantidad al array "productos".
        });

        const datosFormulario = {
            nombres,   // Añade el valor de "nombres" al objeto datosFormulario.
            ciudad,    // Añade el valor de "ciudad" al objeto datosFormulario.
            direccion, // Añade el valor de "direccion" al objeto datosFormulario.
            telefono,  // Añade el valor de "telefono" al objeto datosFormulario.
            productos, // Añade el array de productos al objeto datosFormulario.
        };

        // Guardar datos en localStorage
        localStorage.setItem("cotizacionDatos", JSON.stringify(datosFormulario));
        // Convierte el objeto datosFormulario a una cadena JSON y lo guarda en localStorage bajo la clave "cotizacionDatos".

        // Redirigir a la página de consulta
        window.location.href = "consulta.html";
        // Redirige al usuario a la página "consulta.html" después de guardar los datos.
    });

    cancelarBtn.addEventListener("click", function () {
        // Añade un evento click al botón de cancelar.

        window.location.href = "index.html";
        // Redirige al usuario a la página "index.html" al hacer clic en el botón de cancelar.
    });
});
