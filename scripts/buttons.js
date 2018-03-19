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
            console.log(localStorage.getItem("guest_first_name"));
            console.log(localStorage.getItem("guest_last_name"));
            window.location = "guest_gender.html";
            break;
        case "guest_sex_male":
            localStorage.setItem("guest_gender","male");
            window.location = "guest_email.html";
            break;
        case "guest_sex_female":
            localStorage.setItem("guest_gender","female");
            window.location = "guest_email.html";
            break;
        case "guest_sex_unspecified":
            localStorage.setItem("guest_gender","unspecified");
            window.location = "guest_email.html";
            break;
        case "guest_email":
            localStorage.setItem("guest_email","unspecified");
            window.location = "guest_age.html";
            break;
        case "guest_age":
            localStorage.setItem("guest_age","unspecified");
            window.location = "guest_zip_code.html";
            break;
        case "guest_zip_code":
            localStorage.setItem("guest_zip_code","unspecified");
            window.location = "guest_ethnicity.html";
            break;
        case "guest_ethnicity":
            localStorage.setItem("guest_ethnicity","unspecified");
            window.location = "guest_member.html";
            break;
        case "guest_member":
            localStorage.setItem("guest_member","no");
            console.log(localStorage.getItem("guest_first_name"));
            console.log(localStorage.getItem("guest_last_name"));
            console.log(localStorage.getItem("guest_gender"));
            console.log(localStorage.getItem("guest_email"));
            console.log(localStorage.getItem("guest_age"));
            console.log(localStorage.getItem("guest_zip_code"));
            console.log(localStorage.getItem("guest_ethnicity"));
            console.log(localStorage.getItem("guest_member"));
            localStorage.clear();
            //window.location = "guest_thank_you.html";
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
        case "guest_age":
            window.location = "guest_email.html";
            break;
        case "guest_zip_code":
            window.location = "guest_age.html";
            break;
        case "guest_ethnicity":
            window.location = "guest_zip_code.html";
            break;
        case "guest_member":
            window.location = "guest_ethnicity.html";
            break;
    }
}