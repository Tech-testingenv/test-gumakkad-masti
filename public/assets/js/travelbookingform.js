document.getElementById("enquiryForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Capture the form data
    const newFormData = {
        name: document.getElementById("customername").value,
        email: document.getElementById("customeremail").value,
        mobile: document.getElementById("contact").value,
        destination: document.getElementById("destination").value,
        travelDate: document.getElementById("travelDate").value,
        travelers: document.getElementById("travelers").value,
        packageType: document.getElementById("packageType").value,
        specialRequests: document.getElementById("requests").value || "N/A",
        pageUrl: window.location.href // Capture the current page URL
    };

    console.log(newFormData);

    // Use SMTP.js to send email
    Email.send({
        Host: "smtp.elasticemail.com",
        Port: 2525,
        Username: "Aayush@kanakdrishtiinfo.com",
        Password: "6840A9C5976DEAF5C3E30CA512FA91212D15",
        To: 'Aayush@kanakdrishtiinfo.com',
        From: "Aayush@kanakdrishtiinfo.com",
        Subject: `${newFormData.name} - Booking Inquiry for ${newFormData.destination}`,
        Body: `
            <html>
            <body>
            <h5>Personal Information</h5>
            <p>--------------------</p>
            <h3><b>Name:</b> ${newFormData.name}</h3>
            <h3><b>Email:</b> ${newFormData.email}</h3>
            <h3><b>Mobile:</b> ${newFormData.mobile}</h3>
            <h6>Details Of Services</h6>
            <p>--------------------</p>
            <h3><b>Destination:</b> ${newFormData.destination}</h3>
            <h3><b>Travel Date:</b> ${newFormData.travelDate}</h3>
            <h3><b>Travelers:</b> ${newFormData.travelers}</h3>
            <h3><b>Package Type:</b> ${newFormData.packageType}</h3>
            <h3><b>Special Requests:</b> ${newFormData.specialRequests}</h3>

            <p><a href="${newFormData.pageUrl}" target="_blank">${newFormData.pageUrl}</a>Page UR</p>

         
            </body>
            </html>
        `
    }).then(
        message => {
            if (message === "OK") {
                window.location.href = "/thankyou.html"; // Redirect to Thank You page
                document.getElementById("enquiryForm").reset();
            } else {
                alert("Failed to send email");
            }
        }
    ).catch(error => {
        console.error("Email sending error: ", error);
        alert("There was an error sending the email.");
    });
});
