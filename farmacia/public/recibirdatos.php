<?php

error_reporting(E_ALL);
ini_set('display_errors',-1);
header ("Access-Control-Allow-Origin: *");
header ("Access-Control-Allow-Headers: *");
$con = pg_connect("host=localhost dbname=farmacia_saas user=postgres password=leojose");

$nombre = $_POST['nombre'];
$cantidad = $_POST['cantidad'];
$clasificacion = $_POST['clasificacion'];
$principio = $_POST['principio'];
$farma = $_POST['farma'];
$fechav = date('Y-m-d', strtotime($_POST['fechav']));
$ingresa = $_POST['ingresa'];
$proveedor = $_POST['proveedor'];
$lote = $_POST['lote'];
$factura = $_POST['factura'];
$codigo = $_POST['codigo'];

$imagen = $_FILES["imagen"];
$nombrei = $imagen["name"];
$extension = pathinfo($nombrei, PATHINFO_EXTENSION);
$nombre_unico = uniqid() . "." . $extension;
$ruta = "img/" . $nombre_unico;
$rutatemp = "../img/" . $nombre_unico;
if (move_uploaded_file($imagen["tmp_name"], $ruta)) {
    echo json_encode(["success" => true, "nombre" => $nombre_unico, "ruta" => $ruta]); }
else {
    echo json_encode(["success" => false, "error" => "No se pudo subir la imagen"]);
}

$respuesta = file_get_contents("guardarimagen.php");
$datos = json_decode($respuesta, true);
if ($datos["success"]) { $rutaImagen = $datos["ruta"];};

if ($con) {
    $query = "INSERT INTO productos (nombre, cantidad, clasificacion, principio, farma, fechav, ingresa, proveedor, lote, factura, codigo, imagen) 
  VALUES ('$nombre', '$cantidad', '$clasificacion', '$principio', '$farma', '$fechav', '$ingresa', '$proveedor', '$lote', '$factura', '$codigo', '$ruta') 
  RETURNING id";
  $result = pg_query($con, $query);

  if ($result) {
    echo "Producto insertado correctamente";
    pg_close($con);
  } else {
    echo "Error al insertar el producto: " . pg_last_error($con);
  }

} else {
  echo "Error al conectar a la base de datos: " . pg_last_error();
}
?>
