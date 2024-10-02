<?php
	

	header("Access-Control-Allow-Origin: *");

	$pdo = new \PDO("sqlite:vaccines.db");

    
	if (isset($_GET["nhs"]) ) {

		$nhsNo = $_GET['nhs'];
    	
		$query1 = $pdo->prepare("SELECT * FROM patients WHERE NHSNumber = ?");
		$query1->execute([$nhsNo]);
		$result = $query1->fetch(PDO::FETCH_ASSOC);

		if ($result){
			echo json_encode($result);
		}else{
			echo json_encode('faileddb');
		}
        
		
		
	}else{
			echo json_encode("Failedphp");
	}
?>