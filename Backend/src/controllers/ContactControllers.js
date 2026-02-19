import nodemailer from "nodemailer";
import { Contact } from "../models/ContactModel.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, company, serviceInterest, message } = req.body;

    // Validation
    if (!name || !email || !company || !serviceInterest || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save to Database
    const newContact = await Contact.create({
      name,
      email,
      company,
      serviceInterest,
      message,
    });

    // Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send Mail
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Full Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Service Interest:</b> ${serviceInterest}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    return res.status(201).json({
      message: "Message sent successfully!",
      newContact,
    });
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};
