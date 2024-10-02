<?php
// Start the session and connect to the database
session_start();

// Connect to the SQLite database
//$pdo = new \PDO("sqlite:localGPDatabase.db");
//i think this code worked ?
// try {
//     // Start the session and connect to the database
   

//     // Connect to the SQLite database
//     $pdo = new \PDO("sqlite:localGPDatabase.db");

//     // Check if the form has been submitted
//     if ($_SERVER["REQUEST_METHOD"] == "POST") {
//         //$nhsNumber = $_POST['nhsNumber'];
//         $data = json_decode(file_get_contents("php://input"), true);
//         $nhsNumber = $data['nhsNumber'];


//         // Check if the NHS number exists in the database
//         $stmt = $pdo->prepare('SELECT nhsNumber FROM Medical_Record WHERE nhsNumber = :nhsNumber');
//         $stmt ->execute(['nhsNumber' => $nhsNumber]);
//         $result = $stmt->fetchAll();
//         echo $result;

//         if (count($result) > 0) {
//             // NHS number exists in the database, redirect to view medical record page
//             header("Location: Viewmedicalrecord.php");
//             exit();
//         } else {
//             // NHS number does not exist in the database, show error message
//             $_SESSION['error'] = "Invalid NHS number";
//             header("Location: MyNHSinput.php");
//             exit();
//         }
//     }
// } catch (Exception $e) {
//     echo "An error occurred: " . $e->getMessage();
// }


//camila
<?php
    
    header("Access-Control-Allow-Origin: *");

    $pdo = new \PDO("sqlite:DVLA.db");

    if (isset($_POST["nhsNumber"])) {
        
        $nhsNumber = $_POST["nhsNumber"];
        $st = $pdo->prepare("SELECT nhsNumber FROM Medical_Record WHERE nhsNumber = :nhsNumber");

        $st->execute();

        $result = $st->fetch(PDO::FETCH_ASSOC);

        if ($result) {
            
            echo json_encode($result);
        } else {
            
            echo json_encode("no cars");
        }
    } else {
        
        echo json_encode("no input");
    }
?>



// Check if the form has been submitted
// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     $nhsNumber = $_POST['nhsNumber'];

//     // Check if the NHS number exists in the database
//     $stmt = $pdo->prepare('SELECT nhsNumber FROM Medical_Record WHERE nhsNumber = :nhsNumber');
//     $stmt ->execute(['nhsNumber' => $nhsNumber]);
//     $result = $stmt->fetchAll();

//     if (count($result) > 0) {
//         // NHS number exists in the database, redirect to view medical record page
//         header("Location: Viewmedicalrecord.php");
//         exit();
//     } else {
//         // NHS number does not exist in the database, show error message
//         $_SESSION['error'] = "Invalid NHS number";
//         header("Location: MyNHSinput.php");
//         exit();
//     }
// }





?>