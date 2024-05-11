document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('form');

  form.addEventListener('submit', function(e) {
      e.preventDefault();

      var formData = new FormData(form);

      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'proses_rekap.php'); // Ganti dengan alamat URL tempat Anda memproses data di server
      xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest.DONE) {
              if (xhr.status === 200) {
                  console.log(xhr.responseText);
                  alert('Data berhasil disimpan di server');
              } else {
                  console.error(xhr.responseText);
                  alert('Terjadi kesalahan saat menyimpan data');
              }
          }
      };

      xhr.send(formData);
  });
});
