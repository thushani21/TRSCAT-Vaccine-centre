<?php
	
	//@author Saba, Camila, Thiviya, Thushani and Amanah
	header("Access-Control-Allow-Origin: *");

	$pdo = new \PDO("sqlite:localGPDatabase.db");

	if (isset($_POST["user"]) && isset($_POST["password"])) {
		//gets the NHS number and the password(encrypted) to change
		
		$username = $_POST['user'];
    	$password = password_hash($_POST['password'], PASSWORD_BCRYPT);
		//applying an algorithm to hash the password coming from the front end
		//Don't want to store the password in plain text form rather a hashed form

		$query1 = $pdo->prepare("SELECT nhsNumber FROM Patient WHERE nhsNumber = ?");
		$query1->execute([$username]);
		$result = $query1->fetch(PDO::FETCH_ASSOC);
		//finding the patient via the NHS number that was sent through the front end. 
		
		
		
		if($result){
			
			$query2 = $pdo->prepare("UPDATE Patient SET patientPassword = ? WHERE nhsNumber = ?");
			$query2->execute([$password,$username]);
			//Updates the pateint password through finding their NHS number
			
			if($query2-> rowCount()>0){
				
				echo json_encode("updated");
				
			}else{
				echo json_encode("Failedphp");
			}	
		}else{
			echo json_encode("Failedphp");
		}	
	}else{
			echo json_encode("Failedphp");
	}
?>

