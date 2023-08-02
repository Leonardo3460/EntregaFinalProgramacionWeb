<?php
error_reporting(E_ALL);
ini_set('display_errors',-1);
header ("Access-Control-Allow-Origin: *");
header ("Access-Control-Allow-Headers: *");

$servername = "localhost";
$username = "id20432265_prueba";
$password = "Prueba1.";
$dbname = "id20432265_farmacia_saas";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if($conn){
    $result = mysqli_query($conn, "SELECT *,
    period_diff(date_format(fechav,'%Y%m'), date_format(current_date,'%Y%m')) DIV 12 AS añov,
    period_diff(date_format(fechav,'%Y%m'), date_format(current_date,'%Y%m')) MOD 12 AS mesv,
    CASE WHEN fechav < current_date THEN
      day(last_day(current_date - interval 1 month)) - day(current_date) -31 + day(fechav)
    ELSE
      day(last_day(current_date)) - day(current_date) -31 + day(fechav)
    END AS diasv
  FROM productos");
    if ($result) {
      $datos = array();
      while ($dato = mysqli_fetch_assoc($result)) {
        $dato["imagen"] = base64_encode($dato["imagen"]);
        $datos[] = $dato;
      }
      header("Content-Type: application/json");
      echo json_encode($datos);
    } else {
      echo "Error al ejecutar la consulta: " . mysqli_error($conn);
    }
}else {
    echo "Error al conectar a la base de datos: " . mysqli_connect_error();
}
?>