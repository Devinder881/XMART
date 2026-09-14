const mongoose = require('mongoose');
const homePageSchema = new mongoose.Schema(
    {
        section: {
            type: String,
            required: [true, 'Please Select the section'],
            trim: true,
        },

        order: {
            type: Number,
            required: [true, "Order number Missing "],
        },
        type: {
            type: String,
            required: [true, "Please Select the Type of data"],
        },

        objects: {
            type: mongoose.Schema.Types.Mixed,
            required: true
        }
    }, {
    timestamps: true,
}
)

module.exports = mongoose.model("HomePage", homePageSchema);