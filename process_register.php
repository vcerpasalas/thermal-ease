<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtén los datos del formulario
    $materialName = $_POST["materialName"];
    $description = $_POST["description"];
    $thermalConductivity = $_POST["thermalConductivity"];
    $materialImage = $_FILES["materialImage"]["name"];

    // Validación y procesamiento de los datos

    // Verifica si el archivo CSV ya existe
    $csvFile = 'materiales.csv';
    $isHeader = !file_exists($csvFile);

    // Abre el archivo CSV en modo de escritura
    $file = fopen($csvFile, 'a');

    // Si es la primera vez que se escribe en el archivo, agrega un encabezado
    if ($isHeader) {
        fputcsv($file, ["Material Name", "Description", "Thermal Conductivity", "Material Image"]);
    }

    // Escribe los datos en el archivo CSV
    fputcsv($file, [$materialName, $description, $thermalConductivity, $materialImage]);

    // Cierra el archivo
    fclose($file);

    // Mueve la imagen al directorio deseado
    $targetDir = 'uploads/';
    $targetFile = $targetDir . $materialImage;

    move_uploaded_file($_FILES["materialImage"]["tmp_name"], $targetFile);

    // Redirecciona a una página de éxito o a donde desees
    header('Location: success.php');
    exit();
}
?>
