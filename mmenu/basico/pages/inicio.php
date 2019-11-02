
<p>Contenido pagina de inicio</p>
<?php

array_push($url_fn, 'por2', 'portesgratis', 'paises', 'precio', 'capitalize', 'redirect');



// Recorre todas las funciones y devuelve un array con el nombre de la funcion como llave y
// los valores con los parametros enviados
$fn_assoc_args = fn_assoc_args($url_fn);

var_dump($fn_assoc_args);

// Ejecutar la funcion
// coje el array de las funciones valores enviados y devuelve post ejecución





function ex($assoc_array){
    $returns = [];
   global $url_fn, $url_array, $fn_assoc_args; //lista de funciones

    foreach($url_fn as $value){
        #si no esta la funcion en la URL salta con la siguiente
        if (!in_array($value, $url_array)) continue;

        echo "Se ejecutaran la funcion:  $value con los parametros: " . implode($fn_assoc_args[$value], ', ') ."<br>";
        $args = $fn_assoc_args[$value];
        var_dump($args);
        $returns[$value] = $value( $args );
    }

    return $returns;

}

$url_returns = ex($fn_assoc_args);




?>