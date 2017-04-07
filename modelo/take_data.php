<?php
//print_r($_FILES);

	/*echo "Upload: " . $_FILES["foto_tomada"]["name"] . "<br>";
	echo "Type: " . $_FILES["foto_tomada"]["type"] . "<br>";
	echo "Size: " . ($_FILES["foto_tomada"]["size"] / 1024) . " kB<br>";
	echo "Stored in: " . $_FILES["foto_tomada"]["tmp_name"] . "<br>";*/
	
	header("content-type:application/json");
	
	$nombre = $_FILES["foto_tomada"]["name"];
	$tipo = $_FILES["foto_tomada"]["type"];
	$tamano = ($_FILES["foto_tomada"]["size"] / 1024)."kB";
	$aExtraInfo = getimagesize($_FILES['foto_tomada']['tmp_name']);
	$sImage = "data:" . $aExtraInfo["mime"] . ";base64," . base64_encode(file_get_contents($_FILES['foto_tomada']['tmp_name']));
	
	$cadena_imagen = array(
		"nombre" => $nombre,
		"tipo" => $tipo,
		"tamano" => $tamano,
		"imagen" => $sImage
	);

	
	echo $cadena_imagen

/*
Tomar el archivo recivido como un string, ideal para fomatos de texto sin formato como txt
$fileContent = file_get_contents($_FILES['foto_tomada']['tmp_name']);
header("Content-Type: image/jpeg");
echo $fileContent;
*/
?>