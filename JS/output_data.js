var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:8080/users/panen", true);
xhr.setRequestHeader('API_KEY', localStorage.getItem('token'));

xhr.onreadystatechange = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        var data = JSON.parse(xhr.responseText);

        var array = data.data;

        var table = document.getElementById("tabel-data");
        while (table.rows.length > 1) {
            table.deleteRow(1);
        }

        for (var i = 0; i < array.length; i++) {
            var panen = array[i];
            var row = table.insertRow();
            row.insertCell(0).textContent = panen.tanggal_penanaman;
            row.insertCell(1).textContent = panen.pangan_id;
            row.insertCell(2).textContent = panen.luas_penanaman;
            row.insertCell(3).textContent = panen.tanggal_panen;
            row.insertCell(4).textContent = panen.hasil_panen;
        }
        
        console.log('Data berhasil diambil: ' + data.length + ' data');
        document.getElementById("data-petani").style.display = 'block';


    } else {
        console.error('Gagal mengambil data: ' + xhr.statusText);
    }
};

xhr.onerror = function() {
    console.error('Gagal mengambil data');
}

function tampilkandata() {
    xhr.send();
}

window.onload = function() {
    tampilkandata();
}