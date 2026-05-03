const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // 1. validar campos
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Faltan campos" });
        }

        // 2. validar email
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Email no válido" });
        }

        // 3. usuario existe
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "Usuario ya existe" });
        }

        // 4. encriptar password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 5. crear usuario
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role: "user"
        });

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
                role: user.role
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.json({
            ok: true,
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        res.status(500).json({ message: "Error en el servidor" });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Faltan campos" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Usuario no encontrado" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Contraseña incorrecta" });
        }

        res.json({
            ok: true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        res.status(500).json({ message: "Error en el servidor" });
    }
};