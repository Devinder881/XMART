const products = require('../models/Products');

const getAllProducts = async (req, res) => {
    try {
        const Products = await products.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: Products })

    } catch (error) {
        res.status(500).json({ success: false, data: error.message })
    }
};

module.exports = { getAllProducts };