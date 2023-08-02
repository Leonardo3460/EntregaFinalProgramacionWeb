<?php
error_reporting(E_ALL);
ini_set('display_errors',-1);
header ("Access-Control-Allow-Origin: *");
header ("Access-Control-Allow-Headers: *");

$imagen = $_FILES["imagen"];
$nombrei = $imagen["name"];
$extension = pathinfo($nombrei, PATHINFO_EXTENSION);
$nombre_unico = uniqid() . "." . $extension;
$ruta = "img/" . $nombre_unico;
if (move_uploaded_file($imagen["tmp_name"], $ruta)) {
    echo json_encode(["success" => true, "nombre" => $nombre_unico, "ruta" => $ruta]); }
else {
    echo json_encode(["success" => false, "error" => "No se pudo subir la imagen"]);
}
?>