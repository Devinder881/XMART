const homepageModel = require('../models/homePage');

const getHomepage = async (req, res) => {
    try {
        const homepage = await homepageModel.find()
        res.status(200).json({ success: true, data: homepage })
    } catch (error) {
        res.status(500).json({ success: false, data: error.message })
    }
}

module.exports = { getHomepage }


