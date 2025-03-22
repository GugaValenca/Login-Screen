function showError(message, elementId) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

// Function to clear error messages
function clearError(elementId) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = '';
}

// Function to display success message
function showSuccess(message) {
    const successElement = document.getElementById('emailConfirmationMessage');
    successElement.textContent = message;
}

// Function to validate the form
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let isValid = true;

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
        showError('Please enter a valid email address.', 'emailError');
        isValid = false;
    } else {
        clearError('emailError');
    }

    // Password validation
    if (!password) {
        showError('Password is required.', 'passwordError');
        isValid = false;
    } else {
        clearError('passwordError');
    }

    if (isValid) {
        // Simulating registration process
        // Here, you would normally send data to the backend for storage
        showSuccess('Email confirmation sent! Please check your inbox.');

        // Example API call to backend (you can uncomment the code below for actual use)
        /*
        fetch('/register', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
        */
    }
});

// Forgot password link
document.getElementById('forgotPasswordLink').addEventListener('click', function() {
    alert('Redirecting to password recovery...');
});