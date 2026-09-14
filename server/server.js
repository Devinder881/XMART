const express = require('express');
const cors = require('cors');
const Dotenv = require('dotenv');
const ConnectDB = require('./config/db')
const homepageRoutes = require("./routes/homepageRoutes");
const productsRoutes = require("./routes/productsRoutes")
const authRoutes = require('./routes/authRoutes')
const cartRoutes = require("./routes/cartRoutes");
const adminRoutes = require("./routes/adminRoutes");

Dotenv.config();
ConnectDB();

const app = express();


// middleWare for Cross Origin Requests
const allowedOrigins = [
    process.env.CLIENT_URL,
    'http://localhost:5173',
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));


app.use(express.json());



app.use('/api/homepage', homepageRoutes)
app.use('/api/products', productsRoutes)
app.use('/api/auth', authRoutes)
app.use("/api/cart", cartRoutes);
app.use("/api/admin", adminRoutes);



const Port = process.env.PORT || 5000;
app.listen(Port, () => {
    console.log('App is Running at Port : ', Port);

})



