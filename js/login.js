document.getElementById('login-btn').addEventListener('click', function () {
    let emailField = document.getElementById('user-email');
    let emailFieldValue = emailField.value;
    
    let passwordField = document.getElementById('user-password');
    let passwordFieldValue = passwordField.value;
    
    // console.log(emailFieldValue, passwordFieldValue);
    if (emailFieldValue === 'jannat@gmail.com' && passwordFieldValue === '12345') {
        window.location.href = "account.html"
    }
    else {
        alert("Incorrect information");
    }

    emailField.value = "";
    passwordField.value = "";
})