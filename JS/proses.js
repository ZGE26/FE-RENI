document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var form = event.target;
    var data = new URLSearchParams();
    for (const pair of new FormData(form)) {
        data.append(pair[0], pair[1]);
    }

    var apiUrl = 'http://localhost:8080/users/login';
    var requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
    };

    fetch(apiUrl, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Gagal melakukan permintaan');
            }
            return response.json();
        })
        .then(data => {
            localStorage.setItem('token', data.token);
            if (data.success) {
                window.location.href = 'Dasboard.html';
            }
        })
        .catch(error => {
            console.error('Terjadi kesalahan:', error);
        });
});
