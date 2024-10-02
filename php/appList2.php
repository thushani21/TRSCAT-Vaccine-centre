<?php
	
	header("Access-Control-Allow-Origin: *");

	$pdo = new \PDO("sqlite:localGPDatabase.db");

	if (isset($_GET["id"]) ) {

		$id = $_GET['id'];
		
		$query1 = $pdo->prepare("SELECT * FROM Appointment WHERE staffId = :id ");
		$query1->execute([$id]);
		$result1 = $query1->fetchAll(PDO::FETCH_ASSOC);

		if ($result1){
			
		
			
			echo json_encode($result1);

			
		}else{
			echo json_encode("faileddb");
		}
		
	}else{
			echo json_encode("failedphp");
	}

?>

