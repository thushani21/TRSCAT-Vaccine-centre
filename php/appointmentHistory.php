<?php

//@author Saba, Camila, Thiviya, Thushani and Amanah

$pdo = new \PDO("sqlite:localGPDatabase.db");
$nhsNumber = $_GET['nhs'];//variable coming in from front end
$staffArray= []; //arrays intialised to store information about the staff
$staffNames= [];
$finalResult= [];//the result that is needed in order to display on the database. 

//Fetch data from the first table
$stmt1 = $pdo->prepare('SELECT * FROM Appointment WHERE nhsNumber = :nhsNumber');
$stmt1->execute([$nhsNumber]);
$result = $stmt1->fetchAll();

foreach($result as $row){
    //Accessing the row staffid 
    $staffId = $row['staffId'];
    $staffArray[] = $staffId;
    
}

foreach($staffArray as $row){//iterating
    $staffId = $row;
    $stmt2 = $pdo->prepare('SELECT * FROM Staff WHERE staffId = :staffID');//getting the staffId from the staff table
    $stmt2->execute(['staffID' => $staffId]);
    $stmt2->setFetchMode(PDO::FETCH_OBJ); //fetch mode to return objects
    $result2 = $stmt2->fetchAll();
    $staffFirstName = $result2[0]->staffFirstName;//will iterate 
    $staffSurname = $result2[0]->staffSurname;//Gets the staff first name and surname
    $staffName=$staffFirstName." " . $staffSurname;//Staff first nmae and surnmae are put together 
    $staffNames[]=$staffName;//The staff names are stored in an array
}

for ($i = 0; $i < count($result); $i++) {
    $currentElement = $result[$i];//has all the results stored
    $staffId = $currentElement['staffId'];//accessing the staffid from result
    $appDate =$currentElement['appointmentDate'];//accessing the appointmentDate from result
    $appTime =$currentElement['appointmentTime'];//accessing the appointmentTime from result
    $appDescrip =$currentElement['appointmentDescription'];//accessing the appointmentDescription from result
    $staffName = $staffNames[$i];

    
    $appointmentHistory = array(//assigning objects to an array
        "staffId" => $staffId,
        "appointmentDate" => $appDate,
        "appointmentTime" => $appTime,
        "appointmentDescription" => $appDescrip,
        "staffFullName" => $staffName
    );

    $finalResult[] = $appointmentHistory;//the object is stored in the array.
    
}


header('Content-Type: application/json');
header("Access-Control-Allow-Origin: http://localhost:3000"); 
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");


echo json_encode($finalResult);

?>