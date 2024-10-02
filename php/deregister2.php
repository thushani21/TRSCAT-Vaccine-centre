<?php
	//@author Saba, Camila, Thiviya, Thushani and Amanah	

	header("Access-Control-Allow-Origin: *");
	//De-registers the pateing from the service

	$pdo = new \PDO("sqlite:localGPDatabase.db");
	if (isset($_GET["user"])) {//gets the patients NHS number in order to de-register

		$username = $_GET['user'];
		
		$query1 = $pdo->prepare("DELETE FROM Patient WHERE nhsNumber = ?");//Deletes the Patient by using their NHS number
		$query1->execute([$username]);
		$result = $query1->fetch(PDO::FETCH_ASSOC);
		echo json_encode("De-registered");
	
	}else{
		echo json_encode("Failedphp");
	}
?>
