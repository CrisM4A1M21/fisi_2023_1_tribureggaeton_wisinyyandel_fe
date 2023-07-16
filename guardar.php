<?php
// Conectarse a la base de datos
include("conexion.php");

// Verificar si se recibieron los datos del producto
if (isset($_POST['id_producto']) && isset($_POST['cantidad'])) {
    $id_producto = $_POST['id_producto'];
    $cantidad = $_POST['cantidad'];

    // Guardar los datos en la tabla de la base de datos
    
    $consulta = "INSERT INTO auxiliar(id_producto, cantidad) VALUES ('$id_producto', '$cantidad')";
    $resultado = mysqli_query($conexionbd, $consulta);

    // Comprobar si la consulta se ejecutó correctamente
    if ($resultado) {
        // Enviar una respuesta al cliente
        echo "Datos guardados exitosamente";
    } else {
        // Enviar una respuesta al cliente en caso de error
        echo "Error al guardar los datos";
    }
}

// Cerrar la conexión a la base de datos
mysqli_close($conexionbd);
?>