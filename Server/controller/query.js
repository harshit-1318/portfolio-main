const createTransporter = require("../Config/nodemailer");
const Query = require("../model/Query");
const {
  SENDER_EMAIL_TEMPLATE,
  OWNER_EMAIL_TEMPLATE,
  renderTemplate,
} = require("../Config/emailTemplate");

module.exports.query = async (req, res) => {
  try {
    const { name, email, countryCode, contact, message } = req.body;

    // ================= VALIDATION =================
    if (!name || !email || !countryCode || !contact || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    if (message.length < 10) {
      return res.status(400).json({
        success: false,
        message: "Message must be at least 10 characters long.",
      });
    }

    // ================= SAVE TO DB =================
    await Query.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      country: countryCode.trim(),
      contact: contact.trim(),
      message: message.trim(),
    });

    // ✅ SEND RESPONSE FIRST (IMPORTANT)
    res.status(201).json({
      success: true,
      message: "Your message has been sent successfully.",
    });

    // ================= EMAIL (BACKGROUND) =================
    (async () => {
      try {
        const transporter = createTransporter();
        const timestamp = new Date().toUTCString();

        // Owner mail
        await transporter.sendMail({
          from: `"Harshit Kumar" <${process.env.SENDER_MAIL}>`,
          to: process.env.SENDER_MAIL,
          replyTo: email,
          subject: `📬 New Portfolio Inquiry from ${name}`,
          html: renderTemplate(OWNER_EMAIL_TEMPLATE, {
            name,
            email,
            phone: `${countryCode} ${contact}`,
            message,
            timestamp,
          }),
        });

        // Auto reply
        await transporter.sendMail({
          from: `"Harshit Kumar" <${process.env.SENDER_MAIL}>`,
          to: email,
          subject: "Thanks for contacting me!",
          html: renderTemplate(SENDER_EMAIL_TEMPLATE, { name }),
        });

        console.log("✅ Emails sent successfully");
      } catch (err) {
        console.error("❌ Email failed (ignored):", err.message);
      }
    })();
  } catch (error) {
    console.error("❌ Query error:", error);
  }
};
