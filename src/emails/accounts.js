const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "cyongchoi@gmail.com",
    subject: "Thank you for joining in",
    text: `Welcome to the app ${name} , let me know what you think of this app`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "cyongchoi@gmail.com",
    subject: "Thank you for joining in",
    text: `Goodybye ${name} , I hope we see you again`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
