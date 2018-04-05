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

    //Test if data came through
    if(isset($_POST["answers"])){
      //decone JSON
      $surAnswers = json_decode($_POST["answers"]);
    }

    //Get JSON data to PHP
    $orgName = $surAnswers->{'orgN'};
    $orgZip = $surAnswers->{'orgZip'};
    $orgAdult = (int) $surAnswers->{'orgAdult'};
    $orgChild = (int) $surAnswers->{'orgChild'};

    //SQL Query to insert data.
    $stmt = "INSERT INTO org (ORG_NAME,ORG_ADULT_COUNT,ORG_CHILD_COUNT,ORG_ZIP_CODE) 
    VALUES('$orgName','$orgAdult','$orgChild','$orgZip')"; //variables go here
    mysqli_query($conn,$stmt);
    mysqli_close($conn);
    
?>