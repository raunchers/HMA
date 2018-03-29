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
    $firstName = $surAnswers->{'firstN'};
    $lastName = $surAnswers->{'lastN'};
    $gender = $surAnswers->{'gender'};
    $email = $surAnswers->{'email'};
    $zip = $surAnswers->{'zip'};
    $ethnicity = $surAnswers->{'ethnicity'};
    $heard = "Other";
    $member = $surAnswers->{'member'};
    $email = $surAnswers->{'email'};

    //SQL Query to insert data.
    $stmt = "INSERT INTO guest (GUEST_FIRST_NAME,GUEST_LAST_NAME,GUEST_ZIP_CODE,GUEST_ETHNICITY,GUEST_HEARD,GUEST_MEMBER,GUEST_EMAIL) 
    VALUES('$firstName','$lastName','$zip','$ethnicity','$heard','$member','$email')"; //variables go here
    mysqli_query($conn,$stmt);
    mysqli_close($conn);

    //,'$gender','$email'
    
?>