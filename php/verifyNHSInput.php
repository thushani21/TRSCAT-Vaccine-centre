<?php
//this php file will check if the nhs number exisits in the database
	header("Access-Control-Allow-Origin: *");

	$pdo = new \PDO("sqlite:localGPDatabase.db");

	if (isset($_POST["nhsinput"])) {
		$NHSInput = $_POST['nhsinput'];

		$query1 = $pdo->prepare("SELECT nhsNumber FROM Medical_Record WHERE nhsNumber = ?");
		$query1->execute([$NHSInput]);
		$result = $query1->fetch(PDO::FETCH_ASSOC);

		if ($result) {
			echo json_encode('verified');
		} else {
			echo json_encode("FailedVerified");
		}
	} else {
		echo json_encode("Failedphp");
	}
?>
