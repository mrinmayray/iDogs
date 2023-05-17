const Adopt = require("../models/adoptModel");


// The code for create user in chat 
module.exports.adoptRegister = async(req,res,next) =>{
    try{
        const {doggender,dogname,dogbreed,dogage,owner,contact,dogpic} = req.body;
    const dogNameCheck = await Adopt.findOne({dogname});
    if(dogNameCheck){
        return res.json({msg:"Name already exit",status:false});
    }
    const adopt = await Adopt.create({
        doggender,
        dogname,
        dogbreed,
        dogage,
        owner,
        contact,
        dogpic,
    });
    return res.json({status:true,adopt});
    }catch(err){
        next(err)
    }

};




module.exports.getAllAdopts = async (req,res,next) => {
    try{
        const adopts = await Adopt.find({}).select(
            [
                "doggender",
                "dogname",
                "dogbreed",
                "dogage",
                "owner",
                "contact",
                "dogpic",
                "_id",
            ]
        );
        return res.json(adopts);
    }catch(err){
        next(err);
    }
};