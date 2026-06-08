const Mongoose  = require("mongoose");


const mongodbConnnect=async()=>{

    try {
        await Mongoose.connect(process.env.MONGODB_URL)
        .then(()=>console.log(" mongodb is connected successfuly"))
         .catch((error)=>console.log(error));
            
        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports=mongodbConnnect;