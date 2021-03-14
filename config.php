<?php

function url(){
  $directory = str_replace(basename($_SERVER['SCRIPT_NAME']), '', $_SERVER['SCRIPT_NAME']);
  return sprintf(
    "%s://%s%s",
    isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https' : 'http',
    $_SERVER['SERVER_NAME'],
    $directory
  );
}

  define('ROOT_PATH', realpath(dirname(__FILE__)));
  define('BASE_URL', url());
?>