const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const isAdmin = require("../middleware/isAdmin");
const upload = require("../config/multerCloudinary");
const {
    getAllUsers,
    deleteUser,
    createProduct,
    getAllProductsAdmin,
    deleteProduct,
    updateProduct,
    getProductById,
} = require("../controllers/adminController");

// User Management Routes
router.get("/users", protect, isAdmin, getAllUsers);
router.delete("/users/:userId", protect, isAdmin, deleteUser);


// Product Management Routes 
router.post("/products", protect, isAdmin, upload.fields([
    { name: "image", maxCount: 1 },
    { name: "images", maxCount: 4 },
]), createProduct);
router.get("/products", protect, isAdmin, getAllProductsAdmin);
router.get('/products/:productId', protect, isAdmin, getProductById);
router.put("/products/:productId", protect, isAdmin, upload.fields([
    { name: "image", maxCount: 1 },
    { name: "images", maxCount: 4 },
]), updateProduct);
router.delete("/products/:productId", protect, isAdmin, deleteProduct);



module.exports = router;