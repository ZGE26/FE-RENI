document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var form = event.target;

    var formData = new FormData(form);

    var apiUrl = 'http://localhost:8080/users/login';
    var requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData)
    };

    fetch(apiUrl, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Gagal melakukan permintaan: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                localStorage.setItem('token', data.api_key);
                window.location.href = 'Dasboard.html';
            } else {
                throw new Error('Login gagal: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Terjadi kesalahan:', error);
        });
});
