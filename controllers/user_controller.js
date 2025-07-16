const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ message: "User registered", user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user || user.password !== req.body.password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, "jwt_secret_key", { expiresIn: "1h" });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
