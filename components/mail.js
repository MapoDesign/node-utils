const mailer = require("nodemailer");
const trasporter = mailer.createTransport({
  host: "mail.mapodesign.com", // SMTP server in uscita
  port: 465, // Porta SMTP SSL
  secure: true, // Usa SSL
  auth: {
    user: "user@gmail.com", // Replace with your email address
    pass: "password", // Replace with your email password
  },
});

const mailOptions = {
  to: "user@gmail.com", // Replace with the recipient's email address
  subject: "Test Email",
  text: "This is a test email sent using Node.js and Nodemailer.",
  attachments: [
    {
      path: "path/to/your/file.txt", // Replace with the path to your file
    },
    {
      path: "path/to/your/file2.txt", // Replace with the path to your file
    },
  ],
};

trasporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(`Error sending email: ${error}`);
  } else console.log(`Email sent: ${info.response}`);
});
