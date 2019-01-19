//signup function

window .onload = function () {
    document.getElementById("password1").onchange = validatePassword;
    document.getElementById("passsword2").onchange = validatePassword;
}

function validatePassword() {   
    var pass2=document.getElementById("password2").value;
    var pass1=document.getElementById("password1").value;

    if (pass1!=pass2) {
        document.getElementById("password2").setCustomValidity("Passwords don't match");

    } else {
        document.getElementById("password2").setCustomValidity('');
        // empty string means no validation error
    }

}

// login function
// function login()
// {
//     var uname = document.getElementsByClassName("emailbox2").value;
//     var pwd = document.getElementById("pwd1").value;
//     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     if(uname =='')
//     {
//         alert("please enter user name.");
//     }
//     else if(pwd=='')
//     {
//         alert("enter the password");
//     }
//     else if(!filter.test(uname))
//     {
//         alert("Enter valid email id.");
//     }
//     else if(pwd.length < 10|| pwd.length > 10)
//     {
//         alert("Password min and max length is 10.");
//     }
//     else
//     {
// alert('Thank You for Login ');
// //Redirecting to other page or webste code or you can set your own html page.
//    window.location = "tech.html";
//         }
// }	