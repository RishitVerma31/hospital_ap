// bill.js

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('bill-form');
  const diseaseType = document.getElementById('disease-type');
  const stayDays = document.getElementById('stay-days');
  const billOutput = document.getElementById('bill-output');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const selectedOption = diseaseType.options[diseaseType.selectedIndex];
    const basePrice = parseInt(selectedOption.getAttribute('data-base-price'));
    const days = parseInt(stayDays.value);

    if (isNaN(basePrice) || isNaN(days) || days <= 0) {
      billOutput.innerHTML = `<strong>Please select a valid disease and stay days!</strong>`;
      billOutput.classList.remove('hidden');
      return;
    }

    // Calculate total bill
    const totalBill = basePrice + (days * 200); // Assuming ₹200 per day stay charges

    // Display the bill
    billOutput.innerHTML = `
      <h3>Bill Summary</h3>
      <p><strong>Disease:</strong> ${selectedOption.value}</p>
      <p><strong>Base Test Price:</strong> ₹${basePrice}</p>
      <p><strong>Stay Charges:</strong> ₹${days * 200} (₹200 x ${days} days)</p>
      <p><strong>Total Amount Payable:</strong> ₹${totalBill}</p>
    `;
    billOutput.classList.remove('hidden');
  });
});
