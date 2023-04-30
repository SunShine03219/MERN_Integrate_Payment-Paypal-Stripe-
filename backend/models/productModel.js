const{Schema,model} = require("mongoose");

const productSchema = Schema({
    curso: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },    
    video:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true,
    },

    


},{timestamps:true});


module.exports= model('Product',productSchema)

