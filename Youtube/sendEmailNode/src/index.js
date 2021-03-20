const nodemailer = require('nodemailer');

const SMTP_CONFIG = require('./config/smtp')


const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth:{
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass
    },
    tls:{
        rejectUnauthorized: false,
    }
});


async function send(){
    const mailSent = await transporter.sendMail({
        text: "Texto do Email",
        subject: "Assunto do Email",
        from: "Gabriel Chagas <gabrielserq@gmail.com>",
        to: ["gabrielserq@gmail.com", "gabrielserq@gmail.com"]
    });

    console.log(mailSent);
}


send();