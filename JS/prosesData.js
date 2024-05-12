// Function to fetch and display data
function fetchData(dataType) {
    const url = "/panen"; 
    const dataElement = document.getElementById("data-petani");
    const targetSection = dataElement.querySelector(`.data-${dataType}`);
  
    fetch(url, {
      method: "POST" 
    })
      .then(response => response.json())
      .then(data => {
        // Clear existing content (optional)
        targetSection.querySelector("tbody").innerHTML = "";
  
        // Loop through fetched data and build table rows
        data.forEach(record => {
          const tableRow = document.createElement("tr");
          tableRow.innerHTML = `
            <td>${record.tanggal}</td>
            <td>${record.nama_tanaman}</td>
            <td>${record.luas_penanaman}</td>
            <td>${record.tanggal_panen}</td>
            <td>${record.hasil}</td>
          `;
          targetSection.querySelector("tbody").appendChild(tableRow);
        });
  
        dataElement.style.display = "block";
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }
  
  fetchData("pangan");
  fetchData("perkebunan");
  