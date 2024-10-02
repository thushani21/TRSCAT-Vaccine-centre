// Connect to the databases

$pdo1 = new PDO('sqlite:/localGPDatabase.sqlite');
$pdo2 = new PDO('sqlite:/vaccines.sqlite');

// Synchronize table patients
$db2->query('TRUNCATE TABLE patients');
$db2->query('TRUNCATE TABLE vaccines');


$sql1 = 'INSERT INTO vaccines.patients (NHSNumber, Forename, Surname, PersonDOB, GenderCode, Postcode) SELECT nhsNumber, forename, surname, personDOB, genderCode FROM localGPDatabase.Patient';
$db2-> query($sql1);

// Synchronize table medical record - vaccines
$sql2 = 'INSERT INTO vaccines.vaccines (NHSNumber, DoseNo, VaccinationDate, VaccineManufacturer, DiseaseTargeted, VaccineType, Product, VaccineBatchNumber, CountryOfVaccination, Authority, Site, TotalSeriesOfDoses, DisplayName, SnomeCode,  DateEntered, ProcedureCode, Booster ) SELECT NHSNumber, DoseNo, VaccinationDate, VaccineManufacturer, DiseaseTargeted, VaccineType, Product, VacineBatchNumber, CountryOfVaccination, Authority, Site, TotalSeriesOfDoses, DisplayName, SnomeCode,  DateEntered, ProcedureCode, Booster FROM localGPDatabase.Medical_Record';
$db2->query($sql2);

// Close the database connections
$db1 = null;
$db2 = null;
?>
