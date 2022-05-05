import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma'

export const routes = express.Router()

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "06d8c01282825c",
      pass: "6bb4430dda9ef9"
    }
});

routes.post('/feedbacks', async (req, res) => {

    const { type, comment, screenshot } = req.body
    
    const feedback = 

    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Victor Abiscula <victorabiscula@live.com>',
        subject: 'Novo feedback',
        html: [
            `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
            `</div>`
        ].join('\n')
    })

    return res.status(201).json({data: feedback})
})