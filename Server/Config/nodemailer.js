const nodemailer = require("nodemailer");

const createTransporter = () => {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    throw new Error("SMTP credentials not configured");
  }

  return nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false, // TLS
    auth: {
      user: process.env.SMTP_USER,       // apikey
      pass: process.env.SMTP_PASSWORD,   // Brevo API Key
    },
  });
};

module.exports = createTransporter;
