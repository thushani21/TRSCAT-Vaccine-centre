<?php

// Set up log file
$logFile = 'sync.log';
$logHandle = fopen($logFile, 'a');

// Log start time
$logMessage = "Synchronization started at " . date('Y-m-d H:i:s') . "\n";
fwrite($logHandle, $logMessage);

// Connect to the databases
try {
    $pdo1 = new PDO('sqlite:/localGPDatabase.sqlite');
    $pdo2 = new PDO('sqlite:/vaccines.sqlite');
} catch (PDOException $e) {
    // Log error and exit script
    $logMessage = "Error connecting to databases: " . $e->getMessage() . "\n";
    fwrite($logHandle, $logMessage);
    exit;
}

// Synchronize table patients
try {
    $db2 = $pdo2;
    $db2->query('DELETE FROM patients');
    $db2->query('DELETE FROM vaccines');
    
    $sql1 = 'INSERT INTO patients (NHSNumber, Forename, Surname, PersonDOB, GenderCode, Postcode) SELECT nhsNumber, forename, surname, personDOB, genderCode, postcode FROM localGPDatabase.Patient';
    $db2->query($sql1);
    
    // Synchronize table medical record - vaccines
    $sql2 = 'INSERT INTO vaccines (NHSNumber, DoseNo, VaccinationDate, VaccineManufacturer, DiseaseTargeted, VaccineType, Product, VaccineBatchNumber, CountryOfVaccination, Authority, Site, TotalSeriesOfDoses, DisplayName, SnomeCode,  DateEntered, ProcedureCode, Booster ) SELECT NHSNumber, DoseNo, VaccinationDate, VaccineManufacturer, DiseaseTargeted, VaccineType, Product, VacineBatchNumber, CountryOfVaccination, Authority, Site, TotalSeriesOfDoses, DisplayName, SnomeCode,  DateEntered, ProcedureCode, Booster FROM localGPDatabase.Medical_Record';
    $db2->query($sql2);
    
    // Log success message
    $logMessage = "Synchronization completed successfully at " . date('Y-m-d H:i:s') . "\n";
    fwrite($logHandle, $logMessage);
} catch (PDOException $e) {
    // Log error message
    $logMessage = "Error synchronizing databases: " . $e->getMessage() . "\n";
    fwrite($logHandle, $logMessage);
}

// Check for successful updates
if ($db2->errorInfo()[0] === '00000') {
    $logMessage = "Updates successful at " . date('Y-m-d H:i:s') . "\n";
    fwrite($logHandle, $logMessage);
}

// Close the database connections
$pdo1 = null;
$pdo2 = null;

// Close the log file handle
fclose($logHandle);

?>
