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
                throw new Error('Error mengambil data: ' + response.statusText);
            }
            // Periksa apakah jenis konten respons adalah JSON
            var contentType = response.headers.get('content-type');
            if (contentType && contentType.indexOf('application/json') !== -1) {
                return response.json();
            } else {
                // Jika respons bukan JSON, tangani sesuai kebutuhan
                throw new Error('Format respons tidak terduga: ' + contentType);
            }
        })
        .then(data => {
            // Periksa apakah login berhasil
            if (data.success) {
                // Simpan token ke penyimpanan lokal
                localStorage.setItem('token', data.api_key);
                
                // Redirect ke dashboard
                window.location.href = 'Dashboard.html';
            } else {
                throw new Error('Login gagal: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error mengambil data:', error);
        });
});