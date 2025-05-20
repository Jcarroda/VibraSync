const { Clerk } = require('@clerk/clerk-sdk-node');

const checkAdminRole = async (req, res, next) => {
    try {
        const user = req.auth.user;

        if (!user) {
            return res.status(401).json({ error: 'No autenticado' });
        }

        // Verifica si el usuario tiene el rol "admin"
        if (user.publicMetadata.role !== 'admin') {
            return res.status(403).json({ error: 'Acción permitida solo para administradores' });
        }

        next(); // Si es admin, continúa con la solicitud
    } catch (err) {
        console.error('Error en checkAdminRole:', err.message);
        res.status(500).json({ error: 'Error al verificar el rol del usuario' });
    }
};

module.exports = { checkAdminRole };
