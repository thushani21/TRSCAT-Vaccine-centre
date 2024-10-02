<?php
	

	header("Access-Control-Allow-Origin: *");

	$pdo = new \PDO("sqlite:localGPDatabase.db");

	if (isset($_POST["refN"]) ) {

		
		$refNum = $_POST['refN'];
    	
		$query1 = $pdo->prepare("SELECT appointmentReferenceNumber FROM Appointment WHERE appointmentReferenceNumber = ?");
		$query1->execute([$refNum]);
		$result = $query1->fetch(PDO::FETCH_ASSOC);
		
		
		if($result){

			
			$query2 = $pdo->prepare("DELETE FROM Appointment WHERE appointmentReferenceNumber = ?");
			$query2->execute([$refNum]);
			
			echo json_encode('cancelled');
			/*if($query2-> rowCount()>0){
				
				echo json_encode("cancelled");
				
			}else{
				echo json_encode("FailedCancelled1");
			}*/

		}else{
			echo json_encode("FailedCancelled1");
		}	
	}else{
			echo json_encode("Failedphp");
	}
?>