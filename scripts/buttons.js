/*  Will use local storage to store the information from the survey. 
    The end of the survey will commit the answers to the DB  */

    /* create clear and display button on thank you page for testing */
function nextPage(clicked_id){
    /* Create switch statement to act as phone book
        Will pull id of current button name that was clicked
        to know which page user is currently on
    */
    switch(clicked_id){
        case "index":
            window.location = "pages/guest_name.html";
            break;
        case "guest_name":
            localStorage.setItem("guest_first_name", document.getElementById("guest_first_name").value);
            localStorage.setItem("guest_last_name", document.getElementById("guest_last_name").value);
            window.location = "guest_gender.html";
            break;
        case "org_name":
            localStorage.setItem("org_name", document.getElementById("org_name").value);
            break;
        case "guest_gender":
            if(document.getElementById("guest_sex_male").checked == true){
                localStorage.setItem("guest_gender", "male");
            }else if(document.getElementById("guest_sex_female").checked == true){
                localStorage.setItem("guest_gender","female");
            }else{
                localStorage.setItem("guest_gender","unspecified");
            }
            window.location = "guest_email.html";
            break;
        case "guest_email":
            localStorage.setItem("guest_email", document.getElementById("guest_email").value);
            window.location = "guest_zip_code.html";
            break;
        case "guest_zip_code":
            localStorage.setItem("guest_zip_code", document.getElementById("guest_zip_code_answer").value);
            window.location = "guest_ethnicity.html";
            break;
        case "guest_ethnicity":
            if (document.getElementById("guest_ethnicity_white").checked == true) {
                localStorage.setItem("guest_ethnicity","White");
            } else if(document.getElementById("guest_ethnicity_african_american").checked == true) {
                localStorage.setItem("guest_ethnicity","African American");
            }else if(document.getElementById("guest_ethnicity_asian").checked == true){
                localStorage.setItem("guest_ethnicity","Asian");
            }else if(document.getElementById("guest_ethnicity_american_indian").checked == true){
                localStorage.setItem("guest_ethnicity","American Indian");
            }else{
                localStorage.setItem("guest_ethnicity","other");
            }
            window.location = "guest_member.html";
            break;
        case "guest_member":
            //Call function that reads localstorage, sets the values to variables in PHP and then commits to the DB
            if (document.getElementById("guest_member_yes").checked == true){
                localStorage.setItem("guest_member","Y");
            } else{
                localStorage.setItem("guest_member","N");
            }
            //window.location = "guest_thank_you.html";
            setDB();
            break;
    }
}

function previousPage(clicked_id){
    switch(clicked_id){
        case "index":
            window.location = "pages/guest_name.html";
            break;
        case "guest_name":
            localStorage.clear(); //Clear local storage when backing up to the welcome screen
            window.location = "../index.html";
            break;
        case "guest_gender":
            window.location = "guest_name.html";
            break;
        case "guest_email":
            window.location = "guest_gender.html";
            break;
        case "guest_zip_code":
            window.location = "guest_email.html";
            break;
        case "guest_ethnicity":
            window.location = "guest_zip_code.html";
            break;
        case "guest_member":
            window.location = "guest_ethnicity.html";
            break;
    }
}

//Reads localstorage for user input --> sets localstorage to PHP variables --> commits the information to the DB
function setDB(){
    //JS obj of survey answers
    var surveyObj = {};
        surveyObj ={firstN: localStorage.getItem("guest_first_name"), lastN: localStorage.getItem("guest_last_name"), gender: localStorage.getItem("guest_gender"),
                    email: localStorage.getItem("guest_email"), zip: localStorage.getItem("guest_zip_code"), ethnicity: localStorage.getItem("guest_ethnicity"), 
                    member: localStorage.getItem("guest_member")};
    //Send to PHP
    $.ajax({
        url: '../includes/dbh.php',
        type: 'post',
        data: {"answers" : JSON.stringify(surveyObj)}
    });
    console.log(surveyObj);
}
