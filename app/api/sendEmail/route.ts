// app/api/sendEmail/route.ts
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Método no permitido.' });
  }

  try {
    const { nombre, email, mensaje } = req.body;

    // Validación básica
    if (!nombre || !email || !mensaje) {
      return res.status(400).json({
        success: false,
        message: 'Todos los campos son obligatorios.',
      });
    }

    // Configura el transportador de Nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: '2113110283@untels.edu.pe', // Reemplaza con tu correo
        pass: 'eliastalledo', // Reemplaza con tu contraseña o app password
      },
    });

    // Configura el contenido del email
    const mailOptions = {
      from: `"${nombre}" <${email}>`, // Remitente
      to: '2113110283@untels.edu.pe', // Destinatario
      subject: `Nuevo mensaje de ${nombre}`,
      text: mensaje,
      html: `<p><strong>Nombre:</strong> ${nombre}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensaje:</strong><br>${mensaje}</p>`,
    };

    // Envía el correo
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: '¡Mensaje enviado con éxito!',
    });
  } catch (error: any) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({
      success: false,
      message: 'Hubo un error al enviar el correo. Por favor, intenta nuevamente.',
    });
  }
}
