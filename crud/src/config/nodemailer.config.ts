import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'c57tf4rloew52f3r@ethereal.email',
        pass: 'eezKP3ZSFJKsUPKKNc'
    }
});

export default transport