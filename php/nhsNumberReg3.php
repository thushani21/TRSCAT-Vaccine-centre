<?php
	

	header("Access-Control-Allow-Origin: *");

	$pdo = new \PDO("sqlite:localGPDatabase.db");

    
	if (isset($_POST["nhs"]) && isset($_POST["forename"]) && isset($_POST["surname"]) && isset($_POST["dob"]) && isset($_POST["genderCode"])
			&& isset($_POST["postcode"]) && isset($_POST["email"]) && isset($_POST["address"]) && isset($_POST["number"]) 
			&& isset($_POST["nationality"]) && isset($_POST["ethnicity"]) && isset($_POST["password"]) ) {

		$nhsNo = $_POST['nhs'];
		$name = $_POST['forename'];
		$surname = $_POST['surname'];
		$dob = $_POST['dob'];
		$genderCode = $_POST['genderCode'];
		$postcode = $_POST['postcode'];
		$email = $_POST['email'];
		$address = $_POST['address'];
		$number = $_POST['number'];
		$nationality = $_POST['nationality'];
		$ethnicity = $_POST['ethnicity'];
		$password = $_POST['password'];
    	
		$query = $pdo->prepare("INSERT INTO Patient (nhsNumber, forename, surname, personDOB, genderCode, postcode, patientEmail, patientAddress, patientTelNo, patientNationality, patientEthnicity, patientPassword) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,  ?, ?)");
		$query->execute([$nhsNo, $name, $surname, $dob, $genderCode, $postcode, $email, $address, $number, $nationality, $ethnicity, $password]);
	
		if ($query) {
			echo json_encode('success');
		} else {
			echo json_encode('faildb');
		}
	}else{
			echo json_encode("failedphp");
	}
?>