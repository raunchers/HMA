var currentPage = 0;

function nextPage(){
    switch(currentPage){
        case 0: //Welcome
            window.location = "pages/guest_name.html";
            currentPage = 0;
            console.log("current page: " + currentPage);
            break;
        case 1: //Name
            window.location = "guest_gender.html";
            currentPage = 1;
            console.log("current page: " + currentPage);
            break;
        case 2: //Gender
            window.location = "guest_email.html";
            currentPage = 2;
            console.log("current page: " + currentPage);
            break;
        case 3: //Email
            window.location = "guest_age.html";
            currentPage = 3;
            console.log("current page: " + currentPage);
            break;
        case 4: //Age
            window.location = "guest_zip_code.html";
            currentPage = 4;
            console.log("current page: " + currentPage);
            break;
        case 5: //Zip code
            window.location = "guest_ethnicity.html";
            currentPage = 5;
            console.log("current page: " + currentPage);
            break;
        case 6: //Ethnicity
            window.location = "guest_member.html";
            currentPage = 6;
            console.log("current page: " + currentPage);
            break;
        case 7: //Member
            window.location = "guest_thank_you.html";
            currentPage = 7;
            console.log("current page: " + currentPage);
            break;
        case 8: //Thank you
            window.location = "../index.html";
            currentPage = 8;
            console.log("current page: " + currentPage);
            break;

    }
    //window.location = "pages/guest_name.html";        
}      

function previousPage(){
    switch(currentPage){
        case 0: //Welcome
            window.location = "index.html";
            currentPage = 0;
            console.log("current page: " + currentPage);
            break;
        case 1: //Name
            window.location = "../index.html";
            currentPage = 1;
            console.log("current page: " + currentPage);
            break;
        case 2: //Gender
            window.location = "guest_name.html";
            currentPage = 2;
            console.log("current page: " + currentPage);
            break;
        case 3: //Email
            window.location = "guest_gender.html";
            currentPage = 3;
            console.log("current page: " + currentPage);
            break;
        case 4: //Age
            window.location = "guest_email.html";
            currentPage = 4;
            console.log("current page: " + currentPage);
            break;
        case 5: //Zip code
            window.location = "guest_age.html";
            currentPage = 5;
            console.log("current page: " + currentPage);
            break;
        case 6: //Ethnicity
            window.location = "guest_zip_code.html";
            currentPage = 6;
            console.log("current page: " + currentPage);
            break;
        case 7: //Member
            window.location = "guest_ethnicity.html";
            currentPage = 7;
            console.log("current page: " + currentPage);
            break;
    }
}
