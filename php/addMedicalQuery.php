<?php
$pdo = new \PDO("sqlite:localGPDatabase.db");
$nhsNumber = $_GET['nhsinputtry'];
$stmt = $pdo-> prepare("INSERT INTO Medical_Record 
						(DoesNo, VaccinationDate, VaccineManufacturer, DiseaseTargeted, VaccineType, Product, VaccineBatchNumber,  CountryOfVaccination, Authority, Site, TotalSeriesOfDoses, DisplayName, SnomeCode, DateEntered, ProcedureCode, Booster )
						Values
						(".",'".$currentdatetime."','Placed','".$currentdatetime."')";


             










header('Content-Type: application/json');
header("Access-Control-Allow-Origin: http://localhost:3000"); 
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

echo json_encode($result);


?>