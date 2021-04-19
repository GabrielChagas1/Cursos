import nodemailer, { Transporter } from 'nodemailer';
import {resolve} from 'path';
import handlebars from 'handlebars';
import fs from 'fs';

class SendMailService {
    client: Transporter;

    constructor() {
        nodemailer.createTestAccount().then((account) => {
            this.client = nodemailer.createTransport({
                host: account.smtp.host,
                port: account.smtp.port,
                secure: account.smtp.secure,
                auth: {
                    user: account.user,
                    pass: account.pass
                },
                tls: {
                    rejectUnauthorized: false
                }
            });
        });
    }

    async execute(to: string, subject: string, variables: object, path: string) {

        // lendo o que tem dentro do arquivo.
        let templateFileContent = fs.readFileSync(path).toString("utf8");

        // compilando o código handlebars
        let mailTemplateParse = handlebars.compile(templateFileContent);

        // parseando o email
        let html = mailTemplateParse(variables)

        // montando a mensagem
        const message = await this.client.sendMail({
            to,
            subject,
            html,
            from: 'NPS <noreplay@nps.com.br>'
        });

        console.log(message.messageId);
        console.log(nodemailer.getTestMessageUrl(message));
    }
}

export default new SendMailService();