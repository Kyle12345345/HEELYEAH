document.addEventListener('DOMContentLoaded', function () {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior
            localStorage.clear(); // Clear all localStorage (including shipping info)
            window.location.href = '/logout'; // Redirect to your actual Flask logout route
        });
    }
});
