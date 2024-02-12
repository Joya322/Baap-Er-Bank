document.getElementById('login-btn').addEventListener('click', function () {
    // getting user email
    const emailField = document.getElementById('user-email');
    const emailFieldValue = emailField.value;
    
    // getting user password
    const passwordField = document.getElementById('user-password');
    const passwordFieldValue = passwordField.value;
    
    if (emailFieldValue === 'jannat@gmail.com' && passwordFieldValue === '12345') {
        window.location.href = "account.html"
    }
    else {
        alert("Incorrect information");
    }

    emailField.value = "";
    passwordField.value = "";
})