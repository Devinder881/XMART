import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api"
});


// Automatically attaching the JWT token to every outgoing request.
API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


// Home Page 
export const getHomepage = () => API.get("/homepage");



// Products

export const getProducts = () => API.get("/products");


// auth


export const signup = (userData) => API.post("/auth/signup", userData);
export const login = (credentials) => API.post("/auth/login", credentials);



// Cart
export const getCart = () => API.get("/cart");
export const addToCart = (productId, quantity = 1) => API.post("/cart", { productId, quantity });
export const updateCartItem = (productId, quantity) => API.put(`/cart/${productId}`, { quantity });
export const removeCartItem = (productId) => API.delete(`/cart/${productId}`);


// Admin
export const getAllUsers = () => API.get("/admin/users");
export const deleteUser = (userId) => API.delete(`/admin/users/${userId}`);


// Admin — Products
export const getAllProductsAdmin = () => API.get("/admin/products");
export const getProductById = (productId) => API.get(`admin/products/${productId}`);
export const deleteProduct = (productId) => API.delete(`/admin/products/${productId}`);

export const createProduct = (formData) =>
    API.post("/admin/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
export const updateProduct = (productId, formData) =>
    API.put(`/admin/products/${productId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });