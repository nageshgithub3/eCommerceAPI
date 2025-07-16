const Cart = require("../models/cart");

exports.addToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        let cart = await Cart.findOne({ user: req.user.id });

        if (!cart) {
            cart = new Cart({ user: req.user.id, items: [] });
        }

        cart.items.push({ product: productId, quantity });
        await cart.save();

        res.json({ message: "Item added to cart", cart });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user.id }).populate("items.product");
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
