const { default: mongoose } = require('mongoose');
const mogoose = require('mongoose');
const mongoURL = "mongodb+srv://mrinmay:root@cluster0.wa1agyu.mongodb.net/PetAdoption?retryWrites=true&w=majority"

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const ConnectToMongo = () => {
    mongoose.connect(mongoURL, connectionParams).then(() => {
        console.info("Connected To Mongo Successfully");
    }).catch((e) => {
        console.log("Error:", e);
    });
}


module.exports = ConnectToMongo;