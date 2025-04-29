// Navbar Toggle
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navbarMenu = document.getElementById("navbar-menu");
  
    menuToggle.addEventListener("click", function() {
      navbarMenu.classList.toggle("show");
    });
  
    // Booking Form Handling
    const form = document.getElementById("booking-form");
    const testSelect = document.getElementById("test-select");
    const appointmentDate = document.getElementById("appointment-date");
    const statusMessage = document.getElementById("status-message");
  
    form.addEventListener("submit", function(e) {
      e.preventDefault();
  
      const selectedTest = testSelect.value;
      const selectedDate = appointmentDate.value;
  
      if (!selectedTest || !selectedDate) {
        alert("Please fill out all fields before booking.");
        return;
      }
  
      statusMessage.classList.remove("hidden");
      statusMessage.innerHTML = `
        Booking your <strong>${selectedTest}</strong> on <strong>${selectedDate}</strong>...<br>
        Status: Processing request 🕐
      `;
  
      // Simulate processing
      setTimeout(() => {
        statusMessage.innerHTML = `
          ✅ <strong>${selectedTest}</strong> booked for <strong>${selectedDate}</strong>!<br>
          Status: Report will be ready soon.
        `;
      }, 3000);
    });
  });
  