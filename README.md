# Actividad 3 - Actividad Nro.3 - Manejo de Base de Datos

# Proyecto de Solicitud de Cotización

Este proyecto es una aplicación web sencilla que permite a los usuarios llenar un formulario para solicitar cotizaciones de productos específicos. Los datos ingresados son enviados a una base de datos simulada, y posteriormente se pueden consultar y visualizar en una página dedicada. La interfaz está diseñada para ser clara y fácil de usar.

## Descripción del Proyecto

El sistema de **Solicitud de Cotización** permite a los usuarios proporcionar sus datos personales, seleccionar productos disponibles, ingresar cantidades y ver los costos totales de los productos seleccionados. Una vez enviados los datos, el usuario puede consultar la información ingresada en una página de resumen que presenta los datos personales, los productos seleccionados y los totales de la cotización.

## Estructura del Proyecto

El proyecto está compuesto por los siguientes archivos y carpetas:


### Archivos principales:

- **index.html**: Contiene el formulario que permite a los usuarios ingresar su información personal y seleccionar productos. El formulario incluye validaciones y opciones personalizadas.
  
- **consulta.html**: Página que muestra los datos recopilados del formulario en una tabla bien organizada. Incluye detalles como nombres, ciudad, dirección, teléfono y los productos seleccionados con su precio total.

- **styles.css**: Estilos CSS utilizados para mejorar el diseño de las páginas HTML. Si no existe este archivo, los estilos están en línea dentro de cada página.

- **script.js**: Lógica de JavaScript que gestiona el formulario, valida los datos y envía la información a la base de datos simulada (archivo `data.json`).

- **consulta.js**: Lógica de JavaScript que recupera los datos almacenados y los presenta en la página `consulta.html`.

- **data.json**: Archivo que actúa como base de datos simulada para almacenar temporalmente los datos ingresados por los usuarios. En un entorno real, sería reemplazado por una base de datos externa.

## Tecnologías Utilizadas

- **HTML5**: Para la estructura básica del proyecto, formularios y tablas.
- **CSS3**: Para el diseño y estilo de las páginas, asegurando una interfaz atractiva y amigable.
- **JavaScript**: Para gestionar la lógica del formulario, el envío de datos, la consulta de información y la interacción del usuario con la interfaz.
- **JSON**: Para almacenar temporalmente los datos ingresados, simulando una base de datos en el proyecto.
  
## Funcionalidades

1. **Formulario de Solicitud de Cotización (index.html):**
    - Captura de información personal (Nombres, Ciudad, Dirección y Teléfono).
    - Selección de productos disponibles (checkboxes) con opción para ingresar la cantidad deseada.
    - Cálculo del precio total de los productos seleccionados.
    - Validación de los campos del formulario.

2. **Consulta de Cotización (consulta.html):**
    - Visualización de los datos ingresados en una tabla organizada.
    - Presentación de productos seleccionados con precios y cantidades.
    - Totalización de costos por producto.

3. **Botón Cancelar:**
    - Permite regresar a la página inicial desde la página de consulta.

## Instalación

1. Clonar el repositorio o descargar los archivos.
2. Abrir el archivo `index.html` en cualquier navegador moderno.
3. Llenar el formulario con la información requerida.
4. Al hacer clic en "Enviar Datos", la información se almacena y se redirige a la página `consulta.html` para ver los datos ingresados.

> **Nota**: Este proyecto es una simulación de un flujo de datos sin un servidor backend real, por lo que no guarda datos de manera persistente más allá de la sesión actual del navegador.

## Créditos

Proyecto desarrollado por Maria Alejandra Montoya Correa y Natalia Betancur Rueda, Siéntete libre de modificarlo o expandirlo según tus necesidades.

1. **Clonar el Repositorio**:
   ```bash
   git clone https://github.com/marialemontoya12/basededatos.git
