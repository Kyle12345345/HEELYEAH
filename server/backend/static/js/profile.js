document.addEventListener('DOMContentLoaded', function () {
    const usernameElement = document.getElementById('username');
    const logoutBtn = document.getElementById('logoutBtn');

    if (!usernameElement.textContent.trim()) {
        window.location.href = '/login'; // Redirect to login page if no username found.
    }

    logoutBtn.addEventListener('click', function () {
        fetch('/logout', {
            method: 'GET',
            credentials: 'same-origin'
        })
        .then(response => {
            if (response.ok) {
                window.location.href = '/login';
            } else {
                alert('Logout failed, please try again.');
            }
        })
        .catch(err => {
            console.error('Logout Error:', err);
            alert('There was an error logging out.');
        });
    });
});
