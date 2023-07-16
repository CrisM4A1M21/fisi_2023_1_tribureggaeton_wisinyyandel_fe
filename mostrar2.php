<?php

include("conexion.php");

if($conexionbd){
    $consulta = "SELECT t1.id_producto, t1.cantidad, t2.precio_venta, t2.imagen
    FROM auxiliar AS t1
    JOIN producto AS t2 ON t1.id_producto = t2.id_producto;";
    $resultado = mysqli_query($conexionbd,$consulta);
    
    if ($resultado){
        
        $contador = 0; 
        while($row = $resultado->fetch_array()){
            $id_producto = $row['id_producto'];
            $cantidad = $row['cantidad'];
            $precio_venta = $row['precio_venta'];
            $imagen = $row['imagen'];
            $top = $contador * 22 + 5;
            echo '<div class="contenedor_items" style="top: '.$top.'%;">';
            echo '<div class="contenedor_img" style="background-image: url('.$imagen.'.jpg); background-position: center; background-size: cover;"></div>';            
            ?>
                <div class="contenedor_cantidad">Cantidad: <?php echo $id_producto; ?></div>              
            <?php
            echo '</div>';
            $contador++; // Incrementa el contador en cada iteración
        }
    }
    
}
mysqli_close($conexionbd);
?>