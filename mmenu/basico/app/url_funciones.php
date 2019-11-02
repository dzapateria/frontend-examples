<?php

function por2(array $args)
{
    $ar = [];
    foreach ($args as $arg) {
       $ar[] = $arg * 2;
    }
    return $ar;
}

function deciralgo(...$msg)
{
    $final = '';
    foreach ($msg as $text) {
        $final .= " $text | ";
    }
    return urldecode($final);
}

function capitalize($args){

    $list = [];
    foreach ($args as $arg){
        $list[] = strtoupper($arg);
    }
    return $list;
}

function redirect(){
    echo "se ejecuto redirect";
    echo "
    <script type='text/javascript'>
    window.location.href = '/mmenu/basico/';
            </script>
        ";
}
