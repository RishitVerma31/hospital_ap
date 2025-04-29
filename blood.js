const diseaseSelect = document.getElementById('disease');
const diseaseDetailsContainer = document.getElementById('diseaseDetailsContainer');
const donationForm = document.getElementById('donationForm');
const formMessage = document.getElementById('formMessage');

diseaseSelect.addEventListener('change', function () {
  diseaseDetailsContainer.style.display = this.value === 'Yes' ? 'block' : 'none';
});

donationForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const donorData = {
    name: donationForm.name.value,
    age: donationForm.age.value,
    phone: donationForm.phone.value,
    email: donationForm.email.value,
    bloodType: donationForm.bloodType.value,
    previousDisease: donationForm.disease.value,
    diseaseDetails: donationForm.diseaseDetails.value || 'None'
  };

  console.log('Donor Data:', donorData);

  formMessage.textContent = 'Thank you for registering! We will contact you shortly.';
  donationForm.reset();
  diseaseDetailsContainer.style.display = 'none';
});
