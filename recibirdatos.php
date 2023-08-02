<?php
error_reporting(E_ALL);
ini_set('display_errors',-1);
header ("Access-Control-Allow-Origin: *");
header ("Access-Control-Allow-Headers: *");

$servername = "localhost";
$username = "id20432265_prueba";
$password = "Prueba1.";
$dbname = "id20432265_farmacia_saas";

$con = mysqli_connect($servername, $username, $password, $dbname);
$dato = $_POST;

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

$respuesta = file_get_contents("guardarimagen.php");
$datos = json_decode($respuesta, true);

if ($con) {
    $query = "INSERT INTO productos (nombre, cantidad, clasificacion, principio, farma, fechav, ingresa, proveedor, lote, factura, codigo, imagen, fechaingreso) 
  VALUES ('{$dato['nombre']}', '{$dato['cantidad']}', '{$dato['clasificacion']}', '{$dato['principio']}', '{$dato['farma']}', '{$dato['fechav']}', '{$dato['ingresa']}', '{$dato['proveedor']}', '{$dato['lote']}', '{$dato['factura']}', '{$dato['codigo']}', '{$ruta}', CURDATE())";
  $result = mysqli_query($con, $query);

  if ($result) {
    echo "Producto insertado correctamente";
    mysqli_close($con);
  } else {
    echo "Error al insertar el producto: " . mysqli_error($con);
  }

} else {
  echo "Error al conectar a la base de datos: " . mysqli_connect_error();
}
?>
