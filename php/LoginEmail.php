<?php
	header("Access-Control-Allow-Origin: *");

	$pdo = new \PDO("sqlite:localGPDatabase.db");

	if (isset($_GET["userEmail"]) ) {

		
		$email = $_GET['userEmail'];
    	
		$query1 = $pdo->prepare("SELECT patientPassword,nhsNumber FROM Patient WHERE patientEmail = :userEmail
									UNION
								SELECT staffPassword, staffId FROM Staff WHERE staffEmail =:userEmail");
					
		$query1->execute([$email]);
		
		$result1 = $query1->fetch(PDO::FETCH_ASSOC);

		
		// Password found in Patients table
		if($result1){
			
			echo json_encode($result1);

		}else{
			// Password not found in Patients table, check Staff table
			$query2 = $pdo->prepare("SELECT staffPassword, staffId FROM Staff WHERE staffEmail = :email");
			$query2->execute([$email]);
			$result2 = $query2->fetch(PDO::FETCH_ASSOC);
			
			if ($result2) {
				// Password found in Staff table
				echo json_encode($result2);
			} else {
				// Password not found in Staff table either
				echo json_encode("faileddb");
			}
		}	
	}else{
			echo json_encode("Failedphp");
	}
?>