const User = require("../models/User");

// GET /api/cart
exports.getCart = async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
            .populate("cart.productId");

        const formattedCart = user.cart.map((item) => ({
            _id: item.productId._id,
            title: item.productId.title,
            image: item.productId.image,
            images: item.productId.images,
            price: item.productId.price,
            company: item.productId.company,
            description: item.productId.description,
            quantity: item.quantity,
        }));

        res.status(200).json(formattedCart);

    } catch (err) {
        res.status(500).json({
            message: "Failed to fetch cart.",
            error: err.message
        });
    }
};

// POST /api/cart
exports.addToCart = async (req, res) => {
    try {
        const { productId, quantity = 1 } = req.body;
        const user = await User.findById(req.user.id);

        const existingItem = user.cart.find((item) => item.productId.toString() === productId);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            user.cart.push({ productId, quantity });
        }

        await user.save();
        res.status(200).json({ message: "Added to cart." });
    } catch (err) {
        res.status(500).json({ message: "Failed to add to cart.", error: err.message });
    }
};

// PUT /api/cart/:productId
exports.updateCartItem = async (req, res) => {
    try {
        const { productId } = req.params;
        const { quantity } = req.body;
        const user = await User.findById(req.user.id);

        const item = user.cart.find((item) => item.productId.toString() === productId);
        if (!item) return res.status(404).json({ message: "Item not found in cart." });

        item.quantity = quantity;
        await user.save();

        res.status(200).json({ message: "Cart updated.", item });
    } catch (err) {
        res.status(500).json({ message: "Failed to update cart.", error: err.message });
    }
};

// DELETE /api/cart/:productId
exports.removeCartItem = async (req, res) => {
    try {
        const { productId } = req.params;
        const user = await User.findById(req.user.id);

        user.cart = user.cart.filter((item) => item.productId.toString() !== productId);

        await user.save();
        res.status(200).json({ message: "Item removed." });
    } catch (err) {
        res.status(500).json({ message: "Failed to remove item.", error: err.message });
    }
};