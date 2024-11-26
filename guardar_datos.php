<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Conexión a la base de datos
$host = "localhost"; // O la dirección de tu servidor MySQL
$usuario = "root"; // Tu usuario de la base de datos
$clave = "eq7fiunam"; // Tu contraseña de la base de datos
$base_de_datos = "Eq7ComidaOrganica"; // Nombre de la base de datos

// Crear la conexión
$conn = new mysqli($host, $usuario, $clave, $base_de_datos);

// Verificar si la conexión fue exitosa
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener los valores del formulario
$nombre = $_POST['nombre'];
$telef = $_POST['telef'];
$direccion = $_POST['direccion'];
$numtarj = $_POST['numtarj'];
$ccv = $_POST['ccv'];
$fechavenc = $_POST['fechavenc'];

// Depuración: mostrar los datos recibidos
echo "Nombre: $nombre<br>";
echo "Teléfono: $telef<br>";
echo "Dirección: $direccion<br>";
echo "Número de Tarjeta: $numtarj<br>";
echo "CCV: $ccv<br>";
echo "Fecha de Vencimiento: $fechavenc<br>";

// Preparar la consulta para insertar los datos
$sql = "INSERT INTO infocliente (nombre, telef, direccion, numtarj, ccv, fechavenc)
        VALUES (?, ?, ?, ?, ?, ?)";

// Usar una sentencia preparada para evitar inyecciones SQL
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssss", $nombre, $telef, $direccion, $numtarj, $ccv, $fechavenc);

// Ejecutar la consulta
if ($stmt->execute()) {
    echo "\nLos datos se han guardado correctamente, recibirás tu pedido pronto.";
} else {
    echo "Error al guardar los datos: " . $stmt->error;
}

// Cerrar la conexión
$stmt->close();
$conn->close();
?>
