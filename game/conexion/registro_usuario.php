<?php

    include 'conexion.php';

$nombre_completo = $_POST ['nombre_completo'];
$correo = $_POST ['correo'];
$usuario = $_POST ['usuario'];
$contrasena = $_POST ['contrasena']; 
/*/ encriptar */


$query = "INSERT INTO usuarios(nombre_completo, correo, usuario, contrasena) 
          VALUES ('$nombre_completo', '$correo', '$usuario' , '$contrasena')";

//verificar que el correo no se repita en la base de datos
$verificar_correo = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo='$correo' ");

if(mysqli_num_rows($verificar_correo) > 0){
    echo '
    <script>
         alert("este correo ya esta registrado, intentalo nuevamente");
         window.location = "../php/index2.php";
     </script>
     ';
     exit();
}

//verificar que el usuario no se repita en la base de datos
$verificar_usuario= mysqli_query($conexion, "SELECT * FROM usuarios WHERE usuario='$usuario' ");

if(mysqli_num_rows($verificar_usuario) > 0){
    echo '
    <script>
         alert("este usuario ya esta registrado, intentalo nuevamente");
         window.location = "../php/index2.php";
     </script>
     ';
     exit();
}

    $ejecutar = mysqli_query ($conexion, $query);

    if($ejecutar){
        echo '
        <script>
        alert("usuario almacenado exitosamente");
        window. location = "../php/index2.php";
        </script>
        ';
    }else{
        echo '
        <script>
        alert("usuario no registrado intentalo nuevamente");
        window. location = "../php/index2.php";
        </script>
        ';
    }
    mysqli_close($conexion);
?>