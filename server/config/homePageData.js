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
        order: 1,
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
        order: 1,
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
        order: 1,
        type: 'productRow',
        objects: [
            {
                title: 'Apple MacBook Air 13-inch M4 Chip Laptop - 16GB RAM, 256GB SSD - Midnight',
                Price: 89999,
                company: 'Apple',
                type: 'laptop',
                category: 'tech',
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUm9g3SQqy9EduaCzBuvKseKk88TuIO4Sc4hnjM172CA&s=10',
                directURL: '',
                deliveryDate: 'Tuesday, August 26',
                imageHint: 'Apple MacBook Air M4 Midnight 13 inch product image'
            },

            {
                title: 'Samsung Galaxy Buds3 Pro True Wireless Earbuds - Adaptive Noise Cancellation - White',
                Price: 13999,
                company: 'Samsung',
                type: 'earbuds',
                category: 'tech',
                url: 'https://vader-prod.s3.amazonaws.com/1725462405-samsung-galaxy-buds-3-pro-product-jpg-66d876a0a841d.jpg',
                directURL: '',
                deliveryDate: 'Wednesday, August 27',
                imageHint: 'Samsung Galaxy Buds3 Pro White product image'
            },

            {
                title: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones - Black',
                Price: 24999,
                company: 'Sony',
                type: 'headphones',
                category: 'tech',
                url: 'https://bankofelectronics.com/4045-medium_default/sony-wh-1000xm5-best-active-noise-cancelling-wireless-bluetooth-over-ear-headphones-battery-life-30-hrs-black.jpg',
                directURL: '',
                deliveryDate: 'Thursday, August 28',
                imageHint: 'Sony WH-1000XM5 Black headphones product image'
            },

            {
                title: 'Logitech G502 X LIGHTSPEED Wireless Gaming Mouse - Black',
                Price: 12999,
                company: 'Logitech',
                type: 'gaming-mouse',
                category: 'gaming',
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIC3Co_0eUPIyz9MjC1IVaC5muFE4oUDEgp1ErODs1f4ony_N8rQcUCoX6&s=10',
                directURL: '',
                deliveryDate: 'Friday, August 29',
                imageHint: 'Logitech G502 X Lightspeed black gaming mouse product image'
            },

            {
                title: 'ASUS ROG Strix 27-inch QHD Gaming Monitor - 180Hz, 1ms - Black',
                Price: 32999,
                company: 'ASUS',
                type: 'monitor',
                category: 'gaming',
                url: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/b2251eb0-316d-4ce0-974f-2d0b30e8255a.jpg;maxHeight=312;maxWidth=312?format=webp',
                directURL: '',
                deliveryDate: 'Saturday, August 30',
                imageHint: 'ASUS ROG Strix 27 inch QHD gaming monitor product image'
            },

            {
                title: 'Canon EOS R50 Mirrorless Camera with RF-S 18-45mm Lens - Black',
                Price: 58999,
                company: 'Canon',
                type: 'camera',
                category: 'tech',
                url: 'https://m.media-amazon.com/images/I/81LskAU5h1L.jpg',
                directURL: '',
                deliveryDate: 'Sunday, August 31',
                imageHint: 'Canon EOS R50 18-45mm black mirrorless camera product image'
            },

            {
                title: "Nike Air Max Dn Men's Running Shoes - Black and White",
                Price: 12995,
                company: 'Nike',
                type: 'shoes',
                category: 'fashion',
                url: 'https://www.prodirectsport.com/cdn/shop/files/1042227_main.jpg?v=1789336709',
                directURL: '',
                deliveryDate: 'Monday, September 1',
                imageHint: "Nike Air Max Dn black white men's shoes product image"
            },
            {
                title: "Levi's Men's 511 Slim Fit Stretch Jeans - Dark Indigo",
                Price: 3999,
                company: "Levi's",
                type: 'jeans',
                category: 'fashion',
                url: 'https://lscoglobal.scene7.com/is/image/lscoglobal/MB_04511-6127_GLO_CL_FV?fmt=jpeg&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=400&hei=400',
                directURL: '',
                deliveryDate: 'Tuesday, September 2',
                imageHint: 'Levis 511 slim fit dark indigo jeans product image'
            },

            {
                title: 'Casio G-Shock Analog-Digital Watch with Shock Resistant Design - Black',
                Price: 10995,
                company: 'Casio',
                type: 'watch',
                category: 'fashion',
                url: 'https://www.preduce.com/cdn/shop/files/Casio_G-Shock_GA-V01SKE-8ADR_Analog-Digital_Transparent_Black11_1024x1024.png?v=1776677387',
                directURL: '',
                deliveryDate: 'Wednesday, September 3',
                imageHint: 'Casio G Shock black analog digital watch product image'
            },

            {
                title: 'Philips 3000 Series Air Fryer with Rapid Air Technology - Black',
                Price: 8999,
                company: 'Philips',
                type: 'air-fryer',
                category: 'appliances',
                url: 'https://www.domesticappliances.philips.co.in/cdn/shop/files/NA221.jpg?v=1788253098',
                directURL: '',
                deliveryDate: 'Thursday, September 4',
                imageHint: 'Philips 3000 Series black air fryer product image'
            },
            {
                title: 'Apple iPad Air 11-inch M3 Wi-Fi Tablet - 128GB - Space Grey',
                Price: 59999,
                company: 'Apple',
                type: 'tablet',
                category: 'tech',
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM0ZKFtMtf7yB26NN5okRh03wEox3op2Y41LzunI0NaA&s=10',
                directURL: '',
                deliveryDate: 'Friday, September 5',
                imageHint: 'Apple iPad Air M3 11 inch Space Grey product image'
            },

            {
                title: 'OnePlus 13 5G Smartphone - 16GB RAM, 512GB Storage - Black',
                Price: 69999,
                company: 'OnePlus',
                type: 'smartphone',
                category: 'tech',
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH1jXNpBdkiqevepSNeQFZd7WHK-JxwzE_NU9Ilp37nA&s=10',
                directURL: '',
                deliveryDate: 'Saturday, September 6',
                imageHint: 'OnePlus 13 black smartphone product image'
            },

            {
                title: 'JBL Charge 5 Portable Bluetooth Speaker - Waterproof - Black',
                Price: 14999,
                company: 'JBL',
                type: 'speaker',
                category: 'tech',
                url: 'https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:450/jbl/494841401/0/JUYWYh7SvP-oZmyHVc6e-JBL-BT-SPEAKER-GO-5-BLACK-494841401-i-1.jpg',
                directURL: '',
                deliveryDate: 'Sunday, September 7',
                imageHint: 'JBL Charge 5 black Bluetooth speaker product image'
            },

            {
                title: 'Keychron K2 Wireless Mechanical Keyboard - RGB Backlight - Black',
                Price: 8999,
                company: 'Keychron',
                type: 'keyboard',
                category: 'gaming',
                url: 'https://m.media-amazon.com/images/I/71Ab4+KeP1L.jpg',
                directURL: '',
                deliveryDate: 'Monday, September 8',
                imageHint: 'Keychron K2 RGB mechanical keyboard black product image'
            },

            {
                title: 'Razer BlackShark V2 Pro Wireless Gaming Headset - Black',
                Price: 14999,
                company: 'Razer',
                type: 'gaming-headset',
                category: 'gaming',
                url: 'https://m.media-amazon.com/images/I/71Z9KK9-zvL.jpg',
                directURL: '',
                deliveryDate: 'Tuesday, September 9',
                imageHint: 'Razer BlackShark V2 Pro black wireless gaming headset product image'
            },

            {
                title: 'Adidas Ultraboost 5 Running Shoes - Core Black and White',
                Price: 16999,
                company: 'Adidas',
                type: 'shoes',
                category: 'fashion',
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQR4bhz6W6A4wTW9sIHXbYmvsqYRc3C599EUbkuDz7LnTpG5QdQWOgdfU&s=10',
                directURL: '',
                deliveryDate: 'Wednesday, September 10',
                imageHint: 'Adidas Ultraboost 5 black white running shoes product image'
            },

            {
                title: 'Puma Essential Regular Fit Hooded Sweatshirt - Black',
                Price: 3499,
                company: 'Puma',
                type: 'hoodie',
                category: 'fashion',
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5WrkvLUbIrWJmYkEdRaeGroghYF3AooXZHzlOcNyzrnKNg2_fRpyVR44P&s=10',
                directURL: '',
                deliveryDate: 'Thursday, September 11',
                imageHint: 'Puma black hooded sweatshirt product image'
            },

            {
                title: 'Ray-Ban Aviator Classic Polarized Sunglasses - Gold and Green',
                Price: 12900,
                company: 'Ray-Ban',
                type: 'sunglasses',
                category: 'fashion',
                url: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/d/c/dc0d4b88053672611649.jpg',
                directURL: '',
                deliveryDate: 'Friday, September 12',
                imageHint: 'Ray Ban Aviator Classic gold green polarized sunglasses product image'
            },

            {
                title: 'Dyson V12 Detect Slim Cordless Vacuum Cleaner - Gold and Nickel',
                Price: 54900,
                company: 'Dyson',
                type: 'vacuum-cleaner',
                category: 'appliances',
                url: 'https://m.media-amazon.com/images/I/51X+L9rMPsL._SL500_.jpg',
                directURL: '',
                deliveryDate: 'Saturday, September 13',
                imageHint: 'Dyson V12 Detect Slim gold nickel vacuum cleaner product image'
            },

            {
                title: 'Bose QuietComfort Ultra Wireless Noise Cancelling Earbuds - Black',
                Price: 19900,
                company: 'Bose',
                type: 'earbuds',
                category: 'tech',
                url: 'https://avshack.in/cdn/shop/files/bose-quiet-comfort-ultra-earbuds-04.jpg?v=1733208459&width=1500',
                directURL: '',
                deliveryDate: 'Sunday, September 14',
                imageHint: 'Bose QuietComfort Ultra black wireless earbuds product image'
            },
        ]
    }

]


seedData(HomePage, homePageData, {
    clearExisting: true,
    label: 'Homepage',
})
