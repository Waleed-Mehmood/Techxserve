// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// GET route to show Techxserve
app.get('/', (req, res) => {
    res.send('Welcome to Techxserve!');
  });

// POST route to handle contact form submission
app.post('/api/contact', async (req, res) => {
  const { name, phone, email, interest } = req.body;

  try {
    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL, // Owner's email
      subject: 'New Contact Form Submission - Techxserve',
      text: `Name: ${name}
Phone: ${phone}
Email: ${email}
Interest: ${interest}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Form submitted successfully to Techxserve!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Techxserve server is running on port ${PORT}`);
});