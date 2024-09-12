<?php
    
session_start();

if(!isset($_SESSION['usuario'])){
    echo '
    <script>
       alert ("primero inicia sesion"); 
       window.location ="index2.php";
    </script>
    ';
    session_destroy();
    die();
}
session_destroy();

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/style.css">
    <title>Game Quiz</title>
</head>
<body>
    <div class="container">
        <img src="img/auris.png" alt="" class="img">
        <header>
            <div class="puntaje">
                <img src="img/puntos.png" alt="">
                <span class="puntos">0</span>
            </div>
            <h1>QUIZ</h1>
            <div class="jugador">
                <span class="nombre">-</span>
                <img src="img/user.png" alt="">
            </div>
        </header>

        <!-- PANTALLA DE BIENVENIDA -->
        <main class="inicio">
            <h2>Bienvenido!!</h2>
            <p>Ingresa tu nombre para jugar</p>
            <input type="text" id="nombre">
            <button class="btn" id="comenzar">Comenzar</button>
        </main>
    </div>

    <script src="../js/index.js"></script>
</body>
</html>