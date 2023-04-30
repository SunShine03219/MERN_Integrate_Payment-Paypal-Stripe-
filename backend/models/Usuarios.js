const{Schema,model} = require("mongoose");

const UsuarioSchema = Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique: true
    },
    pwd:{
        type:String,
        require:true
    },
    Permiso1:{
        type:Boolean,
        required:true,
        default:false
    },
    Permiso2:{
        type:Boolean,
        required:true,
        default:false
    },
    Permiso3:{
        type:Boolean,
        required:true,
        default:false
    }

});

module.exports= model('Usuario',UsuarioSchema)