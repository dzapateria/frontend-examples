
<?php
include 'config.php';
include 'head.php' ;
include 'menu.php';

?>


<main id="app">
<h1>{{message}}</h1>
    <input type="text" v-model="message">

</main>

<div class="caja">
    caja 2
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



<!-- BUILDERS JS TOOL OUTS -->
<script src="<?=APP_ROOT?>dist/webpack.js?v=<?=time()?> "></script>
<script src="<?=APP_ROOT?>dist/gulp.js?v=<?=time()?> "></script>

<script>uno('index') //va;</script>

<script>dos('index') //va;</script>

<script>tres('index') //va;</script>

</body>
</html>