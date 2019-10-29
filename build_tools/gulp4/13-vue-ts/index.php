<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="dist/app.css">

    <title>Gulp4 ejemplo 6</title>
    <?php include_once 'titulo.html'?>
    <!-- GULP OUT-->
    <script src="dist/cdn.js"></script>
</head>
<body>

<main id="app">
<h1>{{message}}</h1>
    <input type="text" v-model="message">

</main>

<div class="caja">
    caja
</div>


<script>

    const app = new Vue({

        el:'#app',
        data:{
            message:''
        }
    })
</script>


<?php echo 10+20 ?>
<h2 id="test">This is a heading</h2>
<button>borrar</button>



<!-- WEBPACK OUT -->
<script src="dist/webpack.js?v=<?=time()?> "></script>
<script src="dist/gulp.js?v=<?=time()?> "></script>



<script>uno('index') //va;</script>

<script>dos('index') //va;</script>

<script>tres('index') //va;</script>

</body>
</html>