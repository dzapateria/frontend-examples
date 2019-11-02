<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<h2>Home</h2>

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


</body>
</html>