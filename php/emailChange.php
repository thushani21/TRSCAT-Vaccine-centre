<?php
	//@author Saba, Camila, Thiviya, Thushani and Amanah

	header("Access-Control-Allow-Origin: *");

	$pdo = new \PDO("sqlite:localGPDatabase.db");

	if (isset($_POST["user"]) && isset($_POST["userEmail"])) {
		//gets the patient NHS number and the email they have inputted
		
		$username = $_POST['user'];
    	$usernameEmail = $_POST['userEmail'];

		$query = $pdo->prepare("SELECT patientEmail FROM Patient WHERE patientEmail = ?");
		$query->execute([$usernameEmail]);
		$result = $query->fetch(PDO::FETCH_ASSOC);

		
		
		if(!$result){

			$query1 = $pdo->prepare("SELECT nhsNumber FROM Patient WHERE nhsNumber = ?");
			$query1->execute([$username]);
			$result1 = $query1->fetch(PDO::FETCH_ASSOC);
			//retrieving an associative array - with coloumn names as keys and the coloumn values as the values
		
		
			if($result1){
			
				$query2 = $pdo->prepare("UPDATE Patient SET patientEmail = ? WHERE nhsNumber = ?");
				$query2->execute([$usernameEmail,$username]);
				//updates the patients email by looking for their NHS number (primary key)
			
				if($query2-> rowCount()>0){//checking if any rows are returned
				
					echo json_encode("updated");
				
				}else{
					echo json_encode("Failedphp"); //no rows means php failed
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

