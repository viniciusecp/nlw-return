import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "5abd14adc7b9f4",
    pass: "59ca47a41c5d29"
  }
});

export class NodemailerMailAdapter implements MailAdapter {

  async sendMail({ subject, body }: SendMailData) {
      await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Vinicius Faustino <vinicius0417@gmail.com>',
        subject,
        html: body,
      })
  }

}