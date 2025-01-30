const express = require("express");
const https = require("https");
const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");

// Incluyendo rutas
const authRoutes = require("./routes/auth");
const privateRoutes = require("./routes/private");

// Cargar variables de entorno
dotenv.config();

const app = express();

// Middleware de seguridad
app.use(helmet());
app.use(cors());
app.use(express.json()); // Para leer JSON en requests

// Incluyendo rutas
app.use("/auth", authRoutes);
app.use("/private", privateRoutes);

// Configurar HTTPS con el certificado SSL
const options = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.crt"),
};

// Conectar a MongoDB
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("✅ Conectado a MongoDB"))
    .catch((err) => console.error("❌ Error de conexión:", err));

// Ruta básica
app.get("/", (req, res) => {
    res.send("API Segura con Express y MongoDB 🚀");
});


// Levantar servidor HTTPS
https.createServer(options, app).listen(443, () => {
    console.log("🔒 Servidor HTTPS corriendo en el puerto 443");
});
