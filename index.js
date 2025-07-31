const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/send', (req, res) => {
  const address = req.body.address;
  if (!address) {
    return res.status(400).json({ message: "Dirección Litecoin no válida." });
  }

  console.log("Solicitud recibida para:", address);
  return res.json({ message: `✅ Simulación: Enviaríamos LTC a ${address}` });
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
