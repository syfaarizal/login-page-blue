document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const container = document.getElementById('container');
    const goToLogin = document.getElementById('goToLogin');
    const goToSignup = document.getElementById('goToSignup');
    const signInButton = document.getElementById('signInButton');
    const signUpButton = document.getElementById('signUpButton');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const toggleLoginPassword = document.getElementById('toggleLoginPassword');
    const toggleSignupPassword = document.getElementById('toggleSignupPassword');
    const loginPassword = document.getElementById('loginPassword');
    const signupPassword = document.getElementById('signupPassword');
    const forgotPassword = document.getElementById('forgotPassword');
    
    // Toggle between login and signup forms
    goToLogin.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
    });
            
    goToSignup.addEventListener('click', () => {
        container.classList.add('right-panel-active');
    });
    
    signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
    });
            
    signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
    });
            
    // Toggle password visibility
    toggleLoginPassword.addEventListener('click', function() {
        const type = loginPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        loginPassword.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
            
    toggleSignupPassword.addEventListener('click', function() {
        const type = signupPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        signupPassword.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
            
    // Form submission handling
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Simple validation
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
                
        // In a real application, you would send this data to a server
        console.log('Login attempt:', { email, password });
        alert('Login successful! (This is a demo)');
                
        // Reset form
        loginForm.reset();
    });
            
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('signupUsername').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
                
        // Simple validation
        if (!username || !email || !password) {
            alert('Please fill in all fields');
            return;
        }
                
        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }
                
        // In a real application, you would send this data to a server
        console.log('Signup attempt:', { username, email, password });
        alert('Signup successful! (This is a demo)');
            
        // Reset form and go to login
        signupForm.reset();
        container.classList.remove('right-panel-active');
    });
            
    // Forgot password handling
    forgotPassword.addEventListener('click', function() {
        const email = prompt('Please enter your email to reset password:');
        if (email) {
            // In a real application, you would send a reset email
            console.log('Password reset requested for:', email);
            alert('If an account exists with this email, you will receive a password reset link. (This is a demo)');
        }
    });
            
    // Mobile toggle form visibility
    if (window.innerWidth <= 768) {
        // Add mobile-specific toggle buttons
        const loginContainer = document.querySelector('.login-container');
        const signupContainer = document.querySelector('.sign-up-container');
        
        const loginToggle = document.createElement('div');
        loginToggle.className = 'toggle-form';
        loginToggle.innerHTML = '<p>Create An Account <a id="mobileGoToSignup">Sign Up</a></p>';
        loginContainer.appendChild(loginToggle);
                
        const signupToggle = document.createElement('div');
        signupToggle.className = 'toggle-form';
        signupToggle.innerHTML = '<p>Already Have Account? <a id="mobileGoToLogin">Login</a></p>';
        signupContainer.appendChild(signupToggle);
                
        // Add event listeners for mobile toggles
        document.getElementById('mobileGoToSignup').addEventListener('click', () => {
            signupContainer.style.display = 'flex';
            loginContainer.style.display = 'none';
        });
                
        document.getElementById('mobileGoToLogin').addEventListener('click', () => {
            signupContainer.style.display = 'none';
            loginContainer.style.display = 'flex';
        });
                
        // Initially hide signup form on mobile
        signupContainer.style.display = 'none';
    }
});