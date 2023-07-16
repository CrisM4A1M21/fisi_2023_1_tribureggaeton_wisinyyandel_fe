<?php

include("conexion.php");

if($conexionbd){
    $consulta = "SELECT * FROM producto";
    $resultado = mysqli_query($conexionbd,$consulta);
    
    if ($resultado){
        $contador = 0; 
        while($row = $resultado->fetch_array()){
            $id_producto = $row['id_producto'];
            $nombre = $row['nombre'];
            $precio_venta = $row['precio_venta'];
            $stock = $row['stock'];
            $imagen = $row['imagen'];
            $id_categoria = $row['id_categoria'];
            $fecha_venc = $row['fecha_venc'];
            $top = $contador * 22 + 5;
            echo '<div class="fondo_blanco" style="top: '.$top.'%;">';
            echo '   <div class="receptor_img_producto" style="background-image: url('.$imagen.'.jpg); background-position: center; background-size: cover;"></div>';            
            ?>
                <form method="post">
                <span class="nombre_producto"><?php echo $nombre; ?></span>
                <div class="frame_aumento_producto">
                    <button class="mas" id="button_mas_<?php echo $id_producto; ?>" onclick="aumentarContador(<?php echo $id_producto; ?>)">+   
                    </button>
                    <span class="cantidad" id="contador_<?php echo $id_producto; ?>">0</span>
                    <button class="menos" id="button_menos_<?php echo $id_producto; ?>" onclick="disminuirContador(<?php echo $id_producto; ?>)">-     
                    </button>
                </div>
                <span class="monto">S/ <?php echo $precio_venta; ?></span>
                <button class="button_anadir" data-id="<?php echo $id_producto; ?>">
                    <span class="texto_button_adir">Añadir</span>
                </button>
                </form>
            <?php
            echo '</div>';
            $contador++; // Incrementa el contador en cada iteración
        }
    }
    
}
mysqli_close($conexionbd);

?>