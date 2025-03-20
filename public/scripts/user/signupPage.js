document.addEventListener('DOMContentLoaded', function() {
    // Get all password toggle icons
    const togglePasswordIcons = document.querySelectorAll('.toggle-password');
    
    // Add click event to each password toggle icon
    togglePasswordIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const input = this.previousElementSibling.previousElementSibling;
            
            // Toggle password visibility
            if (input.type === 'password') {
                input.type = 'text';
                this.classList.remove('fa-eye-slash');
                this.classList.add('fa-eye');
            } else {
                input.type = 'password';
                this.classList.remove('fa-eye');
                this.classList.add('fa-eye-slash');
            }
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        const signupLink = document.querySelector('.login-subtitle a');
    
        if (signupLink) {
            signupLink.addEventListener('click', (event) => {
                event.preventDefault();
                window.location.href = '/login'; // Navigate smoothly to signup page
            });
        }
    });
    

    // Handle form submission
    const signupForm = document.querySelector('.signup-form');
    signupForm.addEventListener('submit', function(e) {
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Log form data (for demonstration)
        console.log('Form submitted:', data);
        
        // Here you would typically send the data to your server
        // Since no validation is needed, we're just logging the data
    });
});
