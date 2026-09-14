// Note forself ! data of Homepage can only be Edited through this file .
// You can Push Data Through this Command : node .\homePageData.js

const HomePage = require("../models/homePage");
const seedData = require('./seedData')

const homePageData = [
    {
        id: 1,

        section: 'festiveDeals',

        order: 1,

        type: "Grid",

        objects: [
            {
                title: 'Deals you might like in Appliances',
                tiles: [
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786345816/washing_mashine_gray.webp", discout: '25%', discoutText: 'One-Time Deal' },
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786345814/washing_machine_blue.webp", discout: '32%', discoutText: 'One-Time Deal' },
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786345813/Freezer_printed_red.jpg", discout: '45%', discoutText: 'Mega Deal' },
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786345812/Freezer_gray.jpg", discout: '24%', discoutText: 'Mega Deal' }
                ],
                directURL: "https://www.amazon.in/events/greatfreedomsale?ref_=dealz_mlc_see_more&content-id=amzn1.sym.60882f6c-fec5-45e7-9f67-5e56ff8c8c8f&_encoding=UTF8%2CUTF8&dynamicBubble=%7B%2522collectionId%2522%3A%2522deals-contextual-link%2522%2C%2522departmentsIncluded%2522%3A%5B1380373031%2C219651163031%5D%7D&bubble-id=deals-contextual-link#DealsGridScrollAnchor"
            },
            {
                title: 'Deals for best sound Experience',
                tiles: [
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786345734/Headphones_red.jpg", discout: '18%', discoutText: 'Best Sellers' },
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786345734/Headphones_pink.jpg", discout: '40%', discoutText: 'Best Sellers' },
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786345734/Headphones_black.jpg", discout: '26%', discoutText: 'Best Sellers' },
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786345733/Headphones_brown.jpg", discout: '25%', discoutText: 'Best Sellers' }
                ],
                directURL: "https://www.amazon.in/s?k=headphones&crid=34SV65AIMTMJT&sprefix=headpho%2Caps%2C359&ref=nb_sb_noss_2"
            },
            {
                title: '4+ star deals for you',
                tiles: [
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786345792/Men_jacket_black.jpg", discout: '54%', discoutText: 'Fashion Deal' },
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786345791/LYmio_jacket_men.jpg", discout: '65%', discoutText: 'Mega Fashion Deal' },
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786345789/Jeans_Brown.jpg", discout: '55%', discoutText: 'Fashion Deal' },
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786345788/Shirt_blue.jpg", discout: '71%', discoutText: 'Mega Fashion Deal' }
                ],
                directURL: "https://www.amazon.in/s?k=men+colthing&i=apparel&crid=159D0L45RCVAT&sprefix=men+colthing%2Capparel%2C269&ref=nb_sb_noss_2"
            },
            {
                title: 'Deals picked just for you',
                tiles: [
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786345765/Samsung_24.webp", discout: '20%', discoutText: 'Mega Festival Sale' },
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786345764/Nothing_phone_2.jpg", discout: '25%', discoutText: 'Mega Festival Sale' },
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786345763/Google_pixel_r.jpg", discout: '18%', discoutText: 'Mega Festival Sale' },
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786345762/APPLE_16.webp", discout: '28%', discoutText: 'Mega Festival Sale' }
                ],
                directURL: "https://www.amazon.in/s?k=mobile+phones&crid=3N510OL98B9C4&sprefix=mobile+phone%2Caps%2C292&ref=nb_sb_noss_2"
            },

        ]
    },
    {
        id: 2,

        section: 'bestSellers',

        order: 2,

        type: "Carousel",

        objects: [
            {
                title: "Up to 40% off | Best deals",
                directURL: 'https://www.amazon.in/b/?_encoding=UTF8&ie=UTF8&node=1389396031&content-id=amzn1.sym.c7cd5939-505d-4f3d-b71c-ea9cc0547963&ref_=pd_hp_d_btf_unk',
                tiles: [
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786355147/TV_samsung_smart.jpg" },
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786355143/Sony65inchTV.jpg" },
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786355140/SmartWaterPurifier.jpg" },
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786355134/samsung55inches_aI.jpg" },
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786355128/LGTV.jpg" },
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786355126/HairTV.jpg" },
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786355124/DolbyAtmosProjectorSpeacker.jpg" },
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786355121/AquaSmartFilter.jpg" },
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786355119/AquaGuard_Purifier.webp" },
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786355118/Xiaomi4kTV.jpg" },
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786355115/Xaomi80cmTV.webp" },
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786355114/Watch.webp" },

                ],
            }
        ]
    },
    {
        id: 3,
        section: "discountedProducts",
        order: 3,
        type: "hybridGrid",

        objects: [
            {
                title: 'G-Shock Limited Edition',
                tiles: [
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786433716/wristwatch_black.jpg", discount: '33%', discountText: 'One Time Offer' }
                ],
                directURL: "https://www.amazon.in/s?k=watches&crid=WNFK3P8LSZQ9&sprefix=watche%2Caps%2C289&ref=nb_sb_noss_2"
            },
            {
                title: 'Sony PlayStation 5',
                tiles: [
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786433715/PS.jpg", discount: '40%', discountText: 'Mega Discount!' }
                ],
                directURL: "https://www.amazon.in/s?k=playstation+5+console&ref=nb_sb_noss"
            },
            {
                title: 'Gaming Deals & Products',
                tiles: [
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786433668/xbox_controller_red.jpg", discount: '31%', discountText: 'Xbox Controller (Red)' },
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786433668/wite_asus_controller.jpg", discount: '42%', discountText: 'Nintendo Switch' },
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786433668/xbox_controller.jpg", discount: '38%', discountText: 'Xbox Controller (white)' },
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786433668/61f8Co8YS2L._SX679_.jpg", discount: '45%', discountText: 'Nintendo Switch Black' }
                ],
                directURL: "https://www.amazon.in/s?k=outdoor+games+equipment&crid=23JY5QZHY0YE&sprefix=outdoor+games+equipment%2Caps%2C305&ref=nb_sb_noss_2"
            },
            {
                title: 'Heavy Discount on Sports Items',
                tiles: [
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786433692/goalkeeper_gloves.jpg", discount: '55%', discountText: 'Goalkeeper Gloves' },
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786433691/bats.jpg", discount: '28%', discountText: 'Bats' },
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786433690/51QsIn-sTAL._SY300_SX300_QL70_FMwebp_.webp", discount: '40%', discountText: 'Football' },
                    { url: "https://res.cloudinary.com/dkl30c3oc/image/upload/v1786433691/bedminton.jpg", discount: '40%', discountText: 'Badminton' }
                ],
                directURL: "https://www.amazon.in/s?k=gaming+products&crid=36XF4PJTL51RG&sprefix=gaming+products%2Caps%2C278&ref=nb_sb_noss_1"
            },
        ]
    },
    {
        id: 4,
        section: "featuredCategory",
        order: 4,
        type: 'productRow',
        objects: [
            {
                title: 'Sony Aplha | 17-70mm F/2.8 Di III-A VC RXD Camera Lenses for Sony APS-C mirrorless Camera - Black',
                Price: 14999,
                company: 'Sony',
                type: 'camera',
                category: 'tech',
                url: 'https://res.cloudinary.com/dkl30c3oc/image/upload/v1787131647/SONYlENS30MM.jpg',
                directURL: 'https://www.amazon.in/s?k=sony+lens&crid=1IVA0JE6F37H2&sprefix=sony+lens%2Caps%2C321&ref=nb_sb_noss_1',
                deliveryDate: 'Sunday, August 25',
            },
            {
                title: 'Sony Aplha | 17-70mm F/2.8 Di III-A VC RXD Camera Lenses for Sony APS-C mirrorless Camera - Black',
                Price: 14999,
                company: 'Sony',
                type: 'camera',
                category: 'tech',
                url: 'https://res.cloudinary.com/dkl30c3oc/image/upload/v1787131647/SONYlENS30MM.jpg',
                directURL: 'https://www.amazon.in/s?k=sony+lens&crid=1IVA0JE6F37H2&sprefix=sony+lens%2Caps%2C321&ref=nb_sb_noss_1',
                deliveryDate: 'Sunday, August 25',
            },
            {
                title: 'Sony Aplha | 17-70mm F/2.8 Di III-A VC RXD Camera Lenses for Sony APS-C mirrorless Camera - Black',
                Price: 14999,
                company: 'Sony',
                type: 'camera',
                category: 'tech',
                url: 'https://res.cloudinary.com/dkl30c3oc/image/upload/v1787131647/SONYlENS30MM.jpg',
                directURL: 'https://www.amazon.in/s?k=sony+lens&crid=1IVA0JE6F37H2&sprefix=sony+lens%2Caps%2C321&ref=nb_sb_noss_1',
                deliveryDate: 'Sunday, August 25',
            },
            {
                title: 'Sony Aplha | 17-70mm F/2.8 Di III-A VC RXD Camera Lenses for Sony APS-C mirrorless Camera - Black',
                Price: 14999,
                company: 'Sony',
                type: 'camera',
                category: 'tech',
                url: 'https://res.cloudinary.com/dkl30c3oc/image/upload/v1787131647/SONYlENS30MM.jpg',
                directURL: 'https://www.amazon.in/s?k=sony+lens&crid=1IVA0JE6F37H2&sprefix=sony+lens%2Caps%2C321&ref=nb_sb_noss_1',
                deliveryDate: 'Sunday, August 25',
            },
            {
                title: 'Sony Aplha | 17-70mm F/2.8 Di III-A VC RXD Camera Lenses for Sony APS-C mirrorless Camera - Black',
                Price: 14999,
                company: 'Sony',
                type: 'camera',
                category: 'tech',
                url: 'https://res.cloudinary.com/dkl30c3oc/image/upload/v1787131647/SONYlENS30MM.jpg',
                directURL: 'https://www.amazon.in/s?k=sony+lens&crid=1IVA0JE6F37H2&sprefix=sony+lens%2Caps%2C321&ref=nb_sb_noss_1',
                deliveryDate: 'Sunday, August 25',
            },
            {
                title: 'Sony Aplha | 17-70mm F/2.8 Di III-A VC RXD Camera Lenses for Sony APS-C mirrorless Camera - Black',
                Price: 14999,
                company: 'Sony',
                type: 'camera',
                category: 'tech',
                url: 'https://res.cloudinary.com/dkl30c3oc/image/upload/v1787131647/SONYlENS30MM.jpg',
                directURL: 'https://www.amazon.in/s?k=sony+lens&crid=1IVA0JE6F37H2&sprefix=sony+lens%2Caps%2C321&ref=nb_sb_noss_1',
                deliveryDate: 'Sunday, August 25',
            },
            {
                title: 'Sony Aplha | 17-70mm F/2.8 Di III-A VC RXD Camera Lenses for Sony APS-C mirrorless Camera - Black',
                Price: 14999,
                company: 'Sony',
                type: 'camera',
                category: 'tech',
                url: 'https://res.cloudinary.com/dkl30c3oc/image/upload/v1787131647/SONYlENS30MM.jpg',
                directURL: 'https://www.amazon.in/s?k=sony+lens&crid=1IVA0JE6F37H2&sprefix=sony+lens%2Caps%2C321&ref=nb_sb_noss_1',
                deliveryDate: 'Sunday, August 25',
            },
            {
                title: 'Sony Aplha | 17-70mm F/2.8 Di III-A VC RXD Camera Lenses for Sony APS-C mirrorless Camera - Black',
                Price: 14999,
                company: 'Sony',
                type: 'camera',
                category: 'tech',
                url: 'https://res.cloudinary.com/dkl30c3oc/image/upload/v1787131647/SONYlENS30MM.jpg',
                directURL: 'https://www.amazon.in/s?k=sony+lens&crid=1IVA0JE6F37H2&sprefix=sony+lens%2Caps%2C321&ref=nb_sb_noss_1',
                deliveryDate: 'Sunday, August 25',
            },
            {
                title: 'Sony Aplha | 17-70mm F/2.8 Di III-A VC RXD Camera Lenses for Sony APS-C mirrorless Camera - Black',
                Price: 14999,
                company: 'Sony',
                type: 'camera',
                category: 'tech',
                url: 'https://res.cloudinary.com/dkl30c3oc/image/upload/v1787131647/SONYlENS30MM.jpg',
                directURL: 'https://www.amazon.in/s?k=sony+lens&crid=1IVA0JE6F37H2&sprefix=sony+lens%2Caps%2C321&ref=nb_sb_noss_1',
                deliveryDate: 'Sunday, August 25',
            },
            {
                title: 'Sony Aplha | 17-70mm F/2.8 Di III-A VC RXD Camera Lenses for Sony APS-C mirrorless Camera - Black',
                Price: 14999,
                company: 'Sony',
                type: 'camera',
                category: 'tech',
                url: 'https://res.cloudinary.com/dkl30c3oc/image/upload/v1787131647/SONYlENS30MM.jpg',
                directURL: 'https://www.amazon.in/s?k=sony+lens&crid=1IVA0JE6F37H2&sprefix=sony+lens%2Caps%2C321&ref=nb_sb_noss_1',
                deliveryDate: 'Sunday, August 25',
            },
            {
                title: 'Sony Aplha | 17-70mm F/2.8 Di III-A VC RXD Camera Lenses for Sony APS-C mirrorless Camera - Black',
                Price: 14999,
                company: 'Sony',
                type: 'camera',
                category: 'tech',
                url: 'https://res.cloudinary.com/dkl30c3oc/image/upload/v1787131647/SONYlENS30MM.jpg',
                directURL: 'https://www.amazon.in/s?k=sony+lens&crid=1IVA0JE6F37H2&sprefix=sony+lens%2Caps%2C321&ref=nb_sb_noss_1',
                deliveryDate: 'Sunday, August 25',
            },
            {
                title: 'Sony Aplha | 17-70mm F/2.8 Di III-A VC RXD Camera Lenses for Sony APS-C mirrorless Camera - Black',
                Price: 14999,
                company: 'Sony',
                type: 'camera',
                category: 'tech',
                url: 'https://res.cloudinary.com/dkl30c3oc/image/upload/v1787131647/SONYlENS30MM.jpg',
                directURL: 'https://www.amazon.in/s?k=sony+lens&crid=1IVA0JE6F37H2&sprefix=sony+lens%2Caps%2C321&ref=nb_sb_noss_1',
                deliveryDate: 'Sunday, August 25',
            },
            {
                title: 'Sony Aplha | 17-70mm F/2.8 Di III-A VC RXD Camera Lenses for Sony APS-C mirrorless Camera - Black',
                Price: 14999,
                company: 'Sony',
                type: 'camera',
                category: 'tech',
                url: 'https://res.cloudinary.com/dkl30c3oc/image/upload/v1787131647/SONYlENS30MM.jpg',
                directURL: 'https://www.amazon.in/s?k=sony+lens&crid=1IVA0JE6F37H2&sprefix=sony+lens%2Caps%2C321&ref=nb_sb_noss_1',
                deliveryDate: 'Sunday, August 25',
            },
            {
                title: 'Sony Aplha | 17-70mm F/2.8 Di III-A VC RXD Camera Lenses for Sony APS-C mirrorless Camera - Black',
                Price: 14999,
                company: 'Sony',
                type: 'camera',
                category: 'tech',
                url: 'https://res.cloudinary.com/dkl30c3oc/image/upload/v1787131647/SONYlENS30MM.jpg',
                directURL: 'https://www.amazon.in/s?k=sony+lens&crid=1IVA0JE6F37H2&sprefix=sony+lens%2Caps%2C321&ref=nb_sb_noss_1',
                deliveryDate: 'Sunday, August 25',
            },

        ]
    }

]


seedData(HomePage, homePageData, {
    clearExisting: true,
    label: 'Homepage',
})
