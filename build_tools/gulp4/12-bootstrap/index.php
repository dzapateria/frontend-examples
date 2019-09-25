<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

<!--    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">-->
<!--    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css.map">-->
    <link rel="stylesheet" href="">

    <link rel="stylesheet" href="dist/main.css">
    <link rel="stylesheet" href="dist/caja.css">
    <title>Gulp4 ejemplo 6</title>
    <?php include_once 'titulo.html'?>
</head>
<body>
<div class="caja">
    caja
</div>
<?php echo 10+20 ?>
<h2 id="test">This is a heading</h2>
<button>borrar</button>
<!-- LIBRERIAS Y DEPENDENCIAS EXTERNAS -->
<!--<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>-->
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js"> </script>-->
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>-->
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js.map"> </script>-->

<!-- GULP OUT-->
     <script src="dist/vendor.js?=<?=time()?> "></script>

<!-- WEBPACK OUT -->
<script src="es5/webpack/webpack-bundle.js"></script>
<!--<script src="es5/webpack/index.js"></script>-->
<!--<script src="es5/webpack/componente.js"></script>-->
<!--<script src="es5/webpack/need_lodash.js"></script>-->

</body>
</html>