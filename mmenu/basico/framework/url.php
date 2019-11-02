<?php


/* -----------------------------------------------------------------
 *  Retorna una variable con una url completa solicitada
 *  - Siempre devuelve un retorno terminado en /
 *  - Elimina slash duplicados //
 *  - Si APP_ROOT es una subcarpeta elimina del requets uri para recuperar Request real.
 * --------------------------------------------------------------
 *
 * */


# IF CARPETA EN SUBDIRECTORIO DEFINIR
define('APP_ROOT', '/mmenu/basico/');
# IF CARPETA EN DIRECTORIO ROOT DEFINIR
# define('APP_ROOT', '/');


/**
 * Capturamos la URL en string REQUEST_URI
 * Capturamos la URL en array explode /
 * Preparamos array vacio para listar rutas que ejecutarán funciones con parametros
 */


$url = get_url(); # productos/id/322/
$url_clean = get_url_clean($url);
$url_array = get_url_array(); # 'productos', 'id', '322'
$url_fn = []; # args lista de escuha



function get_url()
{
    $url = $_SERVER['REQUEST_URI'];
    # $url = url_clean_get($url); # /products/list/

    $width = strlen($url);




    if ($url[--$width] == '/') {
        $url = $url; # Si ya tiene '/' al final no hacemos nada
    } else {
        $url = $url . '/'; # Añadimos al final '/'
    }



    $url = preg_replace( "/\/{2,}/", "/", $url );
    # Si la URL tiene parametros $_GET
    if (strpos($url, '?')) {
        $pos_init_get = strpos($url, '?');
        $width = strlen($url);
        $width_without_get = $width - $pos_init_get;

        $url_without_get = substr($url, 0, -$width_without_get);

    }

    if (APP_ROOT != '/') {
        $url = str_replace(APP_ROOT, '/' ,  $url);
    }


    return $url;
}

function get_url_clean($url){
   if (strpos($url, '?')) {
       $pos_init_get = strpos($url, '?');
       $width = strlen($url);
       $width_without_get = $width - $pos_init_get;
       $url = substr($url, 0, -$width_without_get);

   }
    return $url;
}


/*
 *  ------------------------------------------------------------------------------------
 *              ARRAY LIMPIA VACIOS
 *  ------------------------------------------------------------------------------------
 */

function del_emptys($array)
{
    $clean = [];
    foreach ($array as $item) {
        if (strlen($item) > 0 AND $item != '') {
            $clean[] = $item;
        }
    }
    return $clean;
}




/*
 *  ---------------------------------------------------------------------------------
 *                   GET URL ARRAY = $URL_ARRAY
 *  ---------------------------------------------------------------------------------
 */

function get_url_array()
{

    if ($_SERVER['REQUEST_URI'] == '/') return false; # Si la ruta es '/' retornar falso

    $url = get_url_clean(get_url($_SERVER['REQUEST_URI']));

    # Si la URL tiene parametros $_GET
    if (strpos($url, '?')) {
        $pos_init_get = strpos($url, '?');
        $width = strlen($url);
        $width_without_get = $width - $pos_init_get;
       $url = substr($url, 0, -$width_without_get);

    }



    # $url = generate_clean_url($url); # -> Elimina espacios en blanco y reconstruye URL

    $url = preg_replace( "/\/{2,}/", "/", $url );

    $url_array = explode('/', $url); # -> Separa en arrays cada separación '/', ['products', 'list', '']

    $url_array = del_emptys($url_array); # -> Elimina posiciones vacias ['productos', 'listar']

    return $url_array;
}



/*
 *  ---------------------------------------------------------------------------------
 *
 *  ---------------------------------------------------------------------------------
 */



function in_url($str)
{
    global $url, $url_array, $in_url;



    # Si la ruta es exactamente a la URL ( ejemplo '/' )
    if ($url === $str) {
        echo "<script>console.log('es exacto')</script>";
        return true;
    }

    # si la ruta buscada contiene / ( ejemplo: 'zapatillas/futbol' )
    if (strpos($str, '/')) {
        if (strpos($url, $str) !== false) {
            echo "<script>console.log('no es exacto')</script>";
            return true;
        }

        # Si no tiene '/' es una palabra, buscar si aparece en la lista de url_array ( ejemplo 'productos' )
    } else {
        if ($url_array && in_array($str, $url_array)) {
            return true;
        }

    }


}




/*
 *  ------------------------------------------------------------------------------------
 *      Retorna un array de los argumentos de la función
 *      NO SE EJECUTA MANUALMENTE, ESTA ES EJECUTADA POR CADA UNA DE LAS FUNCIONES
 *      REGISTRADAS EN LA ARRAY $url_fn o con fn_assoc_args
 *  ------------------------------------------------------------------------------------
 */
function fn_args_values($fn, $url_fn)
{
# Cuando la url al final tenga / no se rompan las funciones numericas
    global $url_fn, $url_array;
    $fn_args_values = [];
    $fn_n_args = 0;
    if (!$url_array) return;
    if (!in_array($fn, $url_array)) return;
    $pos_fn = array_search($fn, $url_array); // posición de la función en la url

    foreach ($url_array as $pos => $val) {
        if ($pos > $pos_fn) { # Si existen parametros en la funcion
# Si esta el valor actual del loop en funciones url_fn
            if (in_array($val, $url_fn)) {
                if ($fn_n_args == 0) return true; # si el valor es 0
                break;
            }
            $fn_n_args++; # número de argumentos + 1
            $fn_args_values[] = $val; #fn_return["paises"] = "pais"
        }

    }
// if ($fn_n_args < 1) return true;
    return $fn_args_values; # [paises = venezuela, spain, italia ]
}

/*
 *  ---------------------------------------------------------------------------------
 *       Recorre todas las funciones y devuelve un array con el nombre de la funcion como llave y
 *        los valores con los parametros enviados
 *  ---------------------------------------------------------------------------------
 */

function fn_assoc_args(array $url_fn){
    $url_returns = [];
    foreach ($url_fn as $value) {
        $url_returns[$value] = fn_args_values($value, $url_fn);
    }
    //print_r($url_returns);
    return $url_returns;

}


