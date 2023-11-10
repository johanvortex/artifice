const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/enviar-correo', (req, res) => {
  const { nombre, email, mensaje } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'luisestebantriana27@gmail.com', // Coloca tu dirección de correo electrónico
      pass: 'lokokuerdo', // Coloca tu contraseña
    },
  });

  const mailOptions = {
    from: 'luisestebantriana27@gmail.com',
    to: 'lestebantriana2000@gmail.com', // Coloca la dirección de correo electrónico de destino
    subject: 'Nuevo mensaje de contacto',
    text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error al enviar el correo');
    } else {
      console.log('Correo enviado: ' + info.response);
      res.status(200).send('Correo enviado exitosamente');
    }
  });
});

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en el puerto ${PORT}`);
});