<?php
	//@author Saba, Camila, Thiviya, Thushani and Amanah	

	header("Access-Control-Allow-Origin: *");
	//Just retrives the password to match

	$pdo = new \PDO("sqlite:localGPDatabase.db");
	if (isset($_GET["user"])) {
		//get the patient NHS number from front end
		$username = $_GET['user'];
		
		$query1 = $pdo->prepare("SELECT patientPassword FROM Patient WHERE nhsNumber = ?");
		$query1->execute([$username]);
		$result = $query1->fetch(PDO::FETCH_ASSOC);
		//retrives patients password to compare


		if($result){
			echo json_encode($result);
		}else {
                echo json_encode('not found');
				//if no password is found
        }
   
	
	}else{
		echo json_encode("Failedphp");
	}
?>
