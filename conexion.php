<?php
$servername = "127.0.0.1"; // Nombre del servidor
$username = "root"; // Nombre de usuario de MySQL
$password = ""; // Contraseña de MySQL (por defecto está vacía)
$dbname = "cleanpro"; // Nombre de la base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
echo "Conexión exitosa";