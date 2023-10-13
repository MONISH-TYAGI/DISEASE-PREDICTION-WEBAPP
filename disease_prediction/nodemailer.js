"use strict";
const nodemailer = require("nodemailer");
module.exports.sendMail=async function(str,data){
    const number=parseInt(data.percentage,10);
    
const transporter = nodemailer.createTransport({
  host:  "smtp.gmail.com",
  port: 587,
  secure: false, //true for 465 port, false for other ports
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'tyagimonish5770@gmail.com',
    pass: 'nbamjdlahwyuhjlk'
  }
});

// async..await is not allowed in global scope, must use a wrapper
let eSubj,eHtml;
if(number<50){
  // send mail with defined transport object
  eSubj=  ` Brain Tumor Report `;
  eHtml=
    `<h1>Your Brain Tumor MRI Report </h1>    
    Brain Tumor is not detected in your report.
    
    Thankyou for using our service
    `
}else
{

    eSubj=  ` Brain Tumor Report `;
  eHtml=
    `<h1>Your Brain Tumor MRI Report </h1>    
    Brain Tumor is detected in your report with ${number}% damage
    Thankyou for using our service
    `
}

  let info = await transporter.sendMail({
    from: '<DiseasePredictionWebApp@gmail.com>', // sender address
    to: data.email, // list of receivers
    subject: eSubj, // Subject line
    // text: "Hello world?", // plain text body
    html: eHtml, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}
