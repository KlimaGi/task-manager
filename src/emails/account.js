require("dotenv").config();
const sgMail = require("@sendgrid/mail");

const sendgridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
  to: "giedre.klima@gmail.com",
  from: "giedre.klima@gmail.com",
  subject: "This is my first creation!",
  text: "I hope this one actually gets to you.",
});
