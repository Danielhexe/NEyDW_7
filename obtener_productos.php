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
$sql_alimentos = "SELECT 'Alimentos' AS section, nomprod AS name, cantidad, precio, id
                  FROM alimentos
                  WHERE id = 7";

// Consultar productos específicos de la tabla 'proteinas' con ids 100, 101, y 102
$sql_proteinas = "SELECT 'Proteínas' AS section, nomprod AS name, gramaje AS cantidad, precio, id
                  FROM proteinas
                  WHERE id IN (100, 101, 102)";

// Ejecutar las consultas
$result_alimentos = $conn->query($sql_alimentos);
$result_proteinas = $conn->query($sql_proteinas);

// Comenzamos a generar el HTML
$html_output = "";

// Obtener los productos de 'alimentos'
if ($result_alimentos->num_rows > 0) {
    $html_output .= '<h3 class="section-title">Alimentos</h3><div class="row g-4 mb-4">';
    while ($row = $result_alimentos->fetch_assoc()) {
        // Asignar la imagen correspondiente en función del id
        $image = 'Imagenes/mermelada.jpg';  // Imagen para el producto con id = 7

        $html_output .= '<div class="col-md-3 product-card">
                            <div class="card">
                                <img src="' . $image . '" class="card-img-top" alt="' . $row['name'] . '">
                                <div class="card-body">
                                    <p class="card-title">Producto: ' . $row['name'] . '</p>
                                    <p>Cantidad: ' . $row['cantidad'] . '</p>
                                    <p class="fw-bold">Precio: $' . number_format($row['precio'], 2) . '</p>
                                    <button class="btn btn-success add-to-cart-btn">Añadir al carrito</button>
                                </div>
                            </div>
                        </div>';
    }
    $html_output .= '</div>';
} else {
    // Si no hay productos en 'alimentos', muestra el error
    echo "No hay productos en la tabla alimentos.";
}

// Obtener los productos de 'proteinas'
if ($result_proteinas->num_rows > 0) {
    $html_output .= '<h3 class="section-title">Proteínas</h3><div class="row g-4 mb-4">';
    while ($row = $result_proteinas->fetch_assoc()) {
        // Asignamos las imágenes según el id
        $image = '';
        switch ($row['id']) {
            case 100:
                $image = 'Imagenes/vitalproteins.jpg';
                break;
            case 101:
                $image = 'Imagenes/gardenoflife.jpg';
                break;
            case 102:
                $image = 'Imagenes/orgain.jpg';
                break;
        }
        $html_output .= '<div class="col-md-3 product-card">
                            <div class="card">
                                <img src="' . $image . '" class="card-img-top" alt="' . $row['name'] . '">
                                <div class="card-body">
                                    <p class="card-title">Producto: ' . $row['name'] . '</p>
                                    <p>Cantidad: ' . $row['cantidad'] . '</p>
                                    <p class="fw-bold">Precio: $' . number_format($row['precio'], 2) . '</p>
                                    <button class="btn btn-success add-to-cart-btn">Añadir al carrito</button>
                                </div>
                            </div>
                        </div>';
    }
    $html_output .= '</div>';
}

// Cerrar la conexión
$conn->close();

// Mostrar el contenido HTML
echo $html_output;
?>

