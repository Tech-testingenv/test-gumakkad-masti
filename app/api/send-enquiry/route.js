import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: "mail.ghumakkarmasti.in",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Ghumakkar Masti" <booking@ghumakkarmasti.in>`,
      to: "booking@ghumakkarmasti.in",
      subject: `New ${data.form_type}`,

      html: `
        <h2>New Enquiry Received</h2>

        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Pickup:</strong> ${data.pickup}</p>
        <p><strong>Date:</strong> ${data.date}</p>

        ${data.destination ? `<p><strong>Destination:</strong> ${data.destination}</p>` : ""}
        ${data.travelers ? `<p><strong>Travelers:</strong> ${data.travelers}</p>` : ""}
        ${data.packageType ? `<p><strong>Package:</strong> ${data.packageType}</p>` : ""}
        ${data.car ? `<p><strong>Car:</strong> ${data.car}</p>` : ""}
        ${data.duration ? `<p><strong>Duration:</strong> ${data.duration}</p>` : ""}
        ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ""}
      `,
    });

    return Response.json({
      success: true,
      message: "Email sent successfully"
    });

  } catch (error) {
    console.error("EMAIL SEND ERROR:", error);

    return Response.json(
      {
        success: false,
        message: error.message || "Failed to send email",
      },
      { status: 500 }
    );
  }
}
