import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, message, businessName } = req.body

  if (!name || !email || !message || !businessName) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    await resend.emails.send({
      from: 'Hometown Web Co <onboarding@resend.dev>',
      to: 'woody@hometownwebco.com',
      subject: `New Contact Form Submission from ${name}`,
      reply_to: email,
      html: `
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business:</strong> ${businessName}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
    })

    res.status(200).json({ success: true, message: 'Email sent' })
  } catch (error) {
    console.error('Resend error:', error)
    res.status(500).json({ error: 'Email sending failed' })
  }
}
