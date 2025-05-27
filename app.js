const passwordField = document.getElementById("password");
const outputField = document.getElementById("output");

function passwordChecker() {

    passwordField.addEventListener('input', function(){
        let password = passwordField.value;
        // console.log(password);
        if(password.length < 8) {
            outputField.innerHTML = 'Password is too short';
            outputField.style.color = 'red';
        }else {
            // console.log("the lowercase", password.search(/[a-z]/));
            // specialChar = "!@#$%^&*()_+}{|?></\}[]";
            // upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            // lowerCase = "abcdefghijklmnopqrstuvwxyz";
            // numbers = "0123456789";

            if(password.search(/[a-z]/) == -1) {
                outputField.innerHTML = 'Password is missing a LOWERCASE letter';
                outputField.style.color = 'red';
            }else if (password.search(/[A-Z]/) == -1) {
                outputField.innerHTML = 'Password is missing a UPPERCASE letter';
                outputField.style.color = 'red';
            }else if (password.search(/[0-9]/) == -1) {
                outputField.innerHTML = 'Password is missing a NUMBERS letter';
                outputField.style.color = 'red';
            }else if (password.search(/[!\@\#\$\%\^\&\*\(\)\_\+\}\{\|\}\?\>\<]/) == -1) {
                outputField.innerHTML = 'Password is missing a SPECIAL CHARACTER letter';
                outputField.style.color = 'red';
            }else {
                outputField.innerHTML = "Your Password is strong";
                outputField.style.color = 'green'
            }
            // console.log("ok")
        }
    })

}

passwordChecker();