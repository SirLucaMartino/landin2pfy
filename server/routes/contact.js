import express from 'express';
import { validateContact } from '../middleware/validator.js';
import { transporter } from '../config/email.js';

const router = express.Router();

router.post('/', validateContact, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'contacto@procufy.cl',
      subject: 'Nuevo mensaje de contacto - Procufy',
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Mensaje enviado exitosamente' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
});

export default router;