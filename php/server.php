<?php

header('Content-Type: application/json');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception; // Include library files

//Load Composer's autoloader
require 'vendor/autoload.php';


$conexion = new mysqli('localhost', 'root', '', 'crypto');

if ($conexion->connect_errno) {
    die('Error connecting to database');
} else {
    $permitted_chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if ($_GET['action'] == 'create') {
        $nombre = $_GET['nombre'];
        $apellido = $_GET['apellido'];
        $correo = $_GET['correo'];
        $pass = sha1($_GET['pass']);
        $token = substr(str_shuffle($permitted_chars), 0, 8);

        $query = "INSERT INTO usuarios (nombre, apellido, correo, pass, token) VALUES ('$nombre', '$apellido', '$correo', '$pass', '$token')";
    }

    $conexion->query($query);

    if ($conexion->affected_rows >= 1)
        $mensaje = 'Filas Modificadas: ' . $conexion->affected_rows;
    else
        $mensaje = 'Error: Hubo un error';

    echo json_encode($mensaje);
}
