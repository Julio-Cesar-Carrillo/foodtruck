const loginForm = document.getElementById("loginForm");
const logoutBtn = document.getElementById("logoutBtn");
const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");


// Login button functionality
loginBtn.addEventListener("click", () => {
    const buttonRect = loginBtn.getBoundingClientRect();
    const modalDialog = document.querySelector('#loginModal .modal-dialog');

    // Establecer la posición del modal (más a la izquierda)
    modalDialog.style.top = buttonRect.top + window.scrollY + 'px';
    modalDialog.style.left = buttonRect.right - 180 + 'px';

    // Mostrar el modal sin el fondo negro
    new bootstrap.Modal(loginModal, {
        backdrop: false
    }).show();
});

// Logout functionality
logoutBtn.addEventListener("click", () => {
    document.getElementById("welcomeMessage").innerHTML = '';
    logoutBtn.style.display = "none";
    loginBtn.style.display = "inline-block";
});

// Cookie alert handler
document.getElementById('acceptCookies').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('cookieAlert').style.display = 'none';
});

// Handle login form submission
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    if (username) {
        document.getElementById("welcomeMessage").innerHTML = 'Bienvenido, ' + username;
        document.getElementById("logoutBtn").style.display = "inline-block";
        loginBtn.style.display = "none";
        const modalInstance = bootstrap.Modal.getInstance(loginModal);
        modalInstance.hide();
        loginForm.reset();
    }
});
