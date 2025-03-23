document.addEventListener("DOMContentLoaded", function () {
    const recoveryForm = document.getElementById("recoveryForm");
    const recoveryEmailInput = document.getElementById("recoveryEmail");

    recoveryForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        let email = recoveryEmailInput.value.trim();
        
        if (!validateEmail(email)) {
            alert("Please enter a valid email.");
            return;
        }

        alert("If the email is registered, a recovery link has been sent.");
    });

    function validateEmail(email) {
        let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
