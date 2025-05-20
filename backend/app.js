require('dotenv').config();
const express = require('express');
const { ClerkExpressWithAuth, getAuth } = require('@clerk/clerk-sdk-node');

const app = express();

app.use(ClerkExpressWithAuth()); // Middleware de Clerk para autenticar con JWT

// Ruta protegida
app.get('/api/user-info', async (req, res) => {
  try {
    const { userId, orgId } = getAuth(req);

    if (!userId) {
      return res.status(401).json({ message: 'No autorizado' });
    }

    // Puedes añadir más lógica aquí, como roles o más datos
    res.json({ userId, orgId });
  } catch (err) {
    res.status(500).json({ error: 'Error obteniendo datos de usuario' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Backend corriendo en http://localhost:${PORT}`));
