document.addEventListener('DOMContentLoaded', () => {
    const adminLoginForm = document.getElementById('adminLoginForm');
    const adminPassword = document.getElementById('adminPassword');
    const passwordToggle = document.querySelector('.password-toggle');
    
    // Password visibility toggle
    passwordToggle.addEventListener('click', () => {
        const type = adminPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        adminPassword.setAttribute('type', type);
        passwordToggle.classList.toggle('fa-eye');
        passwordToggle.classList.toggle('fa-eye-slash');
    });

    // Form submission handler
    adminLoginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const loginBtn = document.querySelector('.login-btn');
        const originalBtnText = loginBtn.innerHTML;
        
        try {
            // Show loading state
            loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing in...';
            loginBtn.disabled = true;

            // TODO: Replace with your actual admin authentication endpoint
            const response = await fetch('/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: document.getElementById('adminEmail').value,
                    password: adminPassword.value,
                    rememberMe: document.getElementById('rememberMe').checked
                })
            });

            if (response.ok) {
                window.location.href = '/admin/dashboard';
            } else {
                alert('Invalid credentials');
            }
        } catch (error) {
            alert('Network error. Please try again.');
        } finally {
            loginBtn.innerHTML = originalBtnText;
            loginBtn.disabled = false;
        }
    });
});
