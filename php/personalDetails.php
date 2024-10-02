<?php
		//@author Saba, Camila, Thiviya, Thushani and Amanah
		
		$pdo = new \PDO("sqlite:localGPDatabase.db");
		$nhsNumber = $_GET['nhs'];//variable coming in from front end

		//Fetch data from the first table
		$stmt1 = $pdo->prepare('SELECT * FROM Patient WHERE nhsNumber = :nhsNumber');
		$stmt1->execute(['nhsNumber' => $nhsNumber]);
		$result1 = $stmt1->fetchAll();

		//Fetch data from the second table
		$stmt2 = $pdo->prepare('SELECT * FROM GP_Record WHERE nhsNumber = :nhsNumber');
		$stmt2->execute(['nhsNumber' => $nhsNumber]);
		$result2 = $stmt2->fetchAll();

		//Merge the results from both queries
		$result = array_merge($result1, $result2);

		header('Content-Type: application/json');
		header("Access-Control-Allow-Origin: http://localhost:3000"); 
		header("Access-Control-Allow-Headers: Content-Type, Authorization");
		header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

		echo json_encode($result);//returns result to the front end

?>


