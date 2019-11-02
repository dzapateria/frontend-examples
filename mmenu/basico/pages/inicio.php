
<p>Contenido pagina de inicio</p>
<?php

array_push($url_fn, 'por2', 'portesgratis', 'paises', 'precio', 'capitalize', 'redirect');



// Recorre todas las funciones y devuelve un array con el nombre de la funcion como llave y
// los valores con los parametros enviados

$fn_assoc_args = fn_assoc_args($url_fn);

// var_dump($fn_assoc_args);

// Ejecutar la funcion
// coje el array de las funciones valores enviados y devuelve post ejecución






// $url_returns = ex($fn_assoc_args);

$url_returns = fn_init();


?>