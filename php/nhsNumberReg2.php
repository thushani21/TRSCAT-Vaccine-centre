<?php
	

	header("Access-Control-Allow-Origin: *");

	$pdo = new \PDO("sqlite:vaccines.db");

    
	if (isset($_POST["firstName"]) && isset($_POST["lastName"]) && isset($_POST["postcode"])  ) {

		$firstname = $_POST['firstName'];
		$surname = $_POST['lastName'];
		$postcode = $_POST['postcode'];
    	
		$query1 = $pdo->prepare("SELECT NHSNumber FROM patients WHERE Forename = ? AND Surname = ? AND Postcode = ?");
		$query1->execute([$firstname, $surname, $postcode]);
		$result = $query1->fetch(PDO::FETCH_ASSOC);

		if ($result){

	
			echo json_encode($result);
		}else{
			echo json_encode('faileddb');
		}
        
		
		
	}else{
			echo json_encode("Failedphp");
	}
?>