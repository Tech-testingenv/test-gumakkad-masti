import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const data = await req.json();

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || "mail.ghumakkarmasti.in",
            port: parseInt(process.env.EMAIL_PORT || "465"),
            secure: true, 
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Ghumakkar Masti" <${process.env.EMAIL_USER}>`,
            to: "booking@ghumakkarmasti.in",
            subject: `New ${data.form_type}`,
            html: `
        <h2>New Enquiry</h2>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Pickup:</b> ${data.pickup}</p>
        <p><b>Date:</b> ${data.date}</p>

        ${data.destination ? `<p><b>Destination:</b> ${data.destination}</p>` : ""}
        ${data.travelers ? `<p><b>Travelers:</b> ${data.travelers}</p>` : ""}
        ${data.packageType ? `<p><b>Package:</b> ${data.packageType}</p>` : ""}
        ${data.car ? `<p><b>Car:</b> ${data.car}</p>` : ""}
        ${data.duration ? `<p><b>Duration:</b> ${data.duration}</p>` : ""}

        <p><b>Message:</b> ${data.message || "No message"}</p>
      `,
        });

        return Response.json({
            success: true,
            message: "Email sent"
        });

    } catch (error) {
        console.error("EMAIL SEND ERROR:", error);

        return Response.json({
            success: false,
            message: error.message || "Failed to send email"
        }, { status: 500 });
    }
}