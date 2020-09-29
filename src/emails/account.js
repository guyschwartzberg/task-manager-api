const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'bojanvrucina@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app!`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'bojanvrucina@gmail.com',
        subject: `Goodbye ${name} :(`,
        text: 'Is there anything we chould have done to keep you aboard?'
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}