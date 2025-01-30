const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ message: "Acceso denegado" });

    // Remover la palabra Bearer del jwt
    const tokenSinBearer = token.split(" ")[1];

    if (!tokenSinBearer) return res.status(400).json({ message: "Token inválido" });

    try {
        const verified = jwt.verify(tokenSinBearer, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: "Token inválido" });
    }
};
