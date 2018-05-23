<?php

echo '<!-- Comienza ARCHIVO rutas.php 34 -->';

//Variables globales

$host = $_SERVER['HTTP_HOST'];
$uri = $_SERVER['REQUEST_URI']; //  localhost/subfolders/?pag=galeria.php
$file = str_replace('?pag=', '', $uri); //  galeria.php

//echo $file;
?>



<?php
if (isset($_GET['pag']) and file_exists($_GET['pag'])) {
    include $_GET['pag'];
} else {
    include 'home.php';
}
