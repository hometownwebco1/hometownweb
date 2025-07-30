const express = require('express')
const router = express.Router()
const { Resend } = require('resend')

require('dotenv').config()

const resend = new Resend(process.env.RESEND_API_KEY)

router.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    const data = await resend.emails.send({
      from: 'Woody from Hometown <onboarding@resend.dev>',
      to: 'woody@hometownwebco.com',
      subject: `New Contact Form Submission from ${name}`,
      reply_to: email,
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `
    })

    return res.status(200).json({ success: true, data })
  } catch (error) {
    console.error('Email send error:', error)
    return res.status(500).json({ error: 'Failed to send email' })
  }
})

module.exports = router
