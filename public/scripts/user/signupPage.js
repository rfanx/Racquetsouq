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

    // Navigate smoothly to signup page
    const signupLink = document.querySelector('.login-subtitle a');
    
    if (signupLink) {
        signupLink.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = '/login'; 
        });
    }
    

    // Handle form submission
    document.getElementById('sign-form').addEventListener("submit",async function (e) {
        e.preventDefault();
        console.log(typeof Swal);
    
        // get input values
        const fstNameId = document.getElementById('firstName').value.trim();
        const secNameId = document.getElementById('lastName').value.trim();
        const emailId = document.getElementById('email').value.trim();
        const phoneId = document.getElementById('phone').value.trim();
        const passId = document.getElementById('password').value;
        const cPassId = document.getElementById('confirmPassword').value;

        // get error msg divs
        const fstName_err = document.getElementById('fstName-err');
        const secName_err = document.getElementById('lstName-err');
        const email_err = document.getElementById('email-err');
        const phone_err = document.getElementById('phNo-err');
        const pass_err = document.getElementById('pass-err');
        const cpass_err = document.getElementById('cPass-err');

        // reset errors
        [fstName_err, secName_err, email_err, phone_err, pass_err, cpass_err].forEach(err => {
            err.textContent = "";
            err.style.display = 'none';
        });

        // Track if the form is valid
        let isValid = true;

        // First name validation
        const namePattern = /^[a-zA-Z\s]+$/;
        if(!fstNameId.match(namePattern)) {
            fstName_err.style.display = 'block';
            fstName_err.textContent = 'Please enter a valid name';
            isValid = false;
        } 
        // else if(!namePattern.test(fstNameId)) {
        //     fstName_err.style.display = 'block';
        //     fstName_err.textContent = 'Name should contain only alphabets and spaces';
        //     fstName_err.style.color = 'red';
        //     isValid = false;
        // } else {
        //     fstName_err.style.display = 'none';
        // }

        // Last name validation
        if(!secNameId.match(namePattern)) {
            secName_err.style.display = 'block';
            secName_err.textContent = 'Please enter a valid name';
            isValid = false;
        } 
        // else if(!namePattern.test(secNameId)) {
        //     secName_err.style.display = 'block';
        //     secName_err.textContent = 'Name should contain only alphabets and spaces';
        //     secName_err.style.color = 'red';
        //     isValid = false;
        // } else {
        //     secName_err.style.display = 'none';
        // }

        // Email Validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(!emailId.match(emailPattern)) {
            email_err.style.display = "block";
            email_err.textContent = "Please enter a valid email";
            email_err.style.color = "red";
            isValid = false;
        } 
        // else {
        //     email_err.style.display = "none";
        // }


        // Phone Validation
        if (!/^\d{10}$/.test(phoneId)) {
            phone_err.style.display = "block";
            phone_err.textContent = "Enter a valid 10-digit phone number";
            isValid = false;
        } 
        // else {
        //     phone_err.style.display = "none";
        // }


        // Password Validation
        const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
        if (!passId.match(passwordPattern)) {
            pass_err.style.display = "block";
            pass_err.textContent =
            "Password must be at least 8 characters long and contain both letters and numbers";
            isValid = false;
        } 
        // else {
        //     pass_err.style.display = "none";
        // }

        // Confirm Password Validation
        if (passId !== cPassId || cPassId === "") {
            cpass_err.style.display = "block";
            cpass_err.textContent = "Passwords do not match";
            isValid = false;
        } 
        // else {
        //     cpass_err.style.display = "none";
        // }


        // Terms checkbox validation
        const termsCheked = document.getElementById('terms').checked;
        if(!termsCheked) {
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'warning',
                title: 'Please agree to the terms and conditions',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
            return;
        }


        // Submit the Form if Valid
        if (isValid) {
            console.log('Form is valid. Submitting...');
            try {
                console.log({ fstNameId, secNameId, emailId, phoneId, passId });
                const response = await fetch("/signup",{
                    method: "POST",
                    headers: { "Content-Type": "application/json"},
                    body:JSON.stringify({
                        firstName: fstNameId, 
                        lastName: secNameId,
                        email: emailId,
                        phone:phoneId,
                        password: passId
                    }),
                });
                console.log('Server response received:',response);

                const result = await response.json()
                console.log('Server result:', result);
                if (!result.success) {
                    Swal.fire({
                        toast: true,
                        position: "top-end",
                        icon: "error",
                        title: "Error!",
                        text: result.message || "An error occurred. Please try again.",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    });
                } else {
                    console.log('Redirecting to home page');
                    window.location.href = '/home';
                }

            } catch (error) {
                console.error("Singup form submition error:", error)
            }
        }
    }); 
});
