const mongoose = require('mongoose');

const mongoURL = process.env.MONGO_URI || "mongodb+srv://username:password@cluster.mongodb.net/PetAdoption?retryWrites=true&w=majority";

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const ConnectToMongo = () => {
    mongoose.connect(mongoURL, connectionParams).then(() => {
        console.info("Connected To Mongo Successfully");
    }).catch((e) => {
        console.log("Error:", e);
        process.exit(1);
    });
}

module.exports = ConnectToMongo;
