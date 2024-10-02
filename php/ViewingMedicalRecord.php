<?php
//query to retrieve from the database the medical record of a patient
	header("Access-Control-Allow-Origin: *");
	$pdo = new \PDO("sqlite:localGPDatabase.db");

	if (isset($_GET["id"]) ) {
		
		$id = $_GET['id'];
		$query = $pdo->prepare("SELECT * FROM Medical_Record WHERE nhsNumber = :id");
		$query->execute([$id]);
		$result = $query->fetch(PDO::FETCH_ASSOC);
		
		
		if($result){
			
			
			echo json_encode($result);

		}else{
			echo json_encode("faileddb");
		}	
	}else{
			echo json_encode("failedphp");
	}


?>