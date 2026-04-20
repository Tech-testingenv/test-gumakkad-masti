







document.getElementById("enquiryForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Capture the form data
    const newFormData = {
        name: document.querySelector("input[name='name']").value,
        email: document.querySelector("input[name='email']").value,
        mobile: document.querySelector("input[name='phone']").value,
        country: document.querySelector("input[name='country']").value,
        fromDate: document.querySelector("input[name='fromDate']").value,
        travelDate: document.querySelector("input[name='toDate']").value,
        travelers: document.querySelector("input[name='persons']").value,
        itinerary: document.querySelector("textarea[name='itinerary']").value || "N/A",
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
        Subject: `${newFormData.name} - Booking Inquiry from ${newFormData.country}`,
        Body: `
            <html>
            <body>
            <h2>Personal Information</h2>
            <p>--------------------</p>
            <h3><b>Name:</b> ${newFormData.name}</h3>
            <h3><b>Email:</b> ${newFormData.email}</h3>
            <h3><b>Mobile:</b> ${newFormData.mobile}</h3>
            <h3><b>Country:</b> ${newFormData.country}</h3>

            <h1>Travel Details</h1>
            <p>--------------------</p>
            <h3><b>From Date:</b> ${newFormData.fromDate}</h3>
            <h3><b>To Date:</b> ${newFormData.travelDate}</h3>
            <h3><b>Number of Persons:</b> ${newFormData.travelers}</h3>
            <h3><b>Tour Itinerary:</b> ${newFormData.itinerary}</h3>

            <h2>Page URL:</h2>
            <p><a href="${newFormData.pageUrl}" target="_blank">${newFormData.pageUrl}</a></p>

            <h2>Thanks & Regards</h2>
            <h3>Ayush Rupam</h3>
            <h3>Address: A-88 Sector -4 Noida, G.B Nagar, Uttar Pradesh 201301</h3>
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




// cars index page  query Form


