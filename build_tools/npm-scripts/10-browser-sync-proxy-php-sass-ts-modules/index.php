<?php
header('Cache-Control: no-cache, no-store, must-revalidate'); // HTTP 1.1.
header('Pragma: no-cache'); // HTTP 1.0.
header('Expires: 0'); // Proxies.
?>
<!doctype html>
<html lang="es">

<head>

    <script src="dist/js/app.js"></script>


    <script>
    </script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="dist/css/main.css?r=<?php echo uniqid(); ?>">


    <title>typescript</title>
</head>

<body>
    <h1> Typescript</h1>

    <?php
    echo 10 * 12;
    ?>

    <h1>David Zapateria 2</h1>


    <h2> Puntos aqui no recarga
        <span id="points">0</span>
    </h2>


    <script id="__bs_script__ ">
        //<![CDATA[ document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.24.4'> <\ / script > ".replace("HOST", location.hostname)); //]]>
    </script>

</body>

</html>