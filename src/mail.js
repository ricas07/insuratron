const nodemailer = require('nodemailer');

const sendMail = (data) => {
    const transporter = nodemailer.createTransport(
        {
            service: 'gmail',
            auth: {
                user: 'ezautoquotebot@gmail.com',
                pass: process.env.EMAIL_PASSWORD,
            },
        },
    );
    const firstLine ='<p>You have a new quote request. Get to it, bitch!</p>';
    const html = Object.keys(data).reduce((message, field) => message.concat(`<p>${field}: ${data[field]}</p>`), firstLine);

    const message = {
        // Comma separated list of recipients
        to: 'ricas07@gmail.com, ezautoins@gmail.com ',

        // Subject of the message
        subject: `Quote request from ${data.firstName} ${data.lastName}`,

        // plaintext body
        text: 'You have a new quote request. Get to it, bitch!',

        // HTML body
        html,
    };

    transporter.sendMail(message, (error, info) => {
        if (error) {
            console.log('Error occurred');
            console.log(error.message);
            return process.exit(1);
        }

        console.log('Message sent successfully!');
        console.log(nodemailer.getTestMessageUrl(info));

        // only needed when using pooled connections
        transporter.close();
    });
};

module.exports = sendMail;
