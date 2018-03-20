<?php
    //Variables for DB connection
    $serverName = "localhost";
    $userName = "root";
    $password = "";
    $dbName = "hma";
    
    $conn = mysqli_connect($serverName, $userName, $password, $dbName);
    if(mysqli_connect_errno()){
      die("Connection failed: " . mysql_connect_error());
    }
    //mysqli_real_escape_string($_POST['x'])
    $data = mysqli_real_escape_string($_POST['x']);
    $obj = json_decode($data,false);

    //Get JSON data to PHP
    $firstName = $obj["guest_first_name"];
    $lastName = $obj["guest_last_name"];
    $gender = $obj["guest_gender"];
    $email = $obj["guest_email"];
    $age = $obj["guest_age"];
    $zip = $obj["guest_zip_code"];
    $ethnicity = $obj["guest_ethnicity"];
    $heard = "Other";
    $member = $obj["guest_member"];

    //SQL Query to insert data.
    $stmt = "INSERT INTO visitors (GUEST_FIRST_NAME,GUEST_LAST_NAME,GUEST_AGE,GUEST_ZIP_CODE,GUEST_ETHNICITY,GUEST_HEARD,GUEST_MEMBER) 
    VALUES('michael','$lastName','$gender','$email','$age','$zip','$ethnicity', '$heard', '$member')"; //variables go here
    mysqli_query($conn,$stmt);
    mysqli_close($conn);
?>