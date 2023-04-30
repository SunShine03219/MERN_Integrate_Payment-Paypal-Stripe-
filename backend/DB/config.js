
const mongoose = require("mongoose");

const dbConnection = async()=>{
    try{
        // 'mongodb://localhost:27017/Forms2';
        // mongoose.connect("mongodb+srv://admin-aldo:Egipto36@clusterpremics.oygvzs4.mongodb.net/premics",{
        mongoose.connect("mongodb://localhost:27017/premics", {
        });
          
        console.log('MongoDB activa');  
    }catch(error){
        console.log(error);
        throw new Error('error iniciando MongoDB');
    }
}

module.exports ={
    dbConnection
}

