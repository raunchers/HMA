//window.location = "pages/guest_name.html";
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
            window.location = "guest_gender.html";
            break;
        case "guest_gender":
            window.location = "guest_email.html";
            break;
        case "guest_email":
            window.location = "guest_age.html";
            break;
        case "guest_age":
            window.location = "guest_zip_code.html";
            break;
        case "guest_zip_code":
            window.location = "guest_ethnicity.html";
            break;
        case "guest_ethnicity":
            window.location = "guest_member.html";
            break;
        case "guest_member":
            window.location = "guest_thank_you.html";
            break;
    }
}

function previousPage(clicked_id){
    switch(clicked_id){
        case "index":
            window.location = "pages/guest_name.html";
            break;
        case "guest_name":
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