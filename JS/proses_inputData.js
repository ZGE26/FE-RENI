const rekapForm = document.getElementById("rekap");
const tanggalInput = document.getElementById("tanggal");
const jenisInput = document.getElementById("jenis");
const luasInput = document.getElementById("luas");
const hasilInput = document.getElementById("hasil");
const tanggalPanen = document.getElementById("panen");
const submitButton = document.querySelector("#rekap button[type='submit']");

submitButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default form submission

  const formData = {
    tanggal: tanggalInput.value,
    jenis: jenisInput.value,
    luas: luasInput.value,
    hasil: hasilInput.value,
    hasil2: hasilInput2.value,
  };

  // Send AJAX request to submit the form data
  fetch('submit_rekap.php', {
    method: 'POST', // Use POST for submitting form data
    headers: {
      'Content-Type': 'application/json' // Set content type as JSON
    },
    body: JSON.stringify(formData) // Convert form data to JSON string
  })
    .then(response => response.json()) // Parse JSON response
    .then(data => {
      // Handle successful response
      if (data.success) {
        console.log('Data berhasil disimpan!');
        // Clear the form fields
        tanggalInput.value = '';
        jenisInput.value = '';
        luasInput.value = '';
        hasilInput.value = '';
        hasilInput2.value = '';
      } else {
        console.error('Gagal menyimpan data:', data.error);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
