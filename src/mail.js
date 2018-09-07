const nodemailer = require('nodemailer');

const sendMail = (data) => {
    console.log('sendMail message', data);
    const transporter = nodemailer.createTransport(
        {
            service: 'gmail',
            auth: {
                user: 'ricas07@gmail.com',
                pass: 'Asdfni83gM',
            },
        },
        // {
        //     host: 'smtp.gmail.com',
        //     port: 993,
        //     secure: true,
        //     auth: {
        //         user: 'ricas07@gmail.com',
        //         pass: 'Asdfni83gM',
        //     },
        //     logger: false,
        //     debug: false, // include SMTP traffic in the logs
        // },
        // {
        //     // default message fields

        //     // sender info
        //     from: 'E-Z Auto <ezauto@gmail.com>',
        //     headers: {
        //         'X-Laziness-level': 1000 // just an example header, no need to use this
        //     },
        // },
    );
    const message = {
        // Comma separated list of recipients
        to: 'ricas07@gmail.com, ezautoins@gmail.com ',

        // Subject of the message
        subject: 'This is a test, bitch!',

        // plaintext body
        text: `${data.firstName} ${data.lastName} ${data.email} ${data.message}`,

        // HTML body
        html:
            `<p>You have a new quote request. Get to it, bitch!</p>
            <p>First Name: ${data.firstName}</p>
            <p>Last Name: ${data.lastName}</p>
            <p>Email: ${data.email}</p>
            <p>Message: ${data.message}</p>`,
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
