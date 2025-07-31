const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/send', async (req, res) => {
  const { address, amount } = req.body;

  if (!address || !amount) {
    return res.status(400).json({ error: 'Dirección y cantidad requeridas' });
  }

  try {
    const response = await axios.post('https://faucetpay.io/api/v1/send', null, {
      params: {
        api_key: process.env.FAUCETPAY_API_KEY,
        to: address,
        amount: amount,
        currency: 'LTC'
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: 'Error al enviar pago' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
