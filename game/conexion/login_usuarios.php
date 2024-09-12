<?php

session_start();

// Incluir el archivo de conexión
include 'conexion.php';

if(isset($_GET['iniciar'])){
    
    // Obtener datos del formulario
    $correo = $_GET['correo'];
    $contrasena = $_GET['contrasena'];
    // Verificar si la conexión se ha establecido correctamente
    if (!$conexion) {
        die("Error de conexión: " . mysqli_connect_error());
    }
    
    // Corregir la consulta SQL
    $validar_login = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo = '$correo' AND contrasena = '$contrasena'");
    
    // Verificar si la consulta se ejecutó correctamente
    if (!$validar_login) {
        die("Error en la consulta: " . mysqli_error($conexion));
    }
    
    // Verificar el número de filas en el resultado
    if (mysqli_num_rows($validar_login) == 1) {
        $_SESSION['usuario'] = $correo;
        header("Location: ../php/index.php");
        exit();
    } else {
        echo '
        <script>
           alert("Usuario no existe, por favor verifique los datos introducidos.");
           window.location = "../php/index2.php";
        </script>';
        exit();
    }
}


?>
