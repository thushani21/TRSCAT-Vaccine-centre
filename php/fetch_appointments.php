<?php
	
	header("Access-Control-Allow-Origin: *");
	$pdo = new \PDO("localGPDatabase.db");

	if (isset($GET["id"])) {
				
		$st = $pdo->prepare("SELECT * FROM Appointment");
		$st->execute();		
		$result = $st->fetch(PDO::FETCH_ASSOC);
		if ($result) {			
			echo json_encode($result);
		} else {
			
			echo json_encode("no cars");
		}
	} else {
		
		echo json_encode("no input");
	}
?>
