const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Servir archivos estáticos desde la carpeta 'build' de tu aplicación React
app.use(express.static(path.join(__dirname, 'build')));

// Manejar todas las demás solicitudes y redirigirlas al archivo 'index.html'
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
