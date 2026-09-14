const ConnectDB = require('./db');



async function seedData(Model, Data, Options = {}) {
    const {
        clearExisting = false,
        label = "Data",

    } = Options;


    try {

        await ConnectDB();

        if (clearExisting) {
            await Model.deleteMany({});
        }

        await Model.insertMany(Data);
        process.exit(0);



    } catch (error) {
        console.error(`❌Failed! : Connection to ${label} failed! \n ${error.message}`);

        process.exit(1);
    }
}



module.exports = seedData;