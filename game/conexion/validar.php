<?php
// Iniciar la sesión
session_start();

// Obtener datos del formulario
$correo = $_POST['Correo'];
$contraseña = $_POST['password'];

// Corregir el nombre de la variable de sesión
$_SESSION['Correo'] = $correo;

// Incluir el archivo de conexión
include('conexion.php');

// Verificar que la conexión se haya establecido correctamente
if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}

// Corregir la consulta SQL y evitar inyecciones SQL usando parámetros preparados
$query = "SELECT * FROM usuarios WHERE correo = ? AND contraseña = ?";

// Preparar la consulta
$stmt = mysqli_prepare($conexion, $query);

// Verificar que la preparación fue exitosa
if ($stmt) {
    // Asociar los parámetros y ejecutar la consulta
    mysqli_stmt_bind_param($stmt, 'ss', $correo, $contraseña);
    mysqli_stmt_execute($stmt);
    
    // Obtener el resultado
    $resultado = mysqli_stmt_get_result($stmt);
    $filas = mysqli_num_rows($resultado);
    
    if ($filas > 0) {
        // Redirigir a home.php si el usuario existe
        header("Location: ./../home.php");
        exit(); // Importante para detener el script después de redirigir
    } else {
        // Redirigir a index2.php con un error si el usuario no existe
        header("Location: ./../index2.php?error=1");
        exit(); // Importante para detener el script después de redirigir
    }
    
    // Liberar el resultado y cerrar la declaración
    mysqli_stmt_free_result($stmt);
    mysqli_stmt_close($stmt);
} else {
    // Manejo de errores si la consulta no se pudo preparar
    echo "Error en la preparación de la consulta: " . mysqli_error($conexion);
}

// Cerrar la conexión
mysqli_close($conexion);
?>
