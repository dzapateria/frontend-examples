<?php



function get_globals(){


    $globalsel = [];
    $str = '';
    $ar_list = '<br> ---------------  <b> ARRAYS: </b> ------------------------- <br>';
    foreach($GLOBALS as $key=>$val){
        if($key != 'loader' && $key != 'twig' && $key != 'GLOBALS' && $key != 'url_fn' && $key != 'url_array' &&
            $key != 'get_url_debug_info' && $key != '_COOKIE' && $key != '_SERVER' && !empty($GLOBALS[$key] && $key != '__composer_autoload_files'
                && $key != 'opt' && $key != 'pdo' && $key != 'url_returns'
            )){
            $globalsel[$key] = $val;


        }
    }


    foreach($globalsel as $key => $val){
        //Level 1

        if(!is_array($globalsel[$key])) $str .= "<br><b>$key = </b> '$val'";

        if(is_array($globalsel[$key])) {

            $ar_list .= "[$key] =>";

            // $ar_list .=  implode(" | ", $globalsel[$key]) ."<br>";
            foreach($globalsel[$key] as $k => $v){

                if(!is_array($globalsel[$key][$k])){
                    $ar_list .= " $v |";
                }

                if(is_array($globalsel[$key][$k])){
                    foreach($globalsel[$key][$k] as $k => $v){

                        $ar_list .= " $v |";

                    }
                }

            }
            $ar_list .= '<br>';
        }

    }


    return $str . "<br>". $ar_list;


}


function get_url_returns(){

    $array = isset($GLOBALS['url_returns']) ? $GLOBALS['url_returns'] : [];
    $str = '<br><br> ----------- <b> URL RETURNS </b> ------------- <br>';
    //print_r($array);
    foreach($array as $key => $val){

        if (is_array($array[$key])) $str .= "<br> [$key] => ".implode(' | ',$val);
        if (!is_array($array[$key]) && strlen($val) > 0)  $str .= " $key = $val";
    }
    return $str;

}


function get_url_debug_info(){
    $str = '<br><br> ----------- <b>URL DEBUG INFO</b> ------------- <br>';
    global $url_array;
    $str .= "[url_fn] => ";
    foreach($GLOBALS['url_fn'] as $pos => $fn){
        $str .= " | $fn";
    }
    $str .= "<br> [url_array] => ";
    if ( $url_array ){
        foreach ($url_array as $key => $val){
            $str .= " | $val";
        }

    }

    return $str;
}



/* -------------------------------- DEBUG ZONE NO TOCAR ------------------------------ */
$get_globals = get_globals();
$get_url_debug_info = get_url_debug_info();
$get_debug_url_return = get_url_returns();
//$get_global_vars = get_global_vars();


echo $get_globals;
echo $get_url_debug_info;
echo $get_debug_url_return;
//echo $get_global_vars;









