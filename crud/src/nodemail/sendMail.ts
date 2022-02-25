import transport from '../config/nodemailer.config'

export class ValidateMail {

    async sendMail(email_token, email) {
        await transport.sendMail({
            from: process.env.MAIL_USER,
            to: email,
            subject: "Please confirm your account",
            html: `<h1>Email Confirmation</h1>
                <h2>Hello User</h2>
                <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
                <a href=${process.env.BASE_URL + "/validate-mail/" + email_token}> Click here</a>
                </div>`,
        }).catch(err => console.log(err));
        return console.log('verify mail')
    }
}
