<?php
	
// this php file will be used to insert data into the database
	header("Access-Control-Allow-Origin: *");

	$pdo = new \PDO("sqlite:localGPDatabase.db");

    
	if ( isset($_POST["nhs"])&& 
	isset($_POST["dose"]) && 
	isset($_POST["date1"]) && 
	isset($_POST["vaccMan"]) && 
	isset($_POST["diseaseTar"]) && 
	isset($_POST["vaccType"])&& 
	isset($_POST["product"]) && 
	isset($_POST["vaccBatch"]) && 
	isset($_POST["countryVacc"]) && 
	isset($_POST["auth"]) && 
	isset($_POST["sitee"])&& 
	isset($_POST["totalDos"]) && 
	isset($_POST["dispName"]) && 
	isset($_POST["gnome"])  && 
	isset($_POST["date2"])  && 
	isset($_POST["procedure"])  && 
	isset($_POST["booster"])   ) {
		
		$nhs = $_POST["nhs"];
		$dose = $_POST['dose'];
		$date1 = $_POST['date1'];
		$vaccMan = $_POST['vaccMan'];
		$diseaseTar = $_POST['diseaseTar'];
		$vaccType = $_POST["vaccType"];
		$product = $_POST['product'];
		$vaccBatch = $_POST['vaccBatch'];
		$countryVacc = $_POST['countryVacc'];
		$auth = $_POST['auth'];
		$site = $_POST['sitee'];
		$totalDos = $_POST['totalDos'];
		$dispName = $_POST['dispName'];
		$gnome = $_POST['gnome'];
		$date2 = $_POST['date2'];
		$procedure = $_POST['procedure'];
		$booster = $_POST['booster'];

		$query = $pdo->prepare("INSERT INTO Medical_Record (nhsNumber, DoesNo, VaccinationDate, VaccineManufacturer, DiseaseTargeted, vaccineType, Product, VaccineBatchNumber, CountryOfVaccination, Authority, Site, TotalSeriesOfDoses, DisplayName, SnomeCode, DateEntered, ProcedureCode, Booster) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,  ?, ?, ?, ?, ?,  ?, ?) ");
		$query->execute([$nhs, $dose, $date1, $vaccMan, $diseaseTar, $vaccType, $product, $vaccBatch, $countryVacc, $auth, $site, $totalDos, $dispName, $gnome, $date2, $procedure, $booster]);
	

		if ($query) {
			echo json_encode('success');
		} else {
			echo json_encode('faildb');
		}
	}else{
			echo json_encode("failedphp");
	}
?>