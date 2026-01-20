/* ============================
   EMAIL TEMPLATES
   Author: Harshit Kumar
   File: Config/emailTemplate.js
============================ */

/**
 * Small helper to safely replace template variables
 * Prevents undefined replacement issues
 */
const renderTemplate = (template, variables = {}) => {
  let rendered = template;

  for (const key in variables) {
    const safeValue =
      variables[key] !== undefined && variables[key] !== null
        ? variables[key]
        : "";
    rendered = rendered.replaceAll(`{{${key}}}`, safeValue);
  }

  return rendered;
};

/* ============================
   AUTO-REPLY TO USER
============================ */
const SENDER_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You for Contacting</title>
  <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      background: #f9fafb;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: #e2eddf;
      padding: 24px;
      border-radius: 8px;
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.08);
      text-align: center;
    }
    h2 {
      margin-bottom: 12px;
      color: #286f6b;
    }
    p {
      color: #374151;
      font-size: 14px;
      line-height: 1.6;
    }
    .footer {
      margin-top: 22px;
      font-size: 12px;
      color: #6b7280;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Thank You for Reaching Out</h2>
    <p>Hello <strong>{{name}}</strong>,</p>

    <p>
      Thank you for contacting me through my portfolio website.
      I’ve received your message and will get back to you as soon as possible.
    </p>

    <p>
      — Best regards,<br />
      <strong>Harshit Kumar</strong>
    </p>

    <div class="footer">
      <p>This is an automated response from Harshit Kumar's portfolio.</p>
      <p>Please do not reply to this email.</p>
    </div>
  </div>
</body>
</html>
`;

/* ============================
   OWNER NOTIFICATION EMAIL
============================ */
const OWNER_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Portfolio Inquiry</title>
  <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      background: #f9fafb;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: #e2eddf;
      padding: 24px;
      border-radius: 8px;
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
    }
    h2 {
      margin-top: 0;
      color: #286f6b;
    }
    .info {
      margin-bottom: 12px;
    }
    .label {
      font-size: 13px;
      font-weight: bold;
      color: #286f6b;
    }
    .value {
      font-size: 14px;
      color: #111827;
    }
    .message {
      margin-top: 6px;
      padding: 12px;
      background: #f3f4f6;
      border-radius: 6px;
      font-size: 14px;
      line-height: 1.5;
      white-space: pre-wrap;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>📬 New Inquiry from Portfolio</h2>
    <p><strong>Received:</strong> {{timestamp}}</p>

    <div class="info">
      <div class="label">Name</div>
      <div class="value">{{name}}</div>
    </div>

    <div class="info">
      <div class="label">Email</div>
      <div class="value">{{email}}</div>
    </div>

    <div class="info">
      <div class="label">Phone</div>
      <div class="value">{{phone}}</div>
    </div>

    <div class="info">
      <div class="label">Message</div>
      <div class="message">{{message}}</div>
    </div>
  </div>
</body>
</html>
`;

/* ============================
   EXPORTS
============================ */
module.exports = {
  SENDER_EMAIL_TEMPLATE,
  OWNER_EMAIL_TEMPLATE,
  renderTemplate,
};
