const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            required: [true, "Product Image Not Found!"],
            trim: true,
        },

        images: {
            type: [String],
            default: [],
            validate: {
                validator: function (array) {
                    return array.length <= 4;
                },
                message: "You can add up to 4 additional images."
            }
        },

        title: {
            type: String,
            required: [true, "Product Title Not Found!"],
            trim: true,
            maxlength: [40, "Title should be under 40 characters!"],
        },

        company: {
            type: String,
            required: [true, "Company Name Not Found!"],
            trim: true,
            maxlength: [40, "Company name should be under 40 characters!"],
        },

        description: {
            type: String,
            required: [true, "Product Description Not Found!"],
            trim: true,
            maxlength: [200, "Description should be under 200 characters!"],
        },

        price: {
            type: Number,
            required: [true, "Price Not Found!"],
            min: [0, "Price cannot be negative!"],
        },

        category: {
            type: String,
            required: [true, "Product Category Missing!"],
            trim: true,
            minlength: [4, "Please Enter Valid Category"],
        }
    },
    {
        timestamps: true,
    }
);



module.exports = mongoose.model("Products", productSchema);




