const mongoose = require("mongoose");
require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });
const ConnectDB = require("./db");
const User = require("../models/User");

const ADMIN_DETAILS = {
    name: "Admin",
    email: "devilrajput1000@gmail.com",
    password: "87654321!",
    role: "Admin",
};

async function createAdmin() {
    try {
        await ConnectDB();

        const existingAdmin = await User.findOne({ role: "Admin" });
        if (existingAdmin) {
            console.log(`An admin already exists: ${existingAdmin.email}. Aborting — only one admin allowed.`);
            process.exit(0);
        }


        const existingEmail = await User.findOne({ email: ADMIN_DETAILS.email });
        if (existingEmail) {

            process.exit(0);
        }

        await User.create(ADMIN_DETAILS);
        process.exit(0);
    } catch (error) {
        console.error("Failed to create admin:", error.message);
        process.exit(1);
    }
}

createAdmin();