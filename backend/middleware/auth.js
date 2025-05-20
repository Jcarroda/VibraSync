// middleware/auth.js
const { ClerkExpressWithAuth } = require('@clerk/clerk-sdk-node');

const requireAuth = ClerkExpressWithAuth();

const checkRole = (requiredRole) => {
    return (req, res, next) => {
        const { auth } = req;

        if (!auth || !auth.userId) {
            return res.status(401).json({ message: 'No autorizado' });
        }

        const role = auth.sessionClaims?.publicMetadata?.role || 'user';

        if (role !== requiredRole) {
            return res.status(403).json({ message: 'Acceso denegado: solo ' + requiredRole });
        }

        req.userId = auth.userId;
        req.role = role;

        next();
    };
};

module.exports = {
    requireAuth,
    checkRole,
};
