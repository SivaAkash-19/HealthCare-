function makeAppointment() {
    // Validate the form
    const form = document.getElementById('appointmentForm');
    if (form.checkValidity()) {
        // Show the confirmation popup
        document.getElementById('confirmationPopup').style.display = 'flex';
    } else {
        // Show validation errors
        form.reportValidity();
    }
}

function closePopup() {
    document.getElementById('confirmationPopup').style.display = 'none';
}
