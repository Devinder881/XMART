// Push Data Locally through this Command : node .\ProductsData.js

const Products = require('../models/Products');
const seedData = require('./seedData');


const allProducts = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdRWcGkMTe2sXdzKxxeJosLXAv-_wjB3aEQCkyD5uTRw&s=10",

        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyffRt2iNVNsJdCJ77PGI5BmrDeJGWf0iT8fb9mgaWg5--5zvRiDak5bY&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQl6m5AJ3OMXugks14Giwhp7C9C0Esr0vK9fRW2eRExA&s=10",
            "https://images.macrumors.com/t/Y1Sp3NsfWCwKbQL0mUSrnViR6tY=/2000x/article-new/2025/09/iphone-17-models.jpg",
            "https://adkomsal.com/wp-content/uploads/2025/09/Apple-iPhone-17-Pro-Max.jpeg",
        ],

        title: 'iPhone 17 PRO MAX',

        company: 'Apple Technologies',

        description: "The iPhone 17 Pro Max features the powerful A19 Pro chip, 12GB RAM, and up to 1TB storage. Enjoy pro-grade cameras, a stunning display, long battery life, and premium titanium design.",

        price: 157000,

        category: "Electronics"
    },
    {
        image: "https://m.media-amazon.com/images/I/61NT0HLxyOL._SX522_.jpg",

        images: [
            "https://m.media-amazon.com/images/I/816W6IOH14L._SX522_.jpg",
            "https://m.media-amazon.com/images/I/717jgW6uTCL._SX522_.jpg",
            "https://m.media-amazon.com/images/I/81CEpMib9EL._SX522_.jpg",
            "https://m.media-amazon.com/images/I/71M-jYTl+uL._SL1500_.jpg",
        ],

        title: 'INZONE H3',

        company: 'Sony Technologies',

        description: "Sony INZONE H3 Wired Gaming Headset with 360 Spatial Sound, USB connectivity, flip-to-mute microphone, PC compatibility, app support, and lightweight over-ear comfort in White.",

        price: 4490,

        category: "Electronics"
    },
    // =========================
    // ELECTRONICS
    // =========================

    {
        image: "https://m.media-amazon.com/images/I/41O5ghmqGsL._SY300_SX300_QL70_FMwebp_.jpg",
        images: [

            "https://m.media-amazon.com/images/I/71V23cDeCrL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/818AxotDpiL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/71XoX5c0LpL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/71ps6YxWMsL._SX679_.jpg",
        ],

        title: "Samsung Galaxy S25 Ultra",

        company: "Samsung",

        description:
            "Samsung Galaxy S25 Ultra smartphone featuring a premium titanium design, advanced camera system, powerful performance, and an immersive display built for everyday productivity and entertainment.",

        price: 129999,

        category: "Electronics"
    },

    {
        image: "https://m.media-amazon.com/images/I/716M8uhjvSL._SX679_.jpg",
        images: [
            "https://m.media-amazon.com/images/I/61ky94h4-oL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/81dWFr9Y6mL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/61CBs8j6r+L._SX679_.jpg",
            "https://m.media-amazon.com/images/I/61ICITqWMeL._SX679_.jpg",
        ],

        title: "Apple MacBook Air M4",

        company: "Apple",

        description:
            "Apple MacBook Air powered by the M4 chip, combining exceptional performance, a lightweight design, long battery life, and a high-resolution Liquid Retina display for work, creativity, and everyday use.",

        price: 99990,

        category: "Electronics"
    },

    {
        image: "https://m.media-amazon.com/images/I/51KGPDttQhL._SX522_.jpg",
        images: [
            "https://m.media-amazon.com/images/I/713H4Zm6HFL._SX522_.jpg",
            "https://m.media-amazon.com/images/I/71X6szvAB5L._SX522_.jpg",
            "https://m.media-amazon.com/images/I/71T7oVBFHSL._SX522_.jpg",
            "https://m.media-amazon.com/images/I/61bqn6R4uqL._SX522_.jpg",
        ],

        title: "Sony WH-1000XM5",

        company: "Sony",

        description:
            "Sony WH-1000XM5 wireless headphones with advanced noise cancellation, high-quality audio, hands-free calling, and a lightweight over-ear design for immersive listening throughout the day.",

        price: 29990,

        category: "Electronics"
    },

    {
        image: "https://m.media-amazon.com/images/I/31LOtLrQydL._SY300_SX300_QL70_FMwebp_.jpg",
        images: [
            "https://m.media-amazon.com/images/I/71AnlRsNOXL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/61cn6szj1+L._SX679_.jpg",
            "https://m.media-amazon.com/images/I/61MvGUAABTL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/61Kkgc7ZWqL._SX679_.jpg",
        ],

        title: "Apple AirPods Pro 2",

        company: "Apple",

        description:
            "Apple AirPods Pro with active noise cancellation, adaptive audio, transparency mode, personalized spatial audio, and a compact wireless design for an immersive listening experience.",

        price: 24900,

        category: "Electronics"
    },

    {
        image: "https://m.media-amazon.com/images/I/81LskAU5h1L._SX679_.jpg",
        images: [
            "https://m.media-amazon.com/images/I/81UUBW63WsL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/71Ny4opowKL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/71oIWnXZ4mL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/71WMAX2RIAL._SX679_.jpg",
        ],

        title: "Canon EOS R50 Mirrorless Camera",

        company: "Canon",

        description:
            "Canon EOS R50 mirrorless camera designed for creators with high-resolution imaging, fast autofocus, 4K video recording, and a compact body suited to photography and content creation.",

        price: 64999,

        category: "Electronics"
    },

    {
        image: "https://m.media-amazon.com/images/I/618IJzC-fFL._SX522_.jpg",
        images: [
            "https://m.media-amazon.com/images/I/61qxvD42Z3L._SX522_.jpg",
            "https://m.media-amazon.com/images/I/717K1fZeOYL._SX522_.jpg",
            "https://m.media-amazon.com/images/I/41Hd0c1xIeL._SX522_.jpg",
            "https://m.media-amazon.com/images/I/71-Q3eLY7xL._SX522_.jpg",
        ],

        title: "Logitech MX Master 3S",

        company: "Logitech",

        description:
            "Logitech MX Master 3S wireless mouse designed for productivity with an ergonomic shape, precise tracking, quiet clicks, customizable controls, and multi-device connectivity.",

        price: 8995,

        category: "Electronics"
    },

    {
        image: "https://m.media-amazon.com/images/I/31L50qUHIHL._SY300_SX300_QL70_FMwebp_.jpg",
        images: [
            "https://m.media-amazon.com/images/I/51oGJnOVRQL._SX522_.jpg",
            "https://m.media-amazon.com/images/I/71-nXPqCEVL._SX522_.jpg",
            "https://m.media-amazon.com/images/I/81o57dCUxIL._SX522_.jpg",
            "https://m.media-amazon.com/images/I/816BVvUb8dL._SX522_.jpg",
        ],

        title: "JBL Charge 5",

        company: "JBL",

        description:
            "JBL Charge 5 portable Bluetooth speaker delivering powerful sound with deep bass, a durable waterproof design, and a built-in battery designed for extended outdoor listening.",

        price: 13999,

        category: "Electronics"
    },


    // =========================
    // CLOTHING
    // =========================

    {
        image: "https://m.media-amazon.com/images/I/51oTtO2WOpL._SX679_.jpg",
        images: [
            "https://m.media-amazon.com/images/I/51sKHzbuSDL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/714kC0vQ8xL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/71T1AnnQnLL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/514Z0CW1kaL._SX679_.jpg",
        ],

        title: "Levi's 511 Slim Fit Jeans",

        company: "Levi's",

        description:
            "Levi's 511 Slim Fit jeans featuring a streamlined silhouette with comfortable stretch fabric, versatile styling, and a timeless design suited to everyday wear.",

        price: 3999,

        category: "Clothing"
    },

    {
        image: "https://m.media-amazon.com/images/I/41t+vijBeDL._AC_SX679_.jpg",
        images: [
            "https://m.media-amazon.com/images/I/415buF9fjyL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/51UzjwAU+yL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/61sUxztPjjL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/51UzjwAU+yL._AC_SX679_.jpg",
        ],

        title: "Nike Sportswear Club Fleece Hoodie",

        company: "Nike",

        description:
            "Nike Sportswear Club Fleece hoodie featuring a soft brushed interior, relaxed everyday comfort, classic styling, and a versatile design suitable for casual wear and cooler days.",

        price: 4495,

        category: "Clothing"
    },

    {
        image: "https://m.media-amazon.com/images/I/61PlevonHsL._SY625_.jpg",
        images: [
            "https://m.media-amazon.com/images/I/818teJ9YDXL._SY625_.jpg",
            "https://m.media-amazon.com/images/I/71dTCkFYQ3L._SY625_.jpg",
            "https://m.media-amazon.com/images/I/71+aArJtOdL._SY625_.jpg",
            "https://m.media-amazon.com/images/I/41DO-+a4oiL._SY695_.jpg",
        ],

        title: "Adidas Ultraboost Running Shoes",

        company: "Adidas",

        description:
            "Adidas Ultraboost running shoes designed with responsive cushioning, a supportive fit, and a lightweight construction for comfortable performance during running and everyday activity.",

        price: 16999,

        category: "Clothing"
    },

    {
        image: "https://m.media-amazon.com/images/I/71VL1XMnmjL._SX679_.jpg",
        images: [
            "https://m.media-amazon.com/images/I/515WuKHnXdL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/71xUccJWhyL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/61LP90bI7aL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/519PnOwFTZL._SX679_.jpg",
        ],

        title: "Puma Essentials T-Shirt",

        company: "Puma",

        description:
            "Puma Essentials T-shirt crafted for everyday comfort with a soft fabric construction, classic fit, and understated styling that pairs easily with casual outfits.",

        price: 1999,

        category: "Clothing"
    },

    {
        image: "https://m.media-amazon.com/images/I/61jrA2d0ijL._SY741_.jpg",
        images: [
            "https://m.media-amazon.com/images/I/61be3yMNt0L._SY741_.jpg",
            "https://m.media-amazon.com/images/I/613ZscHuNJL._SY741_.jpg",
            "https://m.media-amazon.com/images/I/61IEbFHoDCL._SY741_.jpg",
            "https://m.media-amazon.com/images/I/71++e8prBAL._SY741_.jpg",
        ],

        title: "Allen Solly Men's Formal Shirt",

        company: "Allen Solly",

        description:
            "Allen Solly men's formal shirt featuring a clean tailored silhouette and versatile styling, designed for professional occasions, office wear, and smart-casual outfits.",

        price: 2499,

        category: "Clothing"
    },

    {
        image: "https://m.media-amazon.com/images/I/51XyW3A90eL._SX679_.jpg",
        images: [
            "https://m.media-amazon.com/images/I/61KSp3WV5rL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/811SXEXDtdL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/51GOPvEVKsL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/51jk6tnuXJL._SX679_.jpg",
        ],

        title: "Levi's Women's 721 High Rise Skinny Jeans",

        company: "Levi's",

        description:
            "Levi's 721 high-rise skinny jeans designed with a flattering silhouette, comfortable stretch fabric, and versatile styling for contemporary everyday outfits.",

        price: 4299,

        category: "Clothing"
    },

    {
        image: "https://m.media-amazon.com/images/I/51PktUQoi4L._SY741_.jpg",
        images: [
            "https://m.media-amazon.com/images/I/51y0TxED1QL._SY741_.jpg",
            "https://m.media-amazon.com/images/I/51V5KDZD81L._SY741_.jpg",
            "https://m.media-amazon.com/images/I/51hqzA0jHML._SY741_.jpg",
            "https://m.media-amazon.com/images/I/61OzfOMOZiL._SY741_.jpg",
        ],

        title: "Van Heusen Men's Casual Blazer",

        company: "Van Heusen",

        description:
            "Van Heusen men's casual blazer combining a refined silhouette with versatile styling, making it suitable for smart-casual occasions, evenings, and modern everyday dressing.",

        price: 5999,

        category: "Clothing"
    },


    // =========================
    // TRENDING
    // =========================

    {
        image: "https://m.media-amazon.com/images/I/41R-4p6TZ1L._SX342_SY445_QL70_FMwebp_.jpg",
        images: [
            "https://m.media-amazon.com/images/I/71f-gu5n8fL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/81XcGisd7aL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/71O25uKMOzL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/61prbW9fSqL._SX679_.jpg",
        ],

        title: "Apple Watch Series 10",

        company: "Apple",

        description:
            "Apple Watch Series 10 featuring a refined lightweight design, advanced health and fitness capabilities, a bright display, and smart features designed to keep you connected throughout the day.",

        price: 46900,

        category: "Trending"
    },

    {
        image: "https://m.media-amazon.com/images/I/71ke2BEdIhL._SX679_.jpg",
        images: [
            "https://m.media-amazon.com/images/I/71xB+tcn-ZL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/81nohcEGcjL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/81NANZPFbAL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/71hyYLmhK5L._SX679_.jpg",
        ],

        title: "Samsung Galaxy Buds3 Pro",

        company: "Samsung",

        description:
            "Samsung Galaxy Buds3 Pro wireless earbuds featuring intelligent noise cancellation, immersive audio, comfortable in-ear design, and seamless connectivity for everyday listening.",

        price: 17999,

        category: "Trending"
    },

    {
        image: "https://m.media-amazon.com/images/I/61l5KkEytnL._SX679_.jpg",
        images: [
            "https://m.media-amazon.com/images/I/51TLRHBwwDL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/619kILrlo4L._SX679_.jpg",
            "https://m.media-amazon.com/images/I/51NHxwsnMcL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/81vbUjZzWDL._SX679_.jpg",
        ],

        title: "Dyson Airwrap Multi-Styler",

        company: "Dyson",

        description:
            "Dyson Airwrap multi-styler designed to create a range of hairstyles using controlled airflow, with multiple styling attachments for curling, smoothing, shaping, and drying.",

        price: 54900,

        category: "Trending"
    },

    {
        image: "https://m.media-amazon.com/images/I/61DRMUJXnoL._SX679_.jpg",
        images: [
            "https://m.media-amazon.com/images/I/61uTWJmm2cL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/51hw3eJdQxL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/51zqA7WN7PL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/61IJ3GuL2bL._SX679_.jpg",
        ],

        title: "Casio G-Shock Analog Digital Watch",

        company: "Casio",

        description:
            "Casio G-Shock analog-digital watch combining a distinctive rugged design with shock resistance, versatile functionality, and a durable construction built for everyday wear.",

        price: 10995,

        category: "Trending"
    },

    {
        image: "https://m.media-amazon.com/images/I/713kWHh7p7L._AC_SX679_.jpg",
        images: [
            "https://m.media-amazon.com/images/I/7186DBUBhhL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/71GLRzTzbFL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/81HEC2QhgyL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/71qcr1soFRL._AC_SX679_.jpg",
        ],

        title: "Nike Air Max 270",

        company: "Nike",

        description:
            "Nike Air Max 270 sneakers featuring a distinctive silhouette, responsive cushioning, breathable construction, and a versatile design that transitions easily between casual and active wear.",

        price: 12995,

        category: "Trending"
    },

    {
        image: "https://m.media-amazon.com/images/I/412Fkj6qB1L._SY300_SX300_QL70_FMwebp_.jpg",
        images: [
            "https://m.media-amazon.com/images/I/81sVmK5nFcL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/813qeHW3wqL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/81h2rdj4DqL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/81ByWxdYarL._SX679_.jpg",
        ],

        title: "Marshall Emberton III",

        company: "Marshall",

        description:
            "Marshall Emberton III portable Bluetooth speaker delivering rich, detailed sound in a compact design with extended battery life and a distinctive style inspired by Marshall's iconic audio heritage.",

        price: 19999,

        category: "Trending"
    },

    {
        image: "https://m.media-amazon.com/images/I/31Q8himJ7dL._SY300_SX300_QL70_FMwebp_.jpg",
        images: [
            "https://m.media-amazon.com/images/I/418iPV1rb-L._SX679_.jpg",
            "https://m.media-amazon.com/images/I/616DiPE6VUL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/71a+yXdODiL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/61tlkGMjI4L._SX679_.jpg",
        ],

        title: "GoPro HERO13 Black",

        company: "GoPro",

        description:
            "GoPro HERO13 Black action camera built for capturing dynamic adventures with high-resolution video, advanced stabilization, rugged construction, and versatile mounting options.",

        price: 44999,

        category: "Trending"
    },
]

seedData(Products, allProducts,
    {
        clearExisting: true,
        label: "Products"
    }
)

