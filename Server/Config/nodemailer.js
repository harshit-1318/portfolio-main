/* ============================
   NODEMAILER CONFIG (BREVO)
   Author: Harshit Kumar
   File: Config/nodemailer.js
============================ */

const nodemailer = require("nodemailer");

/**
 * Validate required SMTP environment variables
 */
const validateEnv = () => {
  const requiredVars = ["SMTP_USER", "SMTP_PASSWORD"];

  const missing = requiredVars.filter((key) => !process.env[key]);

  if (missing.length) {
    throw new Error(
      `Missing SMTP environment variables: ${missing.join(", ")}`
    );
  }
};

/**
 * Create and return Nodemailer transporter
 */
const createTransporter = () => {
  validateEnv();

  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false, // true only for 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      // Brevo sometimes needs this on shared hosts
      rejectUnauthorized: false,
    },
    pool: true, // better performance for multiple mails
    maxConnections: 3,
    maxMessages: 50,
  });

  return transporter;
};

module.exports = createTransporter;
