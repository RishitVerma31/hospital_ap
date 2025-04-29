// save as buy_medicine.js
document.getElementById('medicineForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload
  
    // Get values from the form
    const patientName = document.getElementById('patientName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const roomNumber = document.getElementById('roomNumber').value;
    const medicineName = document.getElementById('medicineName').value;
  
    // Display result below the form
    const resultDiv = document.getElementById('orderResult');
    resultDiv.innerHTML = `<h3>Order Confirmed!</h3>
      <p><strong>Patient Name:</strong> ${patientName}</p>
      <p><strong>Phone Number:</strong> ${phoneNumber}</p>
      <p><strong>Room Number:</strong> ${roomNumber}</p>
      <p><strong>Medicine Ordered:</strong> ${medicineName}</p>
      <p><em>We will deliver the medicine to Room ${roomNumber} shortly.</em></p>`;
  
    // Optional: Clear the form
    document.getElementById('medicineForm').reset();
  });
  