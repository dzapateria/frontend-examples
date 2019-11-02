
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



<!-- BUILDERS JS TOOL OUTS -->
<script src="<?=APP_ROOT?>dist/webpack.js?v=<?=time()?> "></script>
<script src="<?=APP_ROOT?>dist/gulp.js?v=<?=time()?> "></script>


<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>
<button type="button" class="btn btn-link">Link</button>

<script>uno('index') //va;</script>

<script>dos('index') //va;</script>

<script>tres('index') //va;</script>

</body>
</html>