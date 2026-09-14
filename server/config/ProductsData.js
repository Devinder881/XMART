// Push Data Locally through this Command : node .\ProductsData.js

const Products = require('../models/Products');
const seedData = require('./seedData');


const allProducts = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdRWcGkMTe2sXdzKxxeJosLXAv-_wjB3aEQCkyD5uTRw&s=10",

        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxt3-_SATOsr3ec0czzE8mR-SAY2bRA2LBND5xUm0NjN2OpfEHrRAOr-m&s=10",
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
            "https://m.media-amazon.com/images/I/71eHpDFSd7L._SX522_.jpg",
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
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdRWcGkMTe2sXdzKxxeJosLXAv-_wjB3aEQCkyD5uTRw&s=10",

        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxt3-_SATOsr3ec0czzE8mR-SAY2bRA2LBND5xUm0NjN2OpfEHrRAOr-m&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyffRt2iNVNsJdCJ77PGI5BmrDeJGWf0iT8fb9mgaWg5--5zvRiDak5bY&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQl6m5AJ3OMXugks14Giwhp7C9C0Esr0vK9fRW2eRExA&s=10",
            "https://images.macrumors.com/t/Y1Sp3NsfWCwKbQL0mUSrnViR6tY=/2000x/article-new/2025/09/iphone-17-models.jpg",
            "https://adkomsal.com/wp-content/uploads/2025/09/Apple-iPhone-17-Pro-Max.jpeg",
        ],

        title: 'iPhone 17 Pro Max',

        company: 'Apple Technologies',

        description: "The iPhone 17 Pro Max features the powerful A19 Pro chip, 12GB RAM, and up to 1TB storage. Enjoy pro-grade cameras, a stunning display, long battery life, and premium titanium design.",

        price: 157000,

        category: "Clothing"
    },
    {
        image: "https://m.media-amazon.com/images/I/61NT0HLxyOL._SX522_.jpg",

        images: [
            "https://m.media-amazon.com/images/I/71eHpDFSd7L._SX522_.jpg",
            "https://m.media-amazon.com/images/I/816W6IOH14L._SX522_.jpg",
            "https://m.media-amazon.com/images/I/717jgW6uTCL._SX522_.jpg",
            "https://m.media-amazon.com/images/I/81CEpMib9EL._SX522_.jpg",
            "https://m.media-amazon.com/images/I/71M-jYTl+uL._SL1500_.jpg",
        ],

        title: 'INZONE H4',

        company: 'Sony Technologies',

        description: "Sony INZONE H3 Wired Gaming Headset with 360 Spatial Sound, USB connectivity, flip-to-mute microphone, PC compatibility, app support, and lightweight over-ear comfort in White.",

        price: 4490,

        category: "Trending"
    },

]

seedData(Products, allProducts,
    {
        clearExisting: true,
        label: "Products"
    }
)

