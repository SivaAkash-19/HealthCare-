function makeAppointment() {
    const doctorName = document.getElementById('doctorName').value;
    const appointmentCharge = document.getElementById('appointmentCharge').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;
    const paymentProof = document.getElementById('paymentProof').files[0];
    const cardDetails = document.getElementById('cardDetails').value;

    if (!doctorName || !appointmentCharge || !whatsapp || !appointmentDate || !appointmentTime || (!paymentProof && !cardDetails)) {
        alert("Please fill in all fields and provide either payment proof or card details.");
        return;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p><strong>Appointment Confirmed!</strong></p>
        <p>Doctor: ${doctorName}</p>
        <p>Charge: ${appointmentCharge}</p>
        <p>Date: ${appointmentDate}</p>
        <p>Time: ${appointmentTime}</p>
        <p>WhatsApp: ${whatsapp}</p>
    `;

    sendAppointmentDetailsToEmail(doctorName, appointmentCharge, whatsapp, appointmentDate, appointmentTime);
}

function sendAppointmentDetailsToEmail(doctorName, appointmentCharge, whatsapp, appointmentDate, appointmentTime) {
    const appointmentId = Math.floor(Math.random() * 1000000);
    const emailAddress = "user@example.com"; // Replace with the user's email address

    const emailBody = `
        Appointment ID: ${appointmentId}
        Doctor: ${doctorName}
        Charge: ${appointmentCharge}
        Date: ${appointmentDate}
        Time: ${appointmentTime}
        WhatsApp: ${whatsapp}
    `;

    console.log(`Sending email to ${emailAddress} with body: ${emailBody}`);

    // Simulate sending email (replace with actual email sending logic)
    setTimeout(() => {
        alert("Appointment details sent to your email.");
    }, 1000);
}
