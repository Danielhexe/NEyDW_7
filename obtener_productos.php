<?php
// Habilitar la visualización de errores (para depuración)
ini_set('display_errors', 1);  // Habilitar la visualización de errores
error_reporting(E_ALL);        // Mostrar todos los errores

// Parámetros de la base de datos
$host = "localhost";   // Dirección del servidor MySQL
$usuario = "root";     // Usuario de la base de datos
$clave = "eq7fiunam";           // Contraseña de la base de datos 
$base_de_datos = "Eq7ComidaOrganica";  // Nombre de la base de datos

// Crear la conexión
$conn = new mysqli($host, $usuario, $clave, $base_de_datos);

// Verificar si la conexión fue exitosa
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);  // Muestra el error si no se conecta
}

// Consultar los productos de la tabla 'alimentos' con id = 7
$sql_alimentos = "SELECT nomprod, cantidad, precio, id
                  FROM alimentos
                  WHERE id = 7";

// Consultar productos específicos de la tabla 'proteinas' con ids 100, 101, y 102
$sql_proteinas = "SELECT nomprod, gramaje, precio, id
                  FROM proteinas
                  WHERE id IN (100, 101, 102)";

// Ejecutar las consultas
$result_alimentos = $conn->query($sql_alimentos);
$result_proteinas = $conn->query($sql_proteinas);

// Devolver query como JSON
$prodcuts = array();
while($row = $result_alimentos->fetch_assoc()) {
    $prodcut = array(
        'id' => $row['id'],
        'section' => 'Alimentos',
        'name' => $row['nomprod'],
        'quantity' => $row['cantidad'],
        'price' => $row['precio'],
        'img' => $row['id'] . '.jpg',
    );
    $prodcuts[] = $prodcut;
} 

while($row = $result_proteinas->fetch_assoc()) {
    $prodcut = array(
        'id' => $row['id'],
        'section' => 'Proteinas',
        'name' => $row['nomprod'],
        'quantity' => $row['gramaje'],
        'price' => $row['precio'],
        'img' => $row['id'] . '.jpg',
    );
    $prodcuts[] = $prodcut;
} 

// Cerrar la conexión
$conn->close();

// Mostrar el contenido HTML
header('Content-type: application/json');
echo json_encode($prodcuts);
?>

