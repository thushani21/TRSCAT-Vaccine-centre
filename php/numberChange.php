<?php
	//@author Saba, Camila, Thiviya, Thushani and Amanah
	header("Access-Control-Allow-Origin: *");

	$pdo = new \PDO("sqlite:localGPDatabase.db");

	if (isset($_POST["user"]) && isset($_POST["number"])) {
		//gets the patient NHS number and the number they have inputted
		
		$username = $_POST['user'];
    	$usernameNumber = $_POST['number'];


		$query = $pdo->prepare("SELECT patientTelNo FROM Patient WHERE patientTelNo = ?");
		$query->execute([$usernameNumber]);
		$result = $query->fetch(PDO::FETCH_ASSOC);
		
		if(!$result){

		$query1 = $pdo->prepare("SELECT nhsNumber FROM Patient WHERE nhsNumber = ?");//find the patient through their NHS number
		$query1->execute([$username]);
		$result = $query1->fetch(PDO::FETCH_ASSOC);
		//retrieving an associative array - with coloumn names as keys and the coloumn values as the values
		
		
			if($result){
			
				$query2 = $pdo->prepare("UPDATE Patient SET patientTelNo = ? WHERE nhsNumber = ?");
				$query2->execute([$usernameNumber,$username]);
				//updates the patients phone number by looking for their NHS number (primary key)
				if($query2-> rowCount()>0){//checking if any rows are returned
				
					echo json_encode("updated");
				
				}else{
					echo json_encode("Failedphp");//no rows means php failed
				}	
			}else{
				echo json_encode("Failedphp");
			}
		}else{
			echo json_encode("exists");
		}	
	}else{
			echo json_encode("Failedphp");
	}
?>

