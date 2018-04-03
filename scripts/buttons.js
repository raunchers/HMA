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
                window.location = "guest_email.html";
            } else{
                localStorage.setItem("guest_member","N");
                localStorage.setItem("guest_email", "unspecified@gmail.com");
                window.location = "guest_heard.html";
            }
            break;
        case "guest_email":
            localStorage.setItem("guest_email", document.getElementById("guest_email_answer").value);
            window.location = "guest_heard.html";
            break;
        case "guest_heard":
            if(document.getElementById("guest_internet").checked == true){
                localStorage.setItem("guest_heard", "Internet");
            }else if(document.getElementById("guest_news_ad").checked == true){
                localStorage.setItem("guest_heard", "Newspaper Ad");
            }else if(document.getElementById("guest_friends_family").checked == true){
                localStorage.setItem("guest_heard", "Friends and family");
            }else{
                localStorage.setItem("guest_heard", "Other");
            }
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
        case "guest_zip_code":
            window.location = "guest_gender.html";
            break;
        case "guest_ethnicity":
            window.location = "guest_zip_code.html";
            break;
        case "guest_member":
            window.location = "guest_ethnicity.html";
            break;
        case "guest_email":
            window.location = "guest_member.html";
            break;
        case "guest_heard":
            window.location = "guest_email.html";
            break;
    }
}

//Reads localstorage for user input --> sets localstorage to PHP variables --> commits the information to the DB
function setDB(){
    //JS obj of survey answers
    var surveyObj = {};
        surveyObj ={firstN: localStorage.getItem("guest_first_name"), lastN: localStorage.getItem("guest_last_name"), gender: localStorage.getItem("guest_gender"),
                    email: localStorage.getItem("guest_email"), heard: localStorage.getItem("guest_heard"), zip: localStorage.getItem("guest_zip_code"), 
                    ethnicity: localStorage.getItem("guest_ethnicity"), member: localStorage.getItem("guest_member")};
    //Send to PHP
    $.ajax({
        url: '../includes/dbh.php',
        type: 'post',
        data: {"answers" : JSON.stringify(surveyObj)},
        success: function(){
            window.location = "guest_thank_you.html";
        }
    });
    console.log(surveyObj);
    
}
