<?php
/*
header('Cache-Control: no-cache, no-store, must-revalidate'); // HTTP 1.1.
header('Pragma: no-cache'); // HTTP 1.0.
header('Expires: 0'); // Proxies. */
?>
<!doctype html>
<html lang="es">

<head>

    <?php include '_partials/head.php'; ?>

</head>

<body>
    <?php 
    include '_partials/header.php';
    include 'rutas.php'; //carga la página que corresponda
    include '_partials/footer.php';

    ?>

</body>

</html>