<?php
error_reporting(E_ALL);
ini_set('display_errors',-1);
header ("Access-Control-Allow-Origin: *");
header ("Access-Control-Allow-Headers: *");

$conn = pg_connect("host=localhost dbname=farmacia_saas user=postgres password=leojose");
if($conn){
    $result = pg_query($conn, "SELECT *, extract(day from age(fechav, current_date)) as diasv, extract(month from age(fechav, current_date)) as mesv, extract(year from age(fechav, current_date)) as añov FROM productos");

    $datos = pg_fetch_all($result);
    foreach ($datos as &$dato) {
        $dato["imagen"] = base64_encode($dato["imagen"]);
    }

    header("Content-Type: application/json");
    echo json_encode($datos);
}else {
    echo "Error al conectar a la base de datos: " . pg_last_error();
}
?>