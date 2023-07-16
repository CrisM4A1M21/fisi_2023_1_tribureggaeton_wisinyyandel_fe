<?php

$conexionbd = mysqli_connect("localhost","root","12345678","tienda_campesin");
if (!$conexionbd) {
    die("Error de conexión: " . mysqli_connect_error());
}

?>