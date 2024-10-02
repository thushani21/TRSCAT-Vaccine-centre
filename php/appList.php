<?php
	
	header("Access-Control-Allow-Origin: *");

	$pdo = new \PDO("sqlite:localGPDatabase.db");

	if (isset($_GET["id"]) ) {

		$id = $_GET['id'];
		
		$query1 = $pdo->prepare("SELECT * FROM Appointment WHERE staffId = :id OR nhsNumber = :id");
		$query1->execute([$id]);
		$result1 = $query1->fetch(PDO::FETCH_ASSOC);

		
		if ($result1){
			
			$nhs = $result1['nhsNumber'];

			$query2 = $pdo->prepare("SELECT forename, surname FROM Patient WHERE nhsNumber = :nhsNumber");
			$query2->execute([$nhs]);
			$result2 = $query2->fetch(PDO::FETCH_ASSOC);
			
			$result3 = array_merge($result1, $result2);

			if($result3){
				
				echo json_encode($result3);

			}else{
				echo json_encode("faileddb");
			}	
		}else{
			echo json_encode("faileddb");
		}
		
	}else{
			echo json_encode("failedphp");
	}

?>

