function makeAppointment() {
    // Validate the form
    const form = document.getElementById('appointmentForm');
    if (form.checkValidity()) {
        // Generate a random appointment ID
        const appointmentId = Math.floor(Math.random() * 1000000);

        // Get form values
        const hospital = document.getElementById('hospital').value;
        const specialist = document.getElementById('specialist').value;
        const appointmentTime = document.getElementById('appointmentTime').value;
        const charge = document.getElementById('charge').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        // Show the confirmation popup
        document.getElementById('confirmationPopup').style.display = 'flex';

        // Send appointment details to the provided email address
        sendEmail(email, appointmentId, hospital, specialist, appointmentTime, charge, phone);
    } else {
        // Show validation errors
        form.reportValidity();
    }
}

function closePopup() {
    document.getElementById('confirmationPopup').style.display = 'none';
}

function sendEmail(email, appointmentId, hospital, specialist, appointmentTime, charge, phone) {
    // Email sending logic here
    // This example uses a dummy function to simulate email sending
    console.log(`Sending email to ${email}...`);
    console.log(`Appointment ID: ${appointmentId}`);
    console.log(`Hospital: ${hospital}`);
    console.log(`Specialist: ${specialist}`);
    console.log(`Appointment Time: ${appointmentTime}`);
    console.log(`Charge: ${charge}`);
    console.log(`Phone: ${phone}`);

    // In a real application, you would use an email sending service like SendGrid, Mailgun, etc.
}
