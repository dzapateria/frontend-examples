<!doctype html>
<html lang="en">
<head>
<!--
   /* NO CACHE */
    <meta http-equiv="Expires" content="0">
    <meta http-equiv="Last-Modified" content="0">
    <meta http-equiv="Cache-Control" content="no-cache, mustrevalidate">
    <meta http-equiv="Pragma" content="no-cache">
  FIN META CACHE
 -->

    <meta charset="UTF-8">
    <meta name="viewport"
    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="dist/main.css">
    <link rel="stylesheet" href="dist/caja.css">
    <script
            src="https://code.jquery.com/jquery-3.4.1.min.js"
            integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
            crossorigin="anonymous"></script>

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



<!-- GULP OUT-->
     <script src="dist/vendor.js?=<?=time()?> "></script>
<!-- WEBPACK OUT -->
<script src="es5/webpack/index.js"></script>
<script src="es5/webpack/componente.js"></script>

</body>
</html>