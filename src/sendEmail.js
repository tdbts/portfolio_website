var nodemailer = require('nodemailer'), 
    sanitizeString = require('./sanitizeString'), 
    testEmailAddressString = require('./testEmailAddressString');

module.exports = function (inputObj, req, res) {

    var firstName = sanitizeString(inputObj.firstName), 
        lastName = sanitizeString(inputObj.lastName), 
        email = inputObj.email, 
        comments = sanitizeString(inputObj.comments);

    if (!firstName || !lastName || !email || !comments || !testEmailAddressString(email)) {
        res.end("Sorry, there were errors found in the form you submitted.");
    }

    // create reusable transporter object using SMTP transport
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'VinnySanchez87@gmail.com',
            pass: process.env.GMAIL_PWD
        }
    });

    // NB! No need to recreate the transporter object. You can use
    // the same transporter object for all e-mails

    var emailText = "From: " + firstName + " " + lastName + "\n" + 
        "Email: " + email + "\n" + 
        "Comments: " + comments;

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: firstName + " " + lastName + " <" + email + ">", // sender address
        to: "VinnySanchez87@gmail.com", // list of receivers
        subject: "New Message From a Visitor to Your Homepage", // Subject line
        text: emailText // plaintext body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            res.end("There was an error sending the email: ", error);
        }else{
            res.end("Message sent: " + info.response);
        }
    });

};
