import nodemailer from 'nodemailer';
import HandlebarMailTemplate from './HandlebarMailTemplate';

interface ITemplateVariable {
  [key: string]: string | number;
}

interface IParseMailTemplate {
  file: string;
  variables: ITemplateVariable;
}
interface IMailContact {
  name: string;
  email: string;
}
interface ISendMail {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  templateData: IParseMailTemplate;
}

export default class EtherealMail {
  static async sendMail({
    to,
    from,
    subject,
    templateData,
  }: ISendMail): Promise<void> {

    const mailTemplate = new HandlebarMailTemplate();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'andreluccagomides@gmail.com',
        pass: 'xmnq gtzf algy funx',
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const message = await transporter.sendMail({
      from: {
        name: from?.name || 'Equipe BeFit',
        address: from?.email || 'andreluccagomides@gmail.com',
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: await mailTemplate.parse(templateData),
    });

    console.log('Message sent: %s', message.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
  }
}
