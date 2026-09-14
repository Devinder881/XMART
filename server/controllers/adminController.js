const User = require("../models/User");
const Product = require("../models/Products");

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, "-password");
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch users.", error: err.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const userToDelete = await User.findById(userId);

        if (!userToDelete) {
            return res.status(404).json({ message: "User not found." });
        }
        if (userToDelete.role === "Admin") {
            return res.status(403).json({ message: "Cannot delete an admin account." });
        }

        await User.findByIdAndDelete(userId);
        res.status(200).json({ message: "User deleted." });
    } catch (err) {
        res.status(500).json({ message: "Failed to delete user.", error: err.message });
    }
};

exports.createProduct = async (req, res) => {
    try {
        const { title, company, description, price, category } = req.body;

        if (!req.files?.image?.[0]) {
            return res.status(400).json({ message: "Product image is required.!" });
        }

        const mainImage = req.files.image[0].path;
        const galleryImages = (req.files.images || []).map((file) => file.path);

        const product = await Product.create({
            title,
            company,
            description,
            price,
            category,
            image: mainImage,
            images: galleryImages,
        });

        res.status(201).json({ message: "Product created.", product });
    } catch (err) {
        res.status(500).json({ message: "Failed to create product.", error: err.message });
    }
};


// GET /api/admin/productId
exports.getProductById = async (req, res) => {

    try {
        const productId = req.params.productId;
        const product = await Product.findById(productId);
        res.status(200).json({ product })
    } catch (err) {
        res.status(500).json({ message: "No Product Found !" })
    }
}


// GET /api/admin/products
exports.getAllProductsAdmin = async (req, res) => {
    try {
        const products = await Product.find(
            {},
            "title image company category createdAt"
        );

        res.status(200).json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch products.", error: err.message });
    }
};

// DELETE /api/admin/products/:productId
exports.deleteProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const deleted = await Product.findByIdAndDelete(productId);

        if (!deleted) {
            return res.status(404).json({ message: "Product not found." });
        }
        res.status(200).json({ message: "Product deleted." });
    } catch (err) {
        res.status(500).json({ message: "Failed to delete product.", error: err.message });
    }
};

// PUT /api/admin/products/:productId
exports.updateProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const { title, company, description, price, category, clearImages } = req.body;

        const updateData = { title, company, description, price, category };


        if (req.files?.image?.[0]) {
            updateData.image = req.files.image[0].path;
        }

        if (req.files?.images?.length) {
            updateData.images = req.files.images.map((file) => file.path);
        }

        const updated = await Product.findByIdAndUpdate(productId, updateData, {
            new: true,
            runValidators: true,
        });

        if (!updated) {
            return res.status(404).json({ message: "Product not found." });
        }

        res.status(200).json({ message: "Product updated.", product: updated });
    } catch (err) {
        res.status(500).json({ message: "Failed to update product.", error: err.message });
    }
};





