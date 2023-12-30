const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();

// Middleware para CORS
app.use(cors());

// Configuración de Multer 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

const upload = multer({ storage: storage });

// Ruta para cargar archivos
app.post('/upload', upload.single('file'), (req, res) => {
  // Aquí irá la lógica para procesar el archivo
  res.send('Archivo recibido');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
