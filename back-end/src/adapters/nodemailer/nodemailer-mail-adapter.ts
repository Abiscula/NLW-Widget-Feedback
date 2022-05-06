import { MailAdapter, sendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "06d8c01282825c",
      pass: "6bb4430dda9ef9"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body}: sendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Victor Abiscula <victorabiscula@live.com>',
            subject: subject,
            html: body
        })
    }
}