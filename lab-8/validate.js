document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        const firstName = sanitizeInput(document.getElementById('firstName').value);
        const lastName = sanitizeInput(document.getElementById('lastName').value);
        const email = sanitizeInput(document.getElementById('email').value);
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Basic validation
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            alert("All fields must be filled!");
            event.preventDefault();
            return;
        }

        // Email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
        }

        // Password matching
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            event.preventDefault();
            return;
        }
    });

    // Simple sanitization function to prevent XSS
    function sanitizeInput(str) {
        const temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
    }
});
