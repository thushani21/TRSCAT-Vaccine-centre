<?php
	header("Access-Control-Allow-Origin: *");

	$pdo = new \PDO("sqlite:localGPDatabase.db");

	if (isset($_POST["id"]) ) {

		
		$id = $_POST['id'];
    	
		$query1 = $pdo->prepare("SELECT staffId FROM Doctor WHERE staffId = ?");
		$query1->execute([$id]);
		$result = $query1->fetch(PDO::FETCH_ASSOC);
		
		if($result){
			
			echo json_encode('verified');

		}else{
			echo json_encode("FailedVerified");
		}	
	}else{
			echo json_encode("Failedphp");
	}
?>