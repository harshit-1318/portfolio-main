const createTransporter = require("../Config/nodemailer");
const Query = require("../model/query");
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

    if (typeof message !== "string" || message.trim().length < 10) {
      return res.status(400).json({
        success: false,
        message: "Message must be at least 10 characters long.",
      });
    }

    // ================= SAVE TO DB =================
    const savedQuery = await Query.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      country: countryCode.trim(),
      contact: contact.trim(),
      message: message.trim(),
    });

    // ================= RESPONSE =================
    res.status(201).json({
      success: true,
      message: "Your message has been sent successfully.",
    });

    // ================= EMAIL (BACKGROUND TASK) =================
    setImmediate(async () => {
      try {
        if (!process.env.SENDER_MAIL) {
          console.warn("⚠️ SENDER_MAIL not set. Email skipped.");
          return;
        }

        const transporter = createTransporter();
        const timestamp = new Date().toUTCString();

        // Owner notification
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

        // Auto reply to sender
        await transporter.sendMail({
          from: `"Harshit Kumar" <${process.env.SENDER_MAIL}>`,
          to: email,
          subject: "Thanks for contacting me!",
          html: renderTemplate(SENDER_EMAIL_TEMPLATE, { name }),
        });

        console.log("✅ Emails sent successfully");
      } catch (err) {
        console.error("❌ Email sending failed:", err.message);
      }
    });
  } catch (error) {
    console.error("❌ Query controller error:", error);

    // Fail-safe response
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};
