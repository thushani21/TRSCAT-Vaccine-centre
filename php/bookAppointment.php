<?php
	header("Access-Control-Allow-Origin: *");

	$pdo = new \PDO("sqlite:localGPDatabase.db");

	if ( isset($_POST["date"]) && isset($_POST["date"]) && isset($_POST["time"]) && isset($_POST["descrip"])){


		$user = $_POST["user"];
		$date = $_POST['date'];
		$time = $_POST['time'];
		$description = $_POST['descrip'];

		// Check if there's an existing appointment
		$query0 = $pdo->prepare("SELECT appointmentDate, appointmentTime FROM Appointment WHERE appointmentDate = :date AND appointmentTime = :time");
		$query0->execute(['date' => $date, 'time' => $time]);
		$result0 = $query0->fetch(PDO::FETCH_ASSOC);

		if ($result0) {

			// An existing appointment was found, return false
			echo json_encode('notAvailable');

		} else {
			// No existing appointment, add a new appointment to the table
			$query1 = $pdo->prepare("INSERT INTO Appointment (appointmentDate, appointmentTime, appointmentDescription, nhsNumber) VALUES (?, ?, ?, ?)");
			$query1->execute([$date, $time, $description, $user]);

			if ($query1){
				echo json_encode('added');
			}else{
				echo json_encode('faileddb');
			}
		}
		
	}else{
		echo json_encode('failedphp');
	}
?>