document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("simpan").addEventListener("click", function() {
        var formData = new FormData(document.getElementById("form_rekap"));

        formData.append("jumlah", 1);
  
        // Lakukan fetch ke URL dengan metode POST
        fetch("http://localhost:8080/panen", {
            method: "POST",
            headers: {
                "API_KEY": localStorage.getItem("token") // Sertakan token API di header
            },
            body: formData // Kirim data sebagai FormData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching data: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                console.log(data);
                alert(data.message);
            } else {
                throw new Error('Submit panen gagal: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert("Terjadi kesalahan: " + error.message);
        });
    });
});
