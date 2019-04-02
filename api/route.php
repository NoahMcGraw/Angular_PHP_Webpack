<?php

$endpoint = $_POST['endpoint'];
$method = $_POST['method'];

if ($endpoint === 'nav') {
    require_once "./nav/nav.php";
}
