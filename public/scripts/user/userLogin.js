document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.querySelector('#password');

    // Toggle password visibility
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Toggle eye icon
        const icon = togglePassword.querySelector('i');
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const signupLink = document.querySelector('.login-subtitle a');

    if (signupLink) {
        signupLink.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = '/signup'; // Navigate smoothly to signup page
        });
    }
});

