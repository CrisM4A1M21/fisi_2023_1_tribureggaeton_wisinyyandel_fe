<!DOCTYPE html>
<html>
<head>
        <link href="https://fonts.googleapis.com/css?family=Kyiv*Type+Serif&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Inter&display=swap" rel="stylesheet" />
        <link href="main.css" rel="stylesheet" />
        <title>Campesin Tienda Online</title>
        <meta charset="utf-8">
</head>
<body>
        <div class="v38_1965">
            <div class="linea_amarilla"></div>
            <div class="background_azul">
                <button id="circulo_blanco" class="circulo-blanco">
                    <div class="imagen_carrito"></div>
                </button>
                <button id="circulo_blanco2" class="circulo-blanco2">
                    <div class="imagen_carrito"></div>
                </button>
                <span class="label_Titulo">Campesin</span>
                <span class="label_Subitulo">Minimarket</span>
            </div>
            
        </div>
        <div class="fondo_gris">
                <?php
                include("mostrar.php")
                ?>            
        </div>
        <div class="fondogris" id="fondogris"></div>
        <div class="popup" id="popup">
            <div class="contenedor_popup" id="contenedor_popup">
                <?php
                include("mostrar2.php")
                ?>    
            </div>
            <span class ="subtotal">Subtotal</span>
            <span class ="preciototal">S/Precio total</span>
            <button class="boton_comprar" type="button" onclick="redireccion()">
                <span class="comprar">Comprar</span>
            </button>
        </div>
       
        <div class="pico_popup" id="pico_popup"></div>
        <script src="JsPrincipal.js"></script>
        
</body>
</html>

        
        