// Enquiry form open on click
function toggleModal() {
    document.getElementById('queryModal').classList.toggle('hidden');
    }



document.getElementById("carsindexpagedata").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const formData = {
        name: document.querySelector("input[name='name']").value,
        email: document.querySelector("input[name='email']").value,
        mobile: document.querySelector("input[name='phone']").value,
        country: document.querySelector("input[name='country']").value,
        vehicle: document.querySelector("select[name='vehicle']").value,
        adults: document.querySelector("input[name='adults']").value,
        children: document.querySelector("input[name='children']").value,
        requirements: document.querySelector("textarea[name='requirements']").value || "N/A",
        pageUrl: window.location.href
    };

    const emailBody = `
        <h2>Personal Information</h2>
        <p>--------------------</p>
        <h3><b>Name:</b> ${formData.name}</h3>
        <h3><b>Email:</b> ${formData.email}</h3>
        <h3><b>Mobile:</b> ${formData.mobile}</h3>
        <h3><b>Country:</b> ${formData.country}</h3>
        <h3><b>Vehicle:</b> ${formData.vehicle}</h3>
        <h3><b>Adults:</b> ${formData.adults}</h3>
        <h3><b>Children:</b> ${formData.children}</h3>
        <h3><b>Requirements:</b> ${formData.requirements}</h3>
        <h2>Page URL:</h2>
        <p><a href="${formData.pageUrl}" target="_blank">${formData.pageUrl}</a></p>
    `;

    Email.send({
        Host: "smtp.elasticemail.com",
        Port: 2525,
        Username: "Aayush@kanakdrishtiinfo.com",
        Password: "6840A9C5976DEAF5C3E30CA512FA91212D15",
        To: 'Aayush@kanakdrishtiinfo.com',
        From: "Aayush@kanakdrishtiinfo.com",
        Subject: `${formData.name} - Booking Inquiry from ${formData.country}`,
        Body: emailBody
    }).then(message => {
        if (message === "OK") {
            window.location.href = "/thankyou.html";  // Redirect after success
            document.getElementById("carsindexpagedata").reset();
        } else {
            alert("Failed to send email");
        }
    }).catch(error => {
        console.error("Email sending error: ", error);
        alert("There was an error sending the email.");
    });
});



